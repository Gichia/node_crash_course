/**
 * OS Module 
**/
const os = require('os');

// Platform
const platform = os.platform();
console.log(platform);

// CPU Architecture
const cpu = os.arch();
console.log(cpu);

// CPU Core Info
const cpu_info = os.cpus();
console.log(cpu_info);

// Total Memory
const total_mem = os.totalmem();
console.log(total_mem);

// Free Memory
const free_mem = os.freemem();
console.log(free_mem);

// Home Directory
const home_dir = os.homedir();
console.log(home_dir);

// CPU Uptime
const uptime = os.uptime();
console.log(uptime);