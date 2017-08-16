import {Hash} from "../hash";
import {Algorithms} from "../algorithms";
import {run as index} from "../index";

export var coin = {
  name: "DASH",
  names: [

  ],
  NiceHash: {
    hashrate: Hash.GIGA,
    id: Algorithms.X11,
  },
  WhatToMine: {
    hashrate: 1000,
    id: 34,
  },
  enabled: false,
}

const runningAsScript = require.main === module;

function run(){
  index(coin);
}

if (runningAsScript){
  run();
}