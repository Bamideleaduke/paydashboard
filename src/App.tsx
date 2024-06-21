import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Dashboard from './components/dashboard/Dashboard';
import { RootState } from './utils/redux/store';
import { useSelector } from 'react-redux';
import AddBusinesslayout from './components/AddBusiness/AddBusinesslayout';

function App() {
  const showLayout = useSelector(
    (state: RootState) => state.business.showLayout,
  );

  useEffect(() => {
    if (showLayout) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showLayout]);

  return (
    <div className="App">
      <Menu />
      <Dashboard />

      {showLayout && <AddBusinesslayout />}
    </div>
  );
}

export default App;
