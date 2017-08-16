import {Hash, HashRate} from "./hash";
import {Algorithms as Algorithm} from "./algorithms";

import {coin as Bitcoin} from "./coins/btc";
import {coin as Ethereum} from "./coins/eth";
import {coin as EthereumClassic} from "./coins/etc";
import {coin as ZCash} from "./coins/zec";
import {coin as Siacoin} from "./coins/sia";
import {coin as Decred} from "./coins/dcr";
import {coin as Pascal} from "./coins/pascal";
import {coin as Dash} from "./coins/dash";
import {coin as Litecoin} from "./coins/ltc";
import {coin as Monero} from "./coins/monero";
import {coin as Keccak} from "./coins/keccak";
import {coin as Lbry} from "./coins/lbry";

export interface Coin {
  name: string
  names?: string[]

  NiceHash: {
    hashrate: HashRate
    id: Algorithm
  }

  WhatToMine: {
    hashrate: number
    id: number
  }

  enabled: boolean
}

export var coins: Coin[] = [
  Bitcoin,
  Ethereum,
  EthereumClassic,
  ZCash,
  Siacoin,
  Decred,
  Pascal,
  Dash,
  Litecoin,
  Monero,
  Keccak,
  Lbry,
];

coins.sort(function(a, b) {
  var atext = a.name.toUpperCase();
  var btext = b.name.toUpperCase();
  return (atext < btext) ? -1 : (atext > btext) ? 1 : 0;
});