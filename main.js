
let i = 10;
while(i <= 20) {
  fillAndAddParagraph("id", "row", `${i}`)
  i++
};

let n = 10;
while(n <= 20) {
  fillAndAddParagraph("id", "square", `${n ** 2}`)
  n++
};

let b = 1;
while(b <= 10) {
  fillAndAddParagraph("id", "tablePart", `${b} * ${7} = ${b * 7}`);
  b++
}

let sum = 0;
let a = 1;
while(a <= 15) {
  sum += a;
  a++
}
fillAndAddParagraph("id", "allSum", sum);

let multi = 15;
let r = 15;
while(r <= 35) {
  multi *= r;
  r++
}
fillAndAddParagraph("id", "multiply", `${BigInt(multi)}`);

let midSum = 0;
for (let i = 1; i <= 500; i++) {
  midSum += i;
}
fillAndAddParagraph("id", "midle", `${midSum / 500}`);

let sumEven = 0;
for (let i = 30; i <= 80; i++) {
  i % 2 == 0 ? (sumEven += i) : (sumEven += 0);
}
fillAndAddParagraph("id", "evenSum", `${sumEven}`);

for (let i = 100; i <= 200; i++) {
  i % 3 == 0 ? fillAndAddParagraph("id", "divisible", ` ${i}`) : 0;
}

const btn = document.getElementById("spec");
btn.addEventListener("click", () => {
  const divisor = prompt("Оберіть натуральне число", "500");
  for (let i = 1; i <= divisor; i++) {
    divisor % i == 0 ? fillAndAddParagraph("id", "divOfNum", ` ${i}`) : 0;
  }
  let divisorSum = 0;
  for (let i = 2; i <= divisor; i++) {
    if ((divisor % i == 0) & (i % 2 == 0)) {
      divisorSum += i;
      fillAndAddParagraph("id", "evenDiv", ` ${i}`);
    }
  }
  fillAndAddParagraph("id", "divEvenSum", ` ${divisorSum}`);
});

for (let col = 1; col <= 10; col++) {
  for (let row = 1; row <= 10; row++) {
    fillAndAddParagraph(
      "class",
      "block",
      ` ${col} * ${row} = ${col * row}`,
      "p",
      col - 1
    );
  }
}

for (let i = 20; i <= 30; i += 0.5) {
  fillAndAddParagraph("id", "step", ` ${i}`);
}

for (let i = 10; i <= 100; i += 10) {
  fillAndAddParagraph("id", "usd", ` ${i} долларів - це ${i * 27} гривень`);
}

const chooseNum = document.getElementById("chooseNum");
chooseNum.addEventListener("click", () => {
  const num = prompt("Оберіть ціле число", "200");
  for (let i = 1; i <= 100; i++) {
    i ** 2 < num
      ? fillAndAddParagraph(
          "id",
          "squareNotMore",
          `квадрат ${i} (${i ** 2}) не перевищує числа ${num}`
        )
      : 0;
  }
});

const checkNum = document.getElementById("checkNum");
checkNum.addEventListener("click", () => {
  const num = prompt("Оберіть число для пеервірки", "5");
  let isSimple = true;
  let text;
  if (num <= 1) {
    isSimple = false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isSimple = false;
      break;
    }
  }

  text = isSimple ? `Число ${num} просте` : `Число ${num} НЕ просте`;

  fillAndAddParagraph("id", "simple", `${text}`);
});
