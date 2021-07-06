// const users = require("./users");

// console.log(users);

// console.log(date);

// const { admins } = require("./users");

const { getCurrentMonth } = require("./date");

console.log(`Сейчас ${getCurrentMonth()} месяц`);

const currentMonth = require("./date/getCurrentMonth")();

console.log(`Сейчас ${currentMonth} месяц`);
