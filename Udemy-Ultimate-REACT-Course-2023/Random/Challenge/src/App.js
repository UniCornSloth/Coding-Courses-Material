import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = (bill * (percent1 + percent2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <InputBill bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percent1} onSelect={setPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percent2} onSelect={setPercent2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function InputBill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
