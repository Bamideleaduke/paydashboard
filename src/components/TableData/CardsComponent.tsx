import React from 'react';
import './CardsComponents.css';
import DollarCard from "../../Assets/icons/dollarCard.svg"
import NairaCard from "../../Assets/icons/nairaCard.svg"
import Arrow from "../../Assets/icons/seeAllArrow.svg"

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
      <div className='card-header'>
        <h3>Cards</h3>
        <button>See All <img src={Arrow} alt="see all cards" /> </button>
      </div>
      {cardType.map((item, idx) => {
        return (
          <div key={idx * 2}>
            <hr />
            <div className="card-grid">
              <div className='item one'>
              <img src={item.currency === "NGN" ? NairaCard : DollarCard} alt="Bank icon" className='title-card-img' />
              <div className='card-detail'>
                <p>{item.type}</p>
                <span>{truncateCardNumber(item.cardNumber)}</span>
              </div>
              </div>
              <div className={`item two ${item.status === "locked" ? "locked" : "active"}`}>{item.status}</div>
              <div className='item three'>
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
