import React, { useEffect } from 'react';
import ExpensesLogo from '../../assets/expenses.png';
import 'aos/dist/aos.css';
import aos from 'aos';

export default function IncomeExpense({ transactions }) {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const amount = transactions.map((transaction) => Number(transaction.amount));
  const expenses = amount.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1;
  const formattedExpenses = expenses.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <div className="bg-white shadow-md rounded px-12 py-8 mb-4 mr-4 flex items-center w-96" data-aos="fade-up">
      <img src={ExpensesLogo} alt="Expenses" className="mr-4 w-[56px]" />
      <div>
        <h4 className="text-lg font-semibold mb-2 text-color-danger">Expenses</h4>
        <h1 className="text-3xl font-bold text-color-danger">{formattedExpenses}</h1>
      </div>
    </div>
  );
}
