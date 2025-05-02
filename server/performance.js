const os = require('os');
const process = require('process');

// Function to log memory usage
function logMemoryUsage() {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage (MB): RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB, Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB, Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`);
}

// Function to log CPU usage
function logCPUUsage() {
    const cpus = os.cpus();
    let userCpu = 0;
    let sysCpu = 0;

    cpus.forEach(cpu => {
        userCpu += cpu.times.user;
        sysCpu += cpu.times.sys;
    });

    const totalCPU = userCpu + sysCpu;
    console.log(`CPU Usage: User: ${((userCpu / totalCPU) * 100).toFixed(2)}%, System: ${((sysCpu / totalCPU) * 100).toFixed(2)}%`);
}

// Function to log memory and CPU usage at regular intervals
setInterval(() => {
    logMemoryUsage();
    logCPUUsage();
}, 5000); // Logs every 5 seconds
