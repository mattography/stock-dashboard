$(document).ready(function () {

    $.getJSON('https://finance.google.com/finance/info?client=ig&q=NYSE:FB&callback=?', function (response) {
        var stockInfo = response[0];
        var stockString =
            '<div class="stockWrapper">';
        stockString += 'Company: <span class="stockSymbol"><b>' + stockInfo.t + '</b></span><br />';
        stockString += 'Price: <span class="stockPrice">' + stockInfo.l + '</span><br />';
        stockString += 'Change: <span class="stockChange">' + stockInfo.c + '</span><br />';
        stockString += ' Reported at: <span>at</span> <span class="stockTime">' + stockInfo.ltt + '</span><hr>';
        stockString += '</div>';
        $('.stockTick').prepend(stockString);
    });
    $.getJSON('https://finance.google.com/finance/info?client=ig&q=NYSE:USMD&callback=?', function (response) {
        var stockInfo = response[0];
        var stockString2 =
            '<div class="stockWrapper">';
        stockString2 += 'Company: <span class="stockSymbol"><b>' + stockInfo.t + '</b></span><br />';
        stockString2 += 'Price: <span class="stockPrice2">' + stockInfo.l + '</span><br />';
        stockString2 += 'Change: <span class="stockChange">' + stockInfo.c + '</span><br />' 
        stockString2 += ' Reported at: <span>at</span> <span class="stockTime">' + stockInfo.ltt + '</span>';
        stockString2 += '</div>';
        $('.stockTick2').prepend(stockString2);
 $('.total').append(parseFloat($('.stockPrice').text())*16 + $('.stockPrice2').text()*116).digits();
    });
});
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/i, "$1,") ); 
    })
}