import React from 'react';
import './CardsComponents.css';

const cardType = [
  {
    type: 'Naira Card',
    status: 'locked',
    total: '5,500',
    currency: 'NGN',
    cardNumber: '123456789',
  },
  {
    type: 'Naira Card',
    status: 'locked',
    total: '5,500',
    currency: 'NGN',
    cardNumber: '123456789',
  },
  {
    type: 'Dollar Card',
    status: 'active',
    total: '5,500',
    currency: 'USD',
    cardNumber: '123456789',
  },
  {
    type: 'Naira Card',
    status: 'locked',
    total: '5,500',
    currency: 'NGN',
    cardNumber: '123456789',
  },
  {
    type: 'Dollar Card',
    status: 'active',
    total: '5,500',
    currency: 'USD',
    cardNumber: '123456789',
  },
];

const CardsComponent = () => {
  return (
    <div className='card-component'>
      {cardType.map((item, idx) => {
        return (
          <div key={idx * 2}>
            <div className="card-grid">
              <div className='item'>
                <p>{item.type}</p>
                <span>{truncateCardNumber(item.cardNumber)}</span>
              </div>
              <div className='item'>{item.status}</div>
              <div className='item'>
                {item.total} {item.currency}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function truncateCardNumber(cardNumber: string): string {
  const visibleDigits = 4;
  const maskedPart = '***';
  if (cardNumber.length > visibleDigits) {
    const lastDigits = cardNumber.slice(-visibleDigits);

    return `${maskedPart}${lastDigits}`;
  } else {
    return cardNumber;
  }
}

export default CardsComponent;
