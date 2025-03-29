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
  if (selectCurrency.value === "eur") {
    valueConverter = inputvalue.value / 6.19;
    result.innerHTML = valueFormatter("pt-BR", "EUR");
  } else if (selectCurrency.value === "dol") {
    valueConverter = inputvalue.value / 5.73;
    result.innerHTML = valueFormatter("en-US", "USD");
  }

  inputvalue.value = "";
  selectCurrency.value = "";
  animateResult();
}

function valueFormatter(locale, currency) {
  const value = valueConverter.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
  return `<span></span> ${value} <span></span>`;
}

function animateResult() {
  result.animate(
    [{ transform: "translateY(-150px)" }, { transform: "translateY(0px)" }],
    { duration: 800 }
  );
}

function toggleTheme() {
  let themeIcon = document.getElementById('theme-icon');

  if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode'); 
      themeIcon.textContent = '🌙'; 
  } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode'); 
      themeIcon.textContent = '☀️'; 
  }
}
