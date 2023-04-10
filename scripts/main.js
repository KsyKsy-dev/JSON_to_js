const getData = async function () {
  const response = await fetch("/json/fields.json");
  setData(await response.json());
};
function setData(arr) {
  console.log(arr, "check");
}
getData();
setData();
