import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { numbers } from "./constants";
const operator: string[] = ["+", "-", "/", "*"];
// interface Person {
//   name: string;
//   age: number;
// }
const App = () => {
  // const [] = useState<{ name: string; age: number }>({ name: "", age: 0 });
  // const [state, setState] = useState<Person>({ name: "", age: 0 });
  const [inp, setInput] = useState<string>("0");

  const clickHandler = (number: string) => {
    try {
      if (inp[0] == "0") {
        setInput(number);
      } else if (inp[0] === "*") {
        setInput("0");
      } else setInput((prevState) => prevState + number);
    } catch (e) {
      toast.error("Invalid Operation,Kindly input valid operation!");
    }
  };
  const clearHandler = () => {
    setInput("0");
  };
  const ansHandler = () => {
    try {
      setInput(eval(inp));
      toast.success("Calculation successful!");
    } catch (e) {
      toast.error("Invalid Operation,Kindly input valid operation!");
    }
  };
  return (
    <div className="container">
      <input
        className="inp"
        type="text"
        value={inp}
        onChange={(event) => setInput(event.target.value)}
      ></input>

      <div className="options">
        {numbers.map((val, idx) => (
          <button
            key={val}
            className={`btn  ${idx % 4 === 3 ? "btnspl" : ""} `}
            onClick={() => clickHandler(`${val}`)}
          >
            {val}
          </button>
        ))}

        <button className="btn" onClick={clearHandler}>
          AC
        </button>
        <button className=" btn btnsplspl" onClick={ansHandler}>
          =
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
