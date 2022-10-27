const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";
const output = document.getElementById("output");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const btn = document.querySelector(".generate-btn");
const copy_btn = document.querySelector(".btn-copy");

generatePassword();
btn.addEventListener("click", () => generatePassword());
copy_btn.addEventListener("click", () => navigator.clipboard.writeText(output.innerText));

function generatePassword(password = "") {
  for (i = password.length; i < totalChar.value; i = password.length) {
    if (upperInput.checked) password += getRanChar(upperSet);
    if (lowerInput.checked) password += getRanChar(lowerSet);
    if (numberInput.checked) password += getRanChar(numberSet);
    if (symbolInput.checked) password += getRanChar(symbolSet);
  }
  output.innerText = password.slice(0, totalChar.value);
}

function getRanChar(set) {
  const ranIndex = Math.floor(Math.random() * set.length);
  return set[ranIndex];
}
