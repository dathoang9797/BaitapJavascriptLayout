/**
 *  Purpose: Tính diện tích , chu vi hìnnhậtnhậth chữ nhật
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/
const formAcreageRectangle = document.querySelector(".acreageRectangle");
const formPerimeterRectangle = document.querySelector(".perimeterRectangle");
const widthAcreageRectangle = document.querySelector("#widthAcreageRectangle");
const heightAcreageRectangle = document.querySelector(
  "#heightAcreageRectangle"
);
const widthPerimeterRectangle = document.querySelector(
  "#widthPerimeterRectangle"
);
const heightPerimeterRectangle = document.querySelector(
  "#heightPerimeterRectangle"
);
const outputAcreageRectangle = document.querySelector(
  "#outputAcreageRectangle"
);
const outputPerimeterRectangle = document.querySelector(
  "#outputPerimeterRectangle"
);
const acreageRectangle = (height = 0, width = 0) => {
  return (height * width).toLocaleString();
};
const perimeterRectangle = (height = 0, width = 0) => {
  return ((height + width) * 2).toLocaleString();
};
formAcreageRectangle.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = +heightAcreageRectangle.value.replace(/,/g, ".");
  const width = +widthAcreageRectangle.value.replace(/,/g, ".");
  const result = acreageRectangle(height, width);
  outputAcreageRectangle.innerText = result;
});
formPerimeterRectangle.addEventListener("submit", function (e) {
  e.preventDefault();
  e.preventDefault();
  const height = +heightPerimeterRectangle.value.replace(/,/g, ".");
  const width = +widthPerimeterRectangle.value.replace(/,/g, ".");
  const result = perimeterRectangle(height, width);
  outputPerimeterRectangle.innerText = result;
});
