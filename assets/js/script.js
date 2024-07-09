const result = document.getElementById("result");
const button = Array.from(document.getElementsByTagName("button"));
const arrAritmatika = ["+", "-", "x", "/"];

button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.currentTarget.textContent === ".") {
      arrAritmatika.forEach((e) => {
        if (result.textContent.includes(e)) {
          result.textContent += ".";
        }
      });
      if (!result.textContent.includes(".")) {
        result.textContent += ".";
      }
    } else if (result.textContent === "0") {
      result.textContent = event.currentTarget.textContent;
    } else {
      result.textContent += event.currentTarget.textContent;
    }
    if (event.currentTarget.textContent === "=") {
      // penjumlahan
      if (result.textContent.includes("+")) {
        const arrNum = result.textContent.slice(0, -1).split("+");
        const nums = arrNum.map((num) => Number(num));
        let sum = 0;
        nums.forEach((item) => {
          sum += item;
        });
        result.textContent = sum;
        return;
      }
      // perkalian
      if (result.textContent.includes("x")) {
        const arrNum = result.textContent.slice(0, -1).split("x");
        const nums = arrNum.map((num) => Number(num));
        result.innerText = nums.reduce((total, num) => {
          return total * num;
        });
        return;
      }
      // pembagian
      if (result.textContent.includes("/")) {
        const arrNum = result.textContent.slice(0, -1).split("/");
        const nums = arrNum.map((num) => Number(num));
        result.innerText = nums.reduce((total, num) => {
          return total / num;
        });
        return;
      }
      // pengurangan
      if (result.textContent.includes("-")) {
        const arrNum = result.textContent.slice(0, -1).split("-");
        const nums = arrNum.map((num) => Number(num));
        result.textContent = nums.reduce((total, num) => {
          return total - num;
        });
        return;
      }
    }
    // persen
    if (result.textContent.includes("%")) {
      const num = parseFloat(result.textContent);
      let total = num / 100;
      result.innerText = total;
    }
    // konfersi
    if (result.textContent.includes("+/-")) {
      const num = result.textContent;
      let conversi = -parseFloat(num);
      result.innerText = conversi;
    }
    if (
      event.currentTarget.textContent === "AC" ||
      event.currentTarget.textContent === "="
    ) {
      result.textContent = "0";
    }
  });
});
