import React from 'react';
import { useField } from 'formik';
import './InputFieldStyle.css';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?:boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label,required, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={props.name}>{label}<span className='required'>{required ? "*" :""}</span></label>
      <input className={`custom-input ${meta.touched && meta.error ? 'error' : ''}`}  {...field} {...props} />
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </div>
  );
};

export default InputField;
