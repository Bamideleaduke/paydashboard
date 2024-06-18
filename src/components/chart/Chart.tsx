import React from 'react';
import DataValue from './DataValue';
import "./ChartStyle.css"
import CardsComponent from '../TableData/CardsComponent';
import RecentActivities from '../TableData/RecentActivities';
import BarChart from './BarChart';

const Chart = () => {
  return (
    <div>
      <DataValue/>
      <hr />
      <div>
        
        <BarChart/>
      </div>
      <hr className='hr-2' />
      <div className='table-grid'>
        <CardsComponent/>
        <RecentActivities/>
      </div>
    </div>
  );
}

export default Chart;
