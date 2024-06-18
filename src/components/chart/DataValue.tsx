import React from 'react';
import "./DataValueStyle.css"
import PropertiesIcon from "../../Assets/icons/propertiesIcon.svg"
import UpArrow from "../../Assets/icons/arrowUp.svg"
import DownArrow from "../../Assets/icons/arrowDown.svg"


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
            return <div key={idx*2} className='evaluation-item'>
                <p>{item.title} <img src={PropertiesIcon} alt="see all cards" /></p>
                <h5>{item.value} {item.total}</h5>
                <span className={`status ${item.status === "success" ? "success" :"fail"}`}><img src={item.status === "success" ? UpArrow : DownArrow} alt="see all cards" />{item.duration}</span>
            </div>
        })
      }
    </div>
  );
}

export default DataValue;
