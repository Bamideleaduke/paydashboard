import React from 'react';
import './RecentActivitiesStyle.css';
import MTN from '../../Assets/icons/mtn.svg';
import GTB from '../../Assets/icons/gtb.svg';
import Transfer from '../../Assets/icons/transfer.svg';
import Swap from '../../Assets/icons/swap.svg';
import Receive from '../../Assets/icons/receive.svg';
import Arrow from "../../Assets/icons/seeAllArrow.svg"



const Activities = [
  {
    type: 'Bill payment for',
    content: 'MTN Airtime top up',
    status: 'success',
    total: '5,500',
    currency: 'NGN',
    icon: MTN,
  },
  {
    type: 'Payment to bank',
    content: 'Oluwatobi Oseni',
    status: 'success',
    total: '5,500',
    currency: 'NGN',
    icon: GTB,
  },
  {
    type: 'Payment to',
    content: 'Oluwatobi Oseni',
    status: 'pending',
    total: '5,500',
    currency: 'TZS',
    icon: Transfer,
  },
  {
    type: 'Currency Swap from',
    content: 'NGN > GBP',
    status: 'success',
    total: '500',
    currency: 'GBP',
    icon: Swap,
  },
  {
    type: 'Received from bank',
    content: 'Oluwatobi Oseni',
    status: 'success',
    total: '5,500',
    currency: 'NGN',
    icon: Receive,
  },
];
const RecentActivities = () => {
  return (
    <div>
      <div className="activities">
            <div className='card-header'>
                <h3>Recent Activities</h3>
                <button>See All <img src={Arrow} alt="see all cards" /> </button>
              </div>
        {Activities.map((item, idx) => {
          return (
            <div key={idx * 2}>
           
              <hr />
              <div className="card-grid">
                <div className="title-card one">
                  <img src={item.icon} alt="Bank icon" className='title-card-img' />
                  <div className='activity-detail'>
                    <span>{item.type}</span>
                    <p>{item.content}</p>
                  </div>
                </div>
                <p className={`one ${item.status === "success" ? "success" : "pending"}`}>
                  {item.status === "success" && "+"} {item.total} {item.currency}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;
