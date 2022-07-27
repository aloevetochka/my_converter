import "./CurrencyInput.css";

interface ICurrencyInput {
  amount?: number;
  currency?: string;
  currencies: string[];
  onAmountChange(event: any): void;
  onCurrencyChange(event: any): void;
}

function CurrencyInput({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}: ICurrencyInput) {
  return (
    <div className="input-group mb-3">
      <input
        className="form-control shadow-none w-75 input-custom"
        type="text"
        value={amount}
        onChange={(event) => onAmountChange(event.target.value)}
      ></input>
      <select
        className="form-select shadow-none w-25 select-custom"
        value={currency}
        onChange={(event) => onCurrencyChange(event.target.value)}
      >
        {currencies.map((currency: string) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyInput;
