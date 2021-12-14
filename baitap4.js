/**
 *  Purpose: Tính diện tích , chu vi hìnnhậtnhậth chữ nhật
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/

const perimeterRectangle = ((height = 0, width = 0) => {
  return ((height + width) * 2).toLocaleString();
})(10,15);

console.log({ perimeterRectangle });


const acreageRectangle = ((height = 0, width = 0) => {
    return (height * width).toLocaleString();
})(10,15);

console.log({ acreageRectangle });
