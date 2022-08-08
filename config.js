export const networkConfig = {
  80001: [
    {
      phoneLinkAddress: "0x6Ee89F6d43fd9d40dbB3cDbCA1692c99A090f72C", //proxy deployment
      tokenAddress: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022",
      alt: "MATIC",
      networkName: "Mumbai",
    },
  ],

  4: [
    {
      phoneLinkAddress: "0xF09f5824c693804Be9573f5f75f7d3f0F97e1437", //proxy deployment
      tokenAddress: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022",
      alt: "ETH",
      networkName: "Rinkeby",
    },
  ],
  3: [
    {
      phoneLinkAddress: "0x9192f607A91D50c555656E6392675FdC0D9620D3", //proxy
      tokenAddress: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022",
      alt: "ETH",
      networkName: "Kovan",
    },
  ],
  1313161555: [
    {
      phoneLinkAddress: "0x9414C157938bf269414da2c2fd3e776d10Ca050C", //proxy deployment
      tokenAddress: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022",
      alt: "ETH",
      networkName: "Aurora_Testnet",
    },
  ],
  137: [
    {
      phoneLinkAddress: "0xeaCd67207863447CD1245a9C2aBD60f5D003c943",
      tokenAddress: "0x42CC424D6a821058C29105f57c409d40991FB316",
      alt: "MATIC",
      networkName: "Matic Mainnet",
    },
  ],
  24: [
    {
      phoneLinkAddress: "0x42CC424D6a821058C29105f57c409d40991FB316", //proxy address
      tokenAddress: "0xE14F49b259863Bc9E3264d1909444EaF82528DcD",
      alt: "KAI",
      networkName: "kardiachain_main",
    },
  ],

  242: [
    {
      phoneLinkAddress: "0xbaF3d8A42943b901fEFd22Ab3c671E827028236A", //proxy address
      tokenAddress: "0xbE2c591971F69AC3a356dB0bd47Fa113EF276BFc", //proxy
      alt: "KAI",
      networkName: "kardiachain_test",
    },
  ],
};

export const getConfigByChain = (chain) => networkConfig[chain];
