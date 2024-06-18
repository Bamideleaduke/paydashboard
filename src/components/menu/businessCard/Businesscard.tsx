import React, { useState } from 'react';
import Avatar from '../../../Assets/icons/avatar.svg';
import Info from '../../../Assets/icons/detailIcon.svg';
import './BusinessCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLayout, setShowAddBusiness } from '../../../utils/redux/slices/businessSlice';
import { RootState } from '@src/utils/redux/store';

const Businesscard = () => {
  // const [addBusiness, setAddBusiness] = useState(false);
  const dispatch = useDispatch();
  const showLayout = useSelector((state: RootState) => state.business.showLayout);
  const showAddBusiness = useSelector((state: RootState) => state.business.showAddBusiness);
  
  let BusinessName = 'Payshiga Technology';

  const showFormLayout = () => {
    dispatch(setShowLayout(true));
  };

  const handleToggle = () => {
    dispatch(setShowAddBusiness(!showAddBusiness));
  };
  return (
    <div className="business">
      <div className="business-card">
        <img src={Avatar} alt="Avatar" />
        <div className="business-info">
          <h2 className="business-name">
            {truncateBusinessName(BusinessName, 17)}
          </h2>
          <p className="business-id">Business ID: 09387465 </p>
        </div>
        <img src={Info} alt="Business Details Icon" onClick={handleToggle} />
      </div>

      {showAddBusiness  && (
        <div className='add-business-container'>
          <hr />

          <div className="add-business">
            <div className="plus">
              <span onClick={showFormLayout}>+</span>
            </div>
            <p>Add a Business</p>
          </div>
        </div>
      )}
    </div>
  );
};

function truncateBusinessName(name: string, maxLength: number) {
  if (name.length <= maxLength) {
    return name; 
  } else {
    return name.substring(0, maxLength - 3).trim() + '...';
  }
}
export default Businesscard;
