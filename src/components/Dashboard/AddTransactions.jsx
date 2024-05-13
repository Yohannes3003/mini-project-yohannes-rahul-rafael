import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

export default function AddTransactions({ id, addTransaction }) {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [type, setType] = useState('spending');

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: type === 'earning' ? +amount : -amount,
      date: date,
      type: type,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    setDate('');
    setType('spending');
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" data-aos="fade-up">
      <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
            Transaction
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter Text..."
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount..."
            type="number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Enter Date..."
            type="date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" value={type} onChange={(event) => setType(event.target.value)}>
            <option value="spending">Spending</option>
            <option value="earning">Earning</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
