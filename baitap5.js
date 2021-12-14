/**
 *  Purpose: Tính tổng 2 ký số
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/

const calTotalTwoDigitsSign = ((digitsSign = 0) => {
  const tensDigit = Math.floor(digitsSign / 10);
  const unitDigit = digitsSign % 10;
  return (tensDigit + unitDigit).toLocaleString();
})(34);

console.log({ calTotalTwoDigitsSign });
