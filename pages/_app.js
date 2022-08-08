import Header from "../components/menu/header";
import Footer from "../components/menu/Footer";
import React from "react";
import { Router, Location, Redirect } from "@reach/router";
import ScrollToTopBtn from "../components/menu/ScrollToTop";
import { createGlobalStyle } from "styled-components";
import { WagmiConfig, configureChains, chain, createClient } from "wagmi";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
  wallet,
  Chain,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
//import "../assets/animated.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/elegant-icons/style.css";
import "../node_modules/et-line/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import '../node_modules/bootstrap/dist/js/bootstrap.js';
import "../assets/style.scss";

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id="routerhang">
        <div key={location.key}>
          <Router location={location}>{children}</Router>
        </div>
      </div>
    )}
  </Location>
);

const Kardiachain_testNet = {
  id: 242,
  name: "KAI TestNet",
  network: "Kardiachain-testnet",
  iconUrl:
    "https://ipfs.infura.io/ipfs/QmV91sx1aWr2RhzF3LRq5M1qoGvYURaqTtsKjF3kiE88Xw",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "KAI",
    symbol: "KAI",
  },
  rpcUrls: {
    default: "https://dev.kardiachain.io/",
  },
  blockExplorers: {
    default: {
      name: "Kai-Test-Scanner",
      url: "https://explorer.kardiachain.io/",
    },
  },
  testnet: false,
};

const Kardiachain_mainnet = {
  id: 24,
  name: "KARDIACHAIN MAINNET",
  network: "Kardiachain-mainnet",
  iconUrl:
    "https://ipfs.infura.io/ipfs/QmV91sx1aWr2RhzF3LRq5M1qoGvYURaqTtsKjF3kiE88Xw",
  iconBackground: "#d7fc03",
  nativeCurrency: {
    decimals: 18,
    name: "KAI",
    symbol: "KAI",
  },
  rpcUrls: {
    default: "https://rpc.kardiachain.io",
  },
  blockExplorers: {
    default: { name: "Kai-Scanner", url: "https://explorer.kardiachain.io/" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [Kardiachain_mainnet, Kardiachain_testNet, chain.polygon],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

// const {connectors} = getDefaultWallets({
//   appName: "My App",
//   chains
// })

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.rainbow({ chains }),
      wallet.walletConnect({ chains }),
      wallet.metaMask({ chains }),
      wallet.trust({ chains }),
      wallet.argent({ chains }),
      wallet.coinbase({ appName: "My App", chains }),
      wallet.brave({ chains }),
      wallet.steak({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <>
      <div className="wraper">
        <GlobalStyles />
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme()}
            coolMode
            showRecentTransactions={true}
          >
            <ScrollTop path="/">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ScrollTop>
            <ScrollToTopBtn />
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </>
  );
}

export default MyApp;
