import React, { useState } from 'react';
import './TypeOfAccountStyle.css';
import Merchant from '../../Assets/icons/merchant.svg';
import Agent from '../../Assets/icons/agent.svg';
import Exporting from '../../Assets/icons/exporting.svg';
import Gt from '../../Assets/icons/gt.svg';
import AddBusinessForm from './AddBusinessForm';

const accountTypes = [
  {
    title: 'Merchant Account',
    subTitle:
      'I want to pay suppliers and receive payment from buyers across the globe.',
    icon: Merchant,
  },
  {
    title: 'Agent Account',
    subTitle:
      'I want to help clients with global flights, hotels, tuition payments & accommodation.',
    icon: Agent,
  },
  {
    title: 'An Exporting Producer',
    subTitle:
      'I want to export finished goods from Africa to a global audience using Ojah by Shiga.',
    icon: Exporting,
  },
];
const TypeOfAccount = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSelectAccount = () => {
    setShowForm(true);
  };

  return (
    <div>
      {showForm && <AddBusinessForm setShowForm={setShowForm} />}
    { !showForm && <div>
        <h2 className="title">What kind of account do you want to open?</h2>
        <p className="sub-title">
          You can always add another account later on.
        </p>
        <hr />
        <div>
          <div>
            {accountTypes.map((account, idx) => {
              return (
                <div key={idx * 2} className="account-card">
                  <img src={account.icon} alt={account.subTitle} />

                  <div className="card">
                    <div className="card-info">
                      <h3>{account.title}</h3>
                      <p>{account.subTitle}</p>
                    </div>
                    <div className="gt" onClick={handleSelectAccount}>
                      <img src={Gt} alt="next" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default TypeOfAccount;
