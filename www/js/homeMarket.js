<!-- This is the JS file for the CoinGecko market call that fetches the price of the coins on the homepage -->

//coins variables

//coin price
let metagodsPrice = document.getElementById("metagodsPrice");
let sidusPrice = document.getElementById("sidusPrice");
let illuviumPrice = document.getElementById("illuviumPrice");
let affynPrice = document.getElementById("affynPrice");
let splinterlandsPrice = document.getElementById("splinterlandsPrice");
let atariPrice = document.getElementById("atariPrice");

//coin 24 hour change
let metagods24Change = document.getElementById("metagods24Change");
let sidus24Change = document.getElementById("sidus24Change");
let illuvium24Change = document.getElementById("illuvium24Change");
let affyn24Change = document.getElementById("affyn24Change");
let splinterlands24Change = document.getElementById("splinterlands24Change");
let atari24Change = document.getElementById("atari24Change");

let metagods24ChangeSymbol = document.getElementById("metagods24ChangeSymbol");
let sidus24ChangeSymbol = document.getElementById("sidus24ChangeSymbol");
let illuvium24ChangeSymbol = document.getElementById("illuvium24ChangeSymbol");
let affyn24ChangeSymbol = document.getElementById("affyn24ChangeSymbol");
let splinterlands24ChangeSymbol = document.getElementById( "splinterlands24ChangeSymbol");
let atari24ChangeSymbol = document.getElementById("atari24ChangeSymbol");













const livePrice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=metagods%2Csidus%2Cilluvium%2Caffyn%2Csplinterlands%2Catari&vs_currencies=USD&include_market_cap=true&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}
$.ajax(livePrice).done(function (response) {
    console.log(response);
    let metagods24ChangeNum = JSON.stringify(response.metagods.usd_24h_change).substring(0,5);
    let sidus24ChangeNum = JSON.stringify(response.sidus.usd_24h_change).substring(0,5);
    let illuvium24ChangeNum = JSON.stringify(response.illuvium.usd_24h_change).substring(0,5);
    let affyn24ChangeNum = JSON.stringify(response.affyn.usd_24h_change).substring(0,5);
    let splinterlands24ChangeNum = JSON.stringify(response.splinterlands.usd_24h_change).substring(0,5);
    let atari24ChangeNum = JSON.stringify(response.atari.usd_24h_change).substring(0,5);

    function is24hNeg (coinNum) {
        if (Math.sign(coinNum) === -1) {
            coinNum = parseFloat(coinNum);
            console.log(coinNum);
        } else if (Math.sign(coinNum) === 1) {
            coinNum = coinNum.substring(0,4);
            coinNum = parseFloat(coinNum);
            console.log(coinNum);
        } else {

        }
    }
    is24hNeg(metagods24ChangeNum);
    is24hNeg(sidus24ChangeNum);
    is24hNeg(illuvium24ChangeNum);
    is24hNeg(affyn24ChangeNum);
    is24hNeg(splinterlands24ChangeNum);
    is24hNeg(atari24ChangeNum);

    metagodsPrice.innerHTML = JSON.stringify(response.metagods.usd).substring(0,7);
    metagods24Change.innerHTML = metagods24ChangeNum;

    if(Math.sign(metagods24ChangeNum) === -1) {
        metagods24ChangeSymbol.innerHTML = "trending_down";
    } else {}

    sidusPrice.innerHTML = JSON.stringify(response.sidus.usd).substring(0,7);
    sidus24Change.innerHTML = sidus24ChangeNum;

    if(Math.sign(sidus24ChangeNum) === -1) {
        sidus24ChangeSymbol.innerHTML = "trending_down";
    } else {}

    illuviumPrice.innerHTML = JSON.stringify(response.illuvium.usd).substring(0,7);
    illuvium24Change.innerHTML = illuvium24ChangeNum;

    if(Math.sign(illuvium24ChangeNum) === -1) {
        illuvium24ChangeSymbol.innerHTML = "trending_down";
    } else {}

    affynPrice.innerHTML = JSON.stringify(response.affyn.usd).substring(0,7);
    affyn24Change.innerHTML = affyn24ChangeNum;

    if(Math.sign(affyn24ChangeNum) === -1) {
        affyn24ChangeSymbol.innerHTML = "trending_down";
    } else {}

    splinterlandsPrice.innerHTML = JSON.stringify(response.splinterlands.usd).substring(0,7);
    splinterlands24Change.innerHTML = splinterlands24ChangeNum;

    if(Math.sign(splinterlands24ChangeNum) === -1) {
        splinterlands24ChangeSymbol.innerHTML = "trending_down";
    } else {}

    atariPrice.innerHTML = JSON.stringify(response.atari.usd).substring(0,7);
    atari24Change.innerHTML = atari24ChangeNum;

    if(Math.sign(atari24ChangeNum) === -1) {
        atari24ChangeSymbol.innerHTML = "trending_down";
    } else {}
});




