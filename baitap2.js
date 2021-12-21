/**
 *  Purpose: Tính giá trị trung bình
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/
const formAverage = document.querySelector(".calculateAverageValue");
const float1 = document.querySelector("#float1");
const float2 = document.querySelector("#float2");
const float3 = document.querySelector("#float3");
const float4 = document.querySelector("#float4");
const float5 = document.querySelector("#float5");
const outputAverageValue = document.querySelector("#outputAverageValue");
const calculateAverageValue = (...floats) => {
  let sum = 0;
  for (const float of floats) {
    sum += float;
  }
  sum /= floats.length;
  return sum.toFixed(2).toString().replace(".", ",");
};
formAverage.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(+float1.value.replace(/,/g, "."));
  const result = calculateAverageValue(
    +float1.value.replace(/,/g, "."),
    +float2.value.replace(/,/g, "."),
    +float3.value.replace(/,/g, "."),
    +float4.value.replace(/,/g, "."),
    +float5.value.replace(/,/g, ".")
  );
  outputAverageValue.innerText = result;
});
