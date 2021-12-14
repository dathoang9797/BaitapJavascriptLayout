/**
 *  Purpose: Tính tiền lương nhân viên
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/
const calculateAverageValue = ((...floats) => {
  let sum = 0;
  for (const float of floats) {
    sum += float;
  }
  sum /= floats.length;
  return sum.toString().replace(".", ",");
})(3, 5.5,5.5, 8, 4.5);
console.log({ calculateAverageValue });
