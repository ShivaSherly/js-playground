const dob = new Date('03/26/1996');
const todayDate= new Date();
const diffTime = Math.abs(todayDate - dob);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
const diffMonths =  diffDays/30;
const diffWeeks =   diffDays/7;
const diffYears =   diffDays/365;
const diffHours =   diffDays*24;


console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
console.log(diffMonths + " months");
console.log(diffWeeks + " weeks");
console.log(diffYears + " years");
console.log(diffHours + " hours");
