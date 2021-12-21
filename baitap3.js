 //     /**
    //  *  Purpose: Quy đổi tiền
    //  *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
    //  *  Date created: 14/12/2021
    //  *  Version:
    //  **/
    const formCurrencyExchange = document.querySelector(".currencyExchange");
    const USD = document.querySelector("#usd");
    const outputCurrencyExchange = document.querySelector(
      "#outputCurrencyExchange"
    );
    const currencyExchange = (usd = 0) => {
      return (usd * 23500).toLocaleString();
    };
    formCurrencyExchange.addEventListener("submit", function (e) {
      e.preventDefault();
      const usd = +USD.value;    
      const result = currencyExchange(usd);
      outputCurrencyExchange.innerText = `${result}VND`;
    });