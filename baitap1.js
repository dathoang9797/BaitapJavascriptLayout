/**
 *  Purpose: Tính tiền lương nhân viên
 *  Creator: Hoàng Qúy Đạt - dathoang9797@gmail.com
 *  Date created: 14/12/2021
 *  Version:
 **/
const calculateEmployeeSalary = ((dayWork = 0) => {
  const oneDaySalary = 100000;
  return (oneDaySalary * dayWork).toLocaleString();
})(3);
console.log({ calculateEmployeeSalary });
