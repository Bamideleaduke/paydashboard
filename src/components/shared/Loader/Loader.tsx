import React from 'react';
import "./LoaderStyle.css"
import Load from "../../../Assets/icons/loader.svg"

const Loader = () => {
  return (
    <div className='loader'>
      <div>
      <img src={Load} alt="Loader" />
      </div>
    </div>
  );
}

export default Loader;
