const inputKm = document.querySelector("#kmInput");
const inputAge = document.querySelector("#ageInput");
const answer = document.querySelector(".answer");
const btn = document.querySelector(".btn");
const priceCost = 0.21;

btn.addEventListener("click", () =>
  inputKm.value && inputKm.value
    ? pricing(priceCost, Number(inputKm.value), Number(inputAge.value))
    : (answer.innerHTML = "Please fill the Inputs.")
);

const pricing = (price, km, age) => {
  if (
    typeof price !== "number" ||
    typeof km !== "number" ||
    typeof age !== "number"
  ) {
    return (answer.innerHTML = "the value entered is not a number. Try again");
  }
  const rawPrice = ticketKmPrice(price, km).toFixed(2);
  if (age >= 18 && age < 65) {
    return (answer.innerHTML = `ticket price is ${rawPrice} €.`);
  }
  age < 18
    ? (answer.innerHTML = `ticket price is ${totalPrice(20, rawPrice)} €.`)
    : (answer.innerHTML = `ticket price is ${totalPrice(40, rawPrice)} €.`);
};

const ticketKmPrice = (price, km) => price * km;

const totalPrice = (discount, price) =>
  discount === 20 ? (price * 0.8).toFixed(2) : (price * 0.6).toFixed(2);
