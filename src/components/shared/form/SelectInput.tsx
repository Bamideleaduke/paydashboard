import React, { useState } from 'react';
import { useField } from 'formik';
import "./SelectInputStyle.css"
import Gt from "../../../Assets/icons/downArrow.svg"


interface SelectInputProps {
  label: string;
  name: string;
  icon?:boolean;
  options: { value: string, label: string,  icon?:string; }[];
  placeholder?: string;
  required?:boolean;
}
const SelectInput: React.FC<SelectInputProps> = ({ label, name, options, placeholder,required,icon }) => {
    const [field, meta, helpers] = useField(name);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSelect = (value: string) => {
      helpers.setValue(value);
      helpers.setTouched(true, false);
      setIsOpen(false);
    };
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="select-wrapper">
        <label className="label" htmlFor={name}>{label} <span className='required'>{required ? "*" :""}</span></label>
        <div
          className={`custom-select ${meta.touched && meta.error ? 'error' : ''} ${isOpen ? 'active' : ''}`}
          onClick={toggleDropdown}
        >
          {/* {field.value ? options.find(option => option.value === field.value)?.label : placeholder} */}
          {field.value ? (
            <span className="selected-value"> {icon && <img src={options.find(option => option.value === field.value)?.icon} alt="icon" />} {options.find(option => option.value === field.value)?.label}</span>
          ) : (
            <span className="placeholder">{placeholder}</span>
          )}
          <span className="dropdown-icon">
            <img src={Gt} alt="next" />
          </span>
        </div>
        {isOpen && (
          <div className="dropdown">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="dropdown-option"
                onClick={() => handleSelect(option.value)}
              >
               {icon &&  <img src={option?.icon} alt="icon" />}
                {option.label}
              </div>
            ))}
          </div>
        )}
        {/* {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null} */}
      </div>
    );
  };
  

export default SelectInput;


{/* <div className="select-wrapper">
<label className="label" htmlFor={name}>
  {label}
</label>
<div
  className={`custom-select ${meta.touched && meta.error ? 'error' : ''}`}
  onClick={() => setIsOpen(!isOpen)}
  onBlur={() => setIsOpen(false)}
  tabIndex={0}
>
  <div className="selected-option">
    {field.value ? options.find(option => option.value === field.value)?.label : placeholder}
  </div>
  <div className="dropdown-icon" dangerouslySetInnerHTML={{ __html: '&blacktriangledown;' }}></div>
</div>
{isOpen && (
  <div className="dropdown">
    {options.map((option, idx) => (
      <div
        key={option.value}
        className={`dropdown-option ${field.value === option.value ? 'selected' : ''}`}
        onClick={() => handleSelect(option.value)}
      >
        {option.label}
      </div>
    ))}
  </div>
)}
{meta.touched && meta.error && <div className="error">{meta.error}</div>}
</div> */}