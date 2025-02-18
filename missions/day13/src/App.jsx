import { useState } from "react";

const ExchangeRate = 1400;

function CurrencyInput({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    console.log({ currency, value });
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / ExchangeRate,
      });
    } else {
      setState({
        krw: value * ExchangeRate,
        use: value,
      });
    }
  };

  return (
    <>
      <h1>환율 변환기 (kRW-USD)</h1>
      <CurrencyInput currency={"krw"} value={state.krw} onChange={onChange} />
      <CurrencyInput currency={"usd"} value={state.usd} onChange={onChange} />
    </>
  );
}

export default App;
