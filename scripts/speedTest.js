const { exec } = require('child_process');

function iperfDown(serverIp, port, callback) {
    exec(`iperf3 -c ${serverIp} -R -p ${port} -J`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing iperf3: ${error}`);
            console.error(stderr);
            return;
        }
        try {
            const result = JSON.parse(stdout);
            const speed = result.end.sum_received.bits_per_second / 1e6; // Convert to Mbps
            callback(null, speed);
        } catch (err) {
            callback(err);
        }
    });
}



function iperfUp(serverIp, port, callback) {
    exec(`iperf3 -c ${serverIp} -p ${port} -J`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing iperf3: ${error}`);
            console.error(stderr);
            return;
        }
        try {
            const result = JSON.parse(stdout);
            const speed = result.end.sum_received.bits_per_second / 1e6; // Convert to Mbps
            callback(null, speed);
        } catch (err) {
            callback(err);
        }
    });
}
    

const serverIp = 'iperf3.digav.net';
const port = '5201';

iperfDown(serverIp, port, (err, speed) => {
    if (err) {
        console.error(`Error parsing iperf3 output: ${err}`);
    } else {
        console.log(`Download: ${speed.toFixed(2)} Mbps`);
        iperfUp(serverIp, port, (err, speed) => {
            if (err) {
                console.error(`Error parsing iperf3 output: ${err}`);
            } else {
                console.log(`Upload: ${speed.toFixed(2)} Mbps`);
            }
        });
    }
});




