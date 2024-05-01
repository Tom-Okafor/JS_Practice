function newUser() {} // constructor

newUser.prototype.createNewUser = function () {
    console.log("CREATE NEW USER!");
};

newUser.prototype.createUserName = function () {
    console.log("creating name for user!");
};

newUser.prototype.createUserPage = function () {
    console.log("create page for user!");
};

const myNewAccount = new newUser();
myNewAccount.createNewUser();
myNewAccount.createUserName();
myNewAccount.createUserPage();
myNewAccount.createUserName = "Tom Notes";
console.log(myNewAccount.createUserName);
myNewAccount.userInfo = {
    displayName: "Real Tee Notes",
    age: 26,
    interests: ["music", "Beyoncé", "Books", "Movies"]
};
console.log(myNewAccount.userInfo.age);
console.log(myNewAccount.userInfo.displayName);
myNewAccount.createUserName = undefined;
console.log(myNewAccount.createUserName)