import "./App.css";
import { useEffect, useState } from "react";
const App = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        let res = await axios.get(url);
        let data = res.data;
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.log(error);
      }
    };

    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount(amount * exchangeRate).toFixed(2);
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="box">
        
      </div>
      <div className="data">
        <div className="input-container">
          <label htmlFor="amount">Amount :</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter the amount"
          />
        </div>
        <div className="input-container">
          <label htmlFor="fromCurrency">From Currency :</label>
          <select
            name="fromCurrency"
            id="fromCurrency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
            <option value="RUB">RUB</option>
            <option value="KRW">KRW</option>
            <option value="BRL">BRL</option>
            <option value="ZAR">ZAR</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="toCurrency">To Currency :</label>
          <select
            name="toCurrency"
            id="toCurrency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
            <option value="RUB">RUB</option>
            <option value="KRW">KRW</option>
            <option value="BRL">BRL</option>
            <option value="ZAR">ZAR</option>
          </select>
        </div>
        <div className="result">
          <p>
            {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
