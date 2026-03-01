import { useBank } from "../context/useBank";

const Bank = () => {
  const { state, dispatch } = useBank();

  return (
    <div>
      <h2>Balance: ₹{state.balance}</h2>

      <button onClick={() => dispatch({ type: "DEPOSIT", payload: 1000 })}>
        Deposit 100
      </button>

      <button onClick={() => dispatch({ type: "WITHDRAW", payload: 500 })}>
        Withdraw 50
      </button>
    </div>
  );
};

export default Bank;
