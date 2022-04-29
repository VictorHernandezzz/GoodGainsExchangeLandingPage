<!-- This is the JS file for the CoinGecko market call that fetches the price of the coins on the homepage -->

//coins variables
let metagodsPrice = document.getElementById("metagodsPrice");
let sidusPrice = document.getElementById("sidusPrice");
let illuviumPrice = document.getElementById("illuviumPrice");
let affynPrice = document.getElementById("affynPrice");
let splinterlandsPrice = document.getElementById("splinterlandsPrice");
let atariPrice = document.getElementById("atariPrice");




const livePrice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=metagods%2Csidus%2Cilluvium%2Caffyn%2Csplinterlands%2Catari&vs_currencies=USD&include_market_cap=true&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}
$.ajax(livePrice).done(function (response) {
    console.log(response);

    metagodsPrice.innerHTML = response.metagods.usd;
    sidusPrice.innerHTML = response.sidus.usd;
    illuviumPrice.innerHTML = response.illuvium.usd;
    affynPrice.innerHTML = response.affyn.usd;
    splinterlandsPrice.innerHTML = response.splinterlands.usd;
    atariPrice.innerHTML = response.atari.usd;
});
