import React, { useEffect } from 'react';
import Wallet from '../../assets/wallet.png';
import 'aos/dist/aos.css';
import aos from 'aos';

export default function Balance({ transactions }) {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const amount = transactions.map((transaction) => Number(transaction.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);

  // Tambahkan tanda negatif jika total kurang dari 0
  const formattedTotal = total.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  // Tentukan tanda negatif
  const negativeSign = total < 0 ? '-' : '';

  // Format total tanpa tanda negatif
  const absoluteTotal = Math.abs(total);

  return (
    <div className="bg-white shadow-md rounded px-12 py-8 mb-4 mr-4 flex items-center w-96" data-aos="fade-up">
      <img src={Wallet} alt="Wallet" className="mr-6 w-[56px]" />
      <div>
        <h4 className="text-lg font-semibold mb-2 text-color-dark">Balance</h4>
        <div className="flex items-center">
          <span className={`text-3xl font-bold ${total < 0 ? 'text-red-500' : 'text-green-500'}`}>{negativeSign}</span>
          <h1 className="text-3xl font-bold">{formattedTotal.replace('-', '')}</h1>
        </div>
      </div>
    </div>
  );
}
