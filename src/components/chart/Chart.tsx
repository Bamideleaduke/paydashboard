import React from 'react';
import DataValue from './DataValue';
import "./ChartStyle.css"
import CardsComponent from '../TableData/CardsComponent';
import RecentActivities from '../TableData/RecentActivities';

const Chart = () => {
  return (
    <div>
      <DataValue/>
      <hr />

      <div className='table-grid'>
        <CardsComponent/>
        <RecentActivities/>
      </div>
    </div>
  );
}

export default Chart;
