import { PageExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import './global.css'
import { LoginCard } from '../components/LoginCard';
import { WalletAccount } from '../components/WalletAccount';
 const Page = () => {
  const sdk = useSDK<PageExtensionSDK>();
  return <>
    <div className='main' >
      {
        // @ts-ignore
        localStorage.accountID?(<WalletAccount sdk={sdk} />):(<LoginCard sdk={sdk}/>)
      }
    </div>
  </>;
};


export default Page;
