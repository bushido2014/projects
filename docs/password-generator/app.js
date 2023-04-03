const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const num2 = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const num3 = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'U',
  'Z',
];
const num4 = [
  '!',
  '()',
  '[',
  ']',
  '[]',
  '-',
  '%',
  '@',
  '#',
  '$',
  '/',
  '+',
  '_',
  '=',
];

document.getElementById('slider-nummer').oninput = function () {
  document.getElementById('pass-length').innerHTML = this.value;
};

generatePass();

document.getElementById('CreatePass').onclick = generatePass;

function generatePass() {
  let resultPSW = [];
  if (document.getElementById('checkbox1').checked) {
    resultPSW = [...resultPSW, ...num1];
  }
  if (document.getElementById('checkbox2').checked) {
    resultPSW = [...resultPSW, ...num2];
  }
  if (document.getElementById('checkbox3').checked) {
    resultPSW = [...resultPSW, ...num3];
  }
  if (document.getElementById('checkbox4').checked) {
    resultPSW = [...resultPSW, ...num4];
  }
  resultPSW.sort(compareRandom);
  document.getElementById('result').innerHTML = '';
  for (let p = 0; p < 3; p++) {
    let pass = '';
    let passwLength = parseInt(document.getElementById('slider-nummer').value);
    for (let i = 0; i < passwLength; i++) {
      pass += resultPSW[randomInteger(0, resultPSW.length - 1)];
    }
    document.getElementById('result').innerHTML += `
    <div class="w-full">
    <div class="result-value"><span class="value-text">${pass}</span><button class="btn result-btn>Copy Password</button></div>
   </div>
    `;
  }
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}
