







import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import { inspect, } from 'util';

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore-setups/src/util-eawo.mjs'; ;







import { xBall1, } from "studk-i3d/src/xt/SphericalMeshSpm.ts" ;






console["log"]((
  inspect((
    xBall1({ x: 5, y: 5, z: 5, } , 1, {
      grnInDeg: 90 ,
    } )
  ), false, 8, true )
)) ;












