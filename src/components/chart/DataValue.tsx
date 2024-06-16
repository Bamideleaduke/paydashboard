import React from 'react';
import "./DataValueStyle.css"


const moneyValue =[
    {title:"Available Balance",value:"NGN",total:"1,000,000",duration:"20% Past Day",status:"success"},
    {title:"Total Transactions",value:"",total:"345",duration:"20% Past Day",status:"success"},
    {title:"Total Settlements",value:"NGN",total:"49,000,000",duration:"20% Past Day",status:"fail"},
]
const DataValue = () => {
  return (
    <div className='total-evaluation'>
      {
        moneyValue.map((item,idx)=>{
            return <div className='evaluation-item'>
                <p>{item.title}</p>
                <h5>{item.value} {item.total}</h5>
                <span className={`status ${item.status === "success" ? "success" :"fail"}`}>{item.duration}</span>
            </div>
        })
      }
    </div>
  );
}

export default DataValue;
