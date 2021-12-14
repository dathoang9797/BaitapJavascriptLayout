/**
 *  Purpose: Quy đổi tiền
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/
const currencyExchange = ((usd = 0) => {
  return (usd * 23500).toLocaleString();
})(2);
console.log({ currencyExchange });
