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

//find() method
//it's used to find one elements in the array based on the condition.
//first element which is true for the condition
//here first withdrawal
const account = accounts.find(ele=>ele.username === 'as');
console.log(account);

// console.log(sumBalance);

// "use strict";

// const IndianFlight = {
//   airline: "Indian Airways",
//   idCode: "IAR",
//   bookings: [],
//   book(flightName, name) {
//     console.log(
//       `Flight is booked by ${name} on ${this.airline} with Code ${this.idCode}${flightName}.`
//     );
//     this.bookings.push({ flight: `${this.idCode}${flightName}`, name });
//   },
// };

// const book = IndianFlight.book;
// const EuroFlight = {
//   airline: "European Airways",
//   idCode: "EAR",
// bookings: [],
// };

// //call method
// IndianFlight.book(239, "Apurba Sundar");
// book.call(EuroFlight, 53, "Abhijeet Kundu");

// //apply method
// // it works the same as the call method but the only difference is it receives the array of parameters instead of parameters solely.
// const flightData = [89, "Shubham bankai"];
// book.apply(EuroFlight, flightData);
// // console.log(EuroFlight)

// //bind method
// const bookeu = book.bind(EuroFlight);
// bookeu(23, "Lolpi");

// //special case to fix any parameter in bind.
// const bookEU53 = book.bind(EuroFlight, 53);
// bookEU53("DOpyaza");

// //With event listeners
// IndianFlight.planes = 200;
// IndianFlight.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// //following code snippet will give error as here this key word will bind to the one which is handled by the eventlistener not the needed object
// // document.querySelector(".movements").addEventListener("click", IndianFlight.buyPlane);
// //hence modifying the code by the use of bind method
// document.querySelector(".movements").addEventListener("click", IndianFlight.buyPlane.bind(IndianFlight));

//setTimeout()
//has two parameters 1. Callback 2. Number in milisec to wait

// const msg = function () {
//   let i = 1;
//   console.log(`Hello World`);
//   console.log("You missing me ?🥺");
//   const id = setInterval(() => {
//     console.log(`I miss you too`);
//     console.log(`I miss you.${i} times😍`);
//     i++;
//     if (i > 5) clearInterval(id);
//   }, 1000);
// };
// setTimeout(msg, 4000);

// //some and every
// //every returns boolean value i.e true only when every array elements pass the function
// //some returns true if there is any value which passes the function.

// const num = [10, 20, 30, 40, 50];
// const val = num.every((number) => number >= 10); //true
// const val1 = num.every((number) => number > 10); //false
// const val2 = num.some((number) => number > 10); //true
// console.log(val,val1,val2);

// //map
// // it maps every element to a certain rule provided by the callback
// const num = [1, 2, 3, 4, 5, 6];
// const sum = num.reduce((sum, n) => {
//   return sum + n;
// }, 10);
// console.log(sum);

// const names = ["Apurba Sundar", "Abhijeet Kundu", "Shubham Bankai"];
// names.forEach((name) => {
//   console.log(
//     name
//       .toLowerCase()
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//   );
// });
