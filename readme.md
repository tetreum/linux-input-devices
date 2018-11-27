# Linux input identifier

Easy `/proc/bus/input/devices` reader

# Example

```js
const inputDevices = require("./index.js");

inputDevices.getDevices().then((devices) => {
    console.log(devices);
});

inputDevices.get('handlers', 'event0').then((devices) => {
    console.log(devices);
});
```

Output per device:
```js
{
    bus: '0019 Vendor=0000 Product=0001 Version=0000',
    name: '"Power Button"',
    phys: 'PNP0C0C/button/input0',
    sysfs: '/devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0C:00/input/input0',
    uniq: '',
    handlers: 'kbd event0 ',
    prop: '0',
    ev: '3',
    key: '10000000000000 0'
}
```
