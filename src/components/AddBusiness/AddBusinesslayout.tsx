import React from 'react';
import TypeOfAccount from './TypeOfAccount';
import './AddBusinesslayoutStyle.css';
import businessLogo from '../../Assets/icons/businessLogo.svg';
import { useDispatch } from 'react-redux';
import { setShowLayout } from '../../../src/utils/redux/slices/businessSlice';

const AddBusinesslayout = () => {
  const dispatch = useDispatch();
  const showFormLayout = () => {
    dispatch(setShowLayout(false));
  };
  return (
    <div className="form-layout">
      <div className="dialog">
        <div className="dialog-header">
          <div className="add-business">
            <p className="logo">
              <img src={businessLogo} alt="" />
            </p>
            <p>Add a Business</p>
          </div>
          <div onClick={showFormLayout} className="close">
            <p>X</p>
          </div>
        </div>
        <div className="form-container">
          <div className='container-content'>
            <TypeOfAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBusinesslayout;
