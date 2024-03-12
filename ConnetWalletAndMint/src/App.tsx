import React, { useMemo } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import loadable from '@loadable/component';
import LoadingTopPageFallBack from './components/common/LoadingTopPageFallback';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  CloverWalletAdapter,
  SolflareWalletAdapter,
  SolongWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// import the styles
require('@solana/wallet-adapter-react-ui/styles.css');

const PageNotFoundView = loadable(() => import('./other-pages/PageNotFoundView'), {
  fallback: <LoadingTopPageFallBack />,
});
const LoginPage = loadable(() => import('./login-page/LoginPage'), {
  fallback: <LoadingTopPageFallBack />,
});
const HomePage = loadable(() => import('./home-page/HomePage'), {
  fallback: <LoadingTopPageFallBack />,
});
const InventoryPage = loadable(() => import('./inventory-page/InventoryPage'), {
  fallback: <LoadingTopPageFallBack />,
});

interface PageRoute {
  path: string,
  element: JSX.Element,
  children: any[],
}

const App: React.FC = () => {
  // you can use Mainnet, Devnet or Testnet here
  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  // initialise all the wallets you want to use
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CloverWalletAdapter(),
      new SolongWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [solNetwork]
  );

  const listRoute: PageRoute[] = [
    {
      path: '/',
      element: <HomePage />,
      children: [],
    },
    {
      path: '/home',
      element: <HomePage />,
      children: [],
    },
    {
      path: '/404',
      element: <PageNotFoundView />,
      children: [],
    },
    {
      path: '/login',
      element: <LoginPage />,
      children: [],
    },
    {
      path: '/inventory',
      element: <InventoryPage />,
      children: [],
    },
  ];

  const routing = useRoutes(listRoute);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark' />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider autoConnect={true} wallets={wallets}>
          <WalletModalProvider>
            {routing}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
