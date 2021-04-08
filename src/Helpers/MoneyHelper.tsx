const MoneyHelper = (rawMoney: string) => {
  let money = rawMoney;

  if (isNaN(parseFloat(money))) {
    money = "0";
  }

  const stringDivided = parseFloat(parseFloat(money).toFixed(2))
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    .split(",");
  // If has number after comma
  if (stringDivided.length > 1) {
    // If number after comma have more than one number
    let stringToReturn = "";
    if (stringDivided[1].length > 1) {
      stringToReturn = `${stringDivided[0]},${stringDivided[1]}`;
    } else {
      stringToReturn = `${stringDivided[0]},${stringDivided[1]}0`;
    }
    return stringToReturn;
  }
  return `${stringDivided[0]},00`;
};
export { MoneyHelper };
