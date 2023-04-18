"use strict";
const getData = async function () {
  try {
    const response = await fetch("/json/fields.json");
    const data = await response.json();
    const fieldsId = data.map((arr) => arr.fieldId);
    let repeatFields = [];

    for (let i = 0; i < fieldsId.length - 1; i++) {
      for (let n = i + 1; n < fieldsId.length; n++) {
        if (fieldsId[i] === fieldsId[n]) {
          repeatFields.push(fieldsId[i]);
        }
      }
    }
    console.log(repeatFields);
  } catch (e) {
    console.log(e);
  }
};
getData();
