import { defineChain } from '../../utils/chain/defineChain.js'

export const xdc = /*#__PURE__*/ defineChain({
  id: 50,
  name: 'XinFin Network',
  nativeCurrency: {
    decimals: 18,
    name: 'XDC',
    symbol: 'XDC',
  },
  rpcUrls: {
    default: { http: ['https://rpc.xinfin.network'] },
  },
  blockExplorers: {
    xinfin: {
      name: 'XinFin',
      url: 'https://explorer.xinfin.network',
    },
    default: {
      name: 'Blocksscan',
      url: 'https://xdc.blocksscan.io',
    },
  },
})
