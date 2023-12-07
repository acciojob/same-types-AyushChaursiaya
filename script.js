function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  return typeof value1 === typeof value2;
}

function checkSameType() {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  const resultElement = document.getElementById("result");

  // Convert input values to numbers if they are numeric strings
  const numValue1 = isNaN(value1) ? value1 : parseFloat(value1);
  const numValue2 = isNaN(value2) ? value2 : parseFloat(value2);

  const result = isSameType(numValue1, numValue2);

  resultElement.textContent = result ? "Same type" : "Different types";
}
