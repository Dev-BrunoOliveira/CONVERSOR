const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputvalue = document.getElementById("value-real");
const selectCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverter = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputvalue.value || inputvalue.value < 0) {
    alert("Informe um valor correto!");
    return;
  } else if (!selectCurrency.value) {
    alert("Escolha uma moeda");
    return;
  }

  converter();
}

function converter() {
<<<<<<< HEAD
    if (selectCurrency.value === 'eur') {
        valueConverter = inputvalue.value / 6.32;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
    } else if (selectCurrency.value === 'dol') {
        valueConverter = inputvalue.value / 6.02;
        result.innerHTML = valueFormatter('en-US', 'USD');
    }
=======
  if (selectCurrency.value === "eur") {
    valueConverter = inputvalue.value / 6.03;
    result.innerHTML = valueFormatter("pt-BR", "EUR");
  } else if (selectCurrency.value === "dol") {
    valueConverter = inputvalue.value / 5.47;
    result.innerHTML = valueFormatter("en-US", "USD");
  }
>>>>>>> 3fefeb8 (alterando cores)

  inputvalue.value = "";
  selectCurrency.value = "";
  animateResult();
}

function valueFormatter(locale, currency) {
  const value = valueConverter.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
  return `<span>🤑</span> ${value} <span>🤑</span>`;
}

function animateResult() {
  result.animate(
    [{ transform: "translateY(-150px)" }, { transform: "translateY(0px)" }],
    { duration: 800 }
  );
}
