import React, { useState } from 'react';

export default function Transaction({ transaction, deleteTransaction, editTransaction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(transaction.text);
  const [editedAmount, setEditedAmount] = useState(transaction.amount);
  const [editedDate, setEditedDate] = useState(transaction.date);

  const sign = transaction.type === 'earning' ? '' : '';
  const textColor = transaction.type === 'earning' ? 'text-color-primary' : 'text-color-danger';

  const handleEdit = () => {
    const editedTransaction = {
      id: transaction.id,
      text: editedText,
      amount: editedAmount,
      date: editedDate,
      type: transaction.type,
    };
    editTransaction(editedTransaction);
    setIsEditing(false);
  };

  return (
    <tr className={`${textColor}`}>
      <td className="px-4 py-2 text-center">
        {isEditing ? <input className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-300" value={editedText} onChange={(e) => setEditedText(e.target.value)} /> : transaction.text}
      </td>
      <td className="px-4 py-2 text-center">
        {isEditing ? <input className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-300" type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} /> : transaction.date}
      </td>
      <td className="px-4 py-2 text-center">
        {isEditing ? (
          <input className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
        ) : (
          <span className={`font-semibold ${textColor}`}>
            {sign}Rp.{Math.abs(transaction.amount).toLocaleString()}
          </span>
        )}
      </td>
      <td className="px-4 py-2 text-center">
        {isEditing ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mr-2" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <>
            <button className="bg-color-primary hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mr-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
