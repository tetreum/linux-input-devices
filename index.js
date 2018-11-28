const fs = require('fs');

const processEntry = (entry) => {
    let output = {},
        attr,
        i;

    entry = entry.split("\n");

    for (let k in entry) {
         attr = entry[k].substr(3);
         i = attr.indexOf("=");
         output[attr.substr(0, i).toLowerCase()] = attr.substr(i + 1);
    }

    return output;
}

const getDevices = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile('/proc/bus/input/devices', (err, file) => {
            file = file.toString().split("\n\n");
            let list = [];

            for (let k in file) {
                if (file[k].length > 0) {
                    list.push(processEntry(file[k]));
                }
            }

            return resolve(list);
        });
    });
}

const get = async (attr, val) => {
    const devices = await getDevices();
    val = val.toLowerCase();

    return new Promise((resolve, reject) => {
        devices.find((entry) => {
            if (typeof entry[attr] === "undefined") {
                return reject();
            }
            if (entry[attr].toLowerCase().indexOf(val) !== -1) {
                return resolve(entry);
            }
        });
    });
}


module.exports = {
    getDevices,
    get
}
