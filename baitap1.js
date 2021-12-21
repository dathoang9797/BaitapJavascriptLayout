/**
 *  Purpose: Tính tiền lương nhân viên
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/
const formSalary = document.querySelector(".calculateSalary");
const employeeSalary = document.querySelector("#employeeSalary");
const calculateEmployeeSalary = (dayWork = 0) => {
  const oneDaySalary = 100000;
  return (oneDaySalary * dayWork).toLocaleString();
};
const outPutSalary = document.querySelector("#outputSalary");
formSalary.addEventListener("submit", function (e) {
  e.preventDefault();
  const dayWork = +employeeSalary.value;
  const result = calculateEmployeeSalary(dayWork);
  outPutSalary.innerText = `${result}$`;
});
