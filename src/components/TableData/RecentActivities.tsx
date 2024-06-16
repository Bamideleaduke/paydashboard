import React from 'react';
import "./RecentActivitiesStyle.css"
import MTN from "../../Assets/icons/mtn.svg"

const Activities = [
    {
      type: 'Bill payment for',
      content: 'MTN Airtime top up',
      status: 'success',
      total: '5,500',
      currency: 'NGN',
      icon: '',
    },
    {
      type: 'Payment to bank',
      content: 'Oluwatobi Oseni',
      status: 'success',
      total: '5,500',
      currency: 'NGN',
      icon: '',
    },
    {
      type: 'Payment to',
      content: 'Oluwatobi Oseni',
      status: 'pending',
      total: '5,500',
      currency: 'TZS',
      icon: '',
    },
    {
      type: 'Currency Swap from',
      content: 'NGN > GBP',
      status: 'success',
      total: '500',
      currency: 'GBP',
      icon: '',
    },
    {
      type: 'Received from bank',
      content: 'Oluwatobi Oseni',
      status: 'success',
      total: '5,500',
      currency: 'NGN',
      icon: '',
    },
   
  ];
const RecentActivities = () => {
  return (
    <div>
        <div className='activities'>
      {Activities.map((item, idx) => {
        return (
          <div key={idx * 2}>
            <div className="card-grid">
                <div className='title-card'>
            <img src={MTN} alt="Bank icon" />
              <div>
                <p>{item.type}</p>
                <span>{item.content}</span>
              </div>
                </div>
              <p>
                {item.total} {item.currency}
              </p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default RecentActivities;
