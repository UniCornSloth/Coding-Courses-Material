import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <StepCounter />
    </div>
  );
}

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("June 28 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} Days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
      </p>

      <span>
        <p>{date.toDateString()}</p>
      </span>
    </div>
  );
}
