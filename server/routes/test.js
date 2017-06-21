"use strict";
// import { * } as  from "child_process";
exports.__esModule = true;
var si = require("systeminformation");
// child.exec("ls ~/")
// child.exec("cat /proc/meminfo | grep Mem",  (error: Error, stdout: string, stderr: string) => {
//     console.log(error);
//     console.log(stdout);
//     console.log(stderr);
// } );
// si.cpuCurrentspeed(function (data) {
//     // console.log('CPU-Information:');
//     console.log(data);
// });

// si.mem(function (data) {
//     // console.log('CPU-Information:');
//     console.log(data);
    
// });

// si.fsSize(function(data) {
//     // console.log('CPU-Information:');
//     console.log(data);
// })

// si.disksIO(function(data) {
//     // console.log('CPU-Information:');
//     console.log(data);
// })

// si.networkInterfaces(function(data) {
//     // console.log('CPU-Information:');
//     console.log(data);
// })

si.fsSize().then( data => {
    console.log(data);
});