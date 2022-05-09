import { connect,  KeyPair, WalletConnection,utils } from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

export async function LoadAcc() {
  window.near = await connect(nearConfig);
  window.wallet = new WalletConnection(window.near);
  window.account = await window.near.account(localStorage.accountID);
}

export function login({sdk}) {
  console.log(sdk);
  const accessKey = KeyPair.fromRandom('ed25519');
  const keyStore = nearConfig.keyStore
  keyStore.setKey("testnet", localStorage.accountID, accessKey)
  const publicKey = accessKey.getPublicKey().toString()
  window.open(`https://wallet.${nearConfig.networkId}.near.org/login?contract_id=${localStorage.accountID}&public_key=` + publicKey + "&success_url=" + encodeURIComponent(`https://app.contentful.com/spaces/${sdk.ids.space}/apps/app_installations/${sdk.ids.app}/`))

}

export const signOut = () => {
  localStorage.removeItem('accountID')
  window.wallet.signOut();
};


export const SendMoney = async (data) => {
    try {
        await window.account.sendMoney(
            data.rid,
            utils.format.parseNearAmount(data.sum)
        )
        data.sdk.notifier.success(`Sending ${(data.sum)}Ⓝ from ${localStorage.accountID} to ${data.rid}...`)
    } catch (error) {
        data.sdk.notifier.error(`oops something went wrong`)
    }
}
export const RecieveMoney=()=>{
  window.open(`https://wallet.testnet.near.org/receive-money`)
}


