"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ZenB APP

// Data Objects
const account1 = {
  owner: "Apurba Sundar Nayak",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Abhijeet Singh",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Shubham Jatav",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sunil Kumar Behera",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: "Prajjawal Agarwal",
  movements: [830, 2000, 300, 90, 120],
  interestRate: 1.6,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const currencies = new Map([
  ["INR", "Indian Rupees"],
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach((current, i) => {
    const transaction = current > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transaction}">${
      i + 1
    } ${transaction}</div>
          <div class="movements__value">${current} ₹</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const createUsername = function (accs) {
  accs.forEach((user) => {
    user.username = user.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, ele) => acc + ele, 0);
  labelBalance.textContent = `${balance} ₹`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const deposits = movements
    .filter((ele) => ele > 0)
    .reduce((sum, ele) => sum + ele, 0);
  labelSumIn.textContent = `${deposits} ₹`;
  const withdrawals = movements
    .filter((ele) => ele < 0)
    .reduce((sum, ele) => sum + ele, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)} ₹`;
  const interest = movements
    .filter((ele) => ele > 0)
    .map((ele) => (ele * 1.2) / 100)
    .filter((ele) => ele >= 1)
    .reduce((sum, ele) => sum + ele, 0);
  labelSumInterest.textContent = `${interest} ₹`;
};
calcDisplaySummary(account1.movements);
/////////////////////////////////////////////////


//here first withdrawal
const account = accounts.find(ele=>ele.username === 'as');
console.log(account);


const names = ["Apurba Sundar", "Abhijeet Kundu", "Shubham Bankai"];
names.forEach((name) => {
  console.log(
    name
      .toLowerCase()
      .split(" ")
      .map((n) => n[0])
      .join("")
  );
});
