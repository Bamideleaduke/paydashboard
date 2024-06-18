import React, { useState } from 'react';
import Settings from '../../Assets/icons/settingsIcon.svg';
import ContactUs from '../../Assets/icons/contactUs.svg';
import './Menu.css';
import "../../App.css"
import { menuData } from "../../mockData"
import Businesscard from './businessCard/Businesscard';
import { useSelector } from 'react-redux';
import { RootState } from '@src/utils/redux/store';


const Menu = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const showAddBusiness = useSelector((state: RootState) => state.business.showAddBusiness);
  const handleItemClick = (page: string) => {

    if (page !== "Dashboard") return;
    setActivePage(page);
  };
  return (
    <div className='side-menu'>
      <Businesscard/>
    <menu className={`${!showAddBusiness ? "more" : "less-padding" }`}>

      <ul id="mainMenu">
        {menuData.map((menu: any,idx:number) => {
          return (
            <Icon
            key={idx * 2}
              page={menu.page}
              icon={menu.icon}
              route={menu.route}
              isActive={menu.page === activePage}
              onClick={() => handleItemClick(menu.page)}
            />
          );
        })}
      </ul>

      <ul className={`lastMenu ${!showAddBusiness ? "more-spacing" : "less" }`}>
        <Icon
          page="Settings"
          route="#"
          icon={Settings}
          isActive={activePage === 'Settings'}
          onClick={() => setActivePage('Settings')}
        />
        <Icon
          page="Contact us"
          route="#"
          icon={ContactUs}
          isActive={activePage === 'Settings'}
          onClick={() => setActivePage('Settings')}
        />
      </ul>
    </menu>
    </div>
  );
};

interface IconType {
  page: string;
  route: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}
const Icon = ({ page, route, icon, isActive, onClick }: IconType) => (
  <li  className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick} >
    <a href={route} onClick={(e) => route !== "/" ? e.preventDefault() :""}>
      <img className="menu-img" src={icon} alt={page} />

      <p className="menu-tag">{page}</p>
    </a>
  </li>
);

export default Menu;
