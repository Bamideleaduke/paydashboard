import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import '../../App.css';

import Header from '../Header/Header';
import CustomButton from '../shared/customButton/CustomButton';
import Dots from '../../Assets/icons/dotsIcons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/utils/redux/store';
import Chart from '../chart/Chart';
import Loader from '../shared/Loader/Loader';
import { setNewBusiness } from '../../utils/redux/slices/businessSlice';

const Dashboard = () => {
  const [currency, setCurrency] = useState('NGN');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const newBusiness = useSelector(
    (state: RootState) => state.business.newBusiness,
  );

  useEffect(() => {
    const storedBusiness = localStorage.getItem('newBusiness');
    if (storedBusiness) {
      const newBusinessData = JSON.parse(storedBusiness);
      dispatch(setNewBusiness(newBusinessData));
    }
  }, [dispatch]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const handleButtonClick = (item: string) => {
    setCurrency(item);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-inner">
        <Header />
        <hr />
        <section>
          <div className="name-card">
            <h2 className=''>
              Good Afternoon,{' '}
              {newBusiness.businessName || 'Payshiga'}
            </h2>
            <p>Monday, January 23, 2023</p>
          </div>
        </section>

        {loading ? (
          <Loader />
        ) : (
          <div>
            <section className="trasaction-section">
              <div className="currency">
                {['NGN', 'GBP', 'USD', 'CAD'].map((item, idx) => {
                  return (
                    <CustomButton
                      key={idx * 2}
                      text={`${item}`}
                      backgroundColor={`${currency === item ? '#343433' : '#fff'}`}
                      color={`${currency === item ? '#ffffff' : '#B4B4B4'}`}
                      onClick={() => handleButtonClick(item)}
                    />
                  );
                })}
              </div>
              <div className="transaction">
                <CustomButton
                  text={'Add Money'}
                  backgroundColor={'#625BF6'}
                  color={'#fff'}
                  borderRadius="12px"
                />
                <CustomButton
                  text={'Send Money'}
                  backgroundColor={'#fff'}
                  color={'#343433'}
                  border="1px solid #E2E3E5"
                  borderRadius="12px"
                  margin="0 1rem"
                />
                <button className="dots">
                  <img src={Dots} alt="dots" />
                </button>
              </div>
            </section>
            <section>
              <Chart />
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
