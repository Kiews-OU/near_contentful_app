import { connect, Contract, keyStores, KeyPair, WalletConnection,utils } from 'near-api-js'
import { useSelector } from 'react-redux';
import getConfig from './config'
const nearAPI = require("near-api-js")

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

export async function LoadAcc() {
  window.near = await connect(nearConfig);
  // console.log(window.near);
  window.wallet = new WalletConnection(window.near);
  console.log(window.wallet);
  // console.log(window.wallet);
  window.account = await window.near.account(localStorage.accountID);
  console.log(window.account);
}

export function login({sdk}) {
  console.log(sdk);
  const accessKey = KeyPair.fromRandom('ed25519');
  const keyStore = nearConfig.keyStore
  keyStore.setKey("testnet", localStorage.accountID, accessKey)
  const publicKey = accessKey.getPublicKey().toString()
  console.log(publicKey);
  window.open(`https://wallet.${nearConfig.networkId}.near.org/login?contract_id=${localStorage.accountID}&public_key=` + publicKey + "&success_url=" + encodeURIComponent(`https://app.contentful.com/spaces/${sdk.ids.space}/apps/app_installations/${sdk.ids.app}/`))

}

export const signOut = () => {
  localStorage.removeItem('accountID')
  window.wallet.signOut();
};


export const SendMoney = async (data) => {
  console.log(data);
    try {
        const result = await window.account.sendMoney(
            data.rid, // receiver account
            // amount in yoctoNEAR
            utils.format.parseNearAmount(data.sum)
        )
        console.log(result);
     
        data.sdk.notifier.success(`Sending ${(data.sum)}Ⓝ from ${localStorage.accountID} to ${data.rid}...`)
    } catch (error) {
        console.log(error);
        data.sdk.notifier.error(`oops something went wrong`)
    }
}


