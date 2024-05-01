const MARKET_PRODUCE = {
    rice: "10 bags",
    beans: "12 bags",
    wheat_flour: "20 bags",
    yam: "400 tubers",
    potato: "700 tubers",
    onion: "200 bags"
};

const WHOLESALE_BUYER = Object.create(MARKET_PRODUCE);
console.log(WHOLESALE_BUYER);

WHOLESALE_BUYER.rice = "3 bags";
WHOLESALE_BUYER.beans = "5 bags";
WHOLESALE_BUYER.yam = "120 tubers";
WHOLESALE_BUYER.wheat_flour = "8 bags";
WHOLESALE_BUYER.potato = "300 tubers";
WHOLESALE_BUYER.onion = "59 bags";
console.log(WHOLESALE_BUYER);

const RETAILER = Object.create(WHOLESALE_BUYER);
RETAILER.rice = "1 and 1/2 bags";
RETAILER.beans = "2 bags";
RETAILER.yam = "25 tubers";
RETAILER.potato = "50 tubers";

for (const key in RETAILER) {
    const value = RETAILER[key];
    console.log(`${key} is ${value}`);
}

for (const key in RETAILER) {
    if (RETAILER.hasOwnProperty(key)) {
        const value = RETAILER[key];
        console.log(`${key} is ${value}`);
    }
}
