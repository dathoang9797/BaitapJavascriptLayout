/**
 *  Purpose: Tính tổng 2 ký số
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/

const formDigitsSign = document.querySelector(".calTotalTwoDigitsSign");
const digitsSignInput = document.querySelector("#digitsSign");
const outputTotalTwoDigitsSign = document.querySelector(
  "#outputTotalTwoDigitsSign"
);
const calTotalTwoDigitsSign = (digitsSign = 0) => {
  const tensDigit = Math.floor(digitsSign / 10);
  const unitDigit = digitsSign % 10;
  return (tensDigit + unitDigit).toLocaleString();
};
formDigitsSign.addEventListener("submit", function (e) {
  e.preventDefault();
  const digitsSign = +digitsSignInput.value;
  const result = calTotalTwoDigitsSign(digitsSign);
  outputTotalTwoDigitsSign.innerText = result;
});
