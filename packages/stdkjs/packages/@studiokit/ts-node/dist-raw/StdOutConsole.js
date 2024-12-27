
// @ts-check

"use strict";



const { Console, } = require("console");

const stdoutConsole = (
  new Console({ stdout: process.stdout, stderr: process.stdout, })
) ;


exports.stdoutConsole = stdoutConsole ;




