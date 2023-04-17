let data = [];

const getData = async function () {
  const response = await fetch("/json/fields.json");
  const data = await response.json();
  const fieldsId = data.map((arr) => arr.fieldId);
  console.log(fieldsId);
};

getData();
// #1 retrive value fiedId

const myObj = [
  {
    first: "o",
    second: "n",
  },
  {
    first: "a",
    second: "b",
  },
  {
    first: "o",
    second: "m",
  },
  {
    first: "a",
    second: "d",
  },
  {
    first: "k",
    second: "i",
  },
  {
    first: "o",
    second: "l",
  },
];
let repeatList = [];
const firstV = myObj.map((obj) => obj.first);
console.log(firstV);
const repeat = function () {
  for (let i = 0; i < firstV.length; i++) {
    console.log(firstV[i]);
    for (let n = 0; n < firstV.length; i++) {
      if (firstV[i] === firstV[n]) repeatList.push(firstV[i]);
    }
  }
  console.log(repeatList);
};
repeat();
