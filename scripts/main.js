let data = [];

const getData = async function () {
  const response = await fetch("/json/fields.json");
  const data = await response.json();
  const fieldsId = data.map((arr) => arr.fieldId);

  let repeatFields = [];
  const checkFields = function () {
    for (let i = 0; i < fieldsId.length - 1; i++) {
      for (let n = 0; n < fieldsId.lenght + 1; i++) {
        if (firldsId[i] === fieldsId[n]) {
          repeatFields.push(firstV[i]);
        }
      }
    }
    console.log(repeatFields);
  };
  checkFields();
};

getData();
