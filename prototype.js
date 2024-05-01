function infinixPhone() {} // constructor

infinixPhone.prototype.startDevice = function () {
    console.log("start the device");
};

infinixPhone.prototype.unlockDevice = console.log("unlock the phone");

let myInfinixDevice = new infinixPhone();

myInfinixDevice.unlockDevice;
myInfinixDevice.startDevice();
myInfinixDevice.addApp = ["instagram"];
console.log(myInfinixDevice);
myInfinixDevice.addApp.push("Facebook");
console.log(myInfinixDevice.addApp);
