import React, { useEffect } from 'react';
import Transaction from './Transaction';
import 'aos/dist/aos.css';
import aos from 'aos';

export default function TransactionsList({ transactions, deleteTransaction, editTransaction }) {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  transactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="container mx-auto lg:max-w-[1200px] mt-8 mb-8" data-aos="fade-up">
      <h3 className="text-lg font-semibold mb-4">Transactions History</h3>
      <div className="bg-white shadow-md rounded overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-color-primary text-white">
              <th className="px-4 py-2">Transaction</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2 text-center">Amount</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
