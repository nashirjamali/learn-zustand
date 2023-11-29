import { useBookStore } from './store/bookStore';

function App() {
  const { amount, title, updateAmount } = useBookStore();

  return (
    <div>
      <h1>Books: {amount}</h1>
      <h4>Title: {title}</h4>

      <button onClick={() => updateAmount(10)}>Add amount 10</button>
    </div>
  );
}

export default App;
