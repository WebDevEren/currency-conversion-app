class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=MlxjJpstk3uXa10HsdX3S7MX8ZjXAhSPUFe8aaaQ&base_currency=";
  }
  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    console.log(result.data[secondCurrency]);
    const exchangeResult = amount * result.data[secondCurrency];
    return exchangeResult;
  }
}
