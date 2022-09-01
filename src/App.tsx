import { useSelector } from 'react-redux';
import { useState } from 'react';
import './App.scss';
import { useAppDispatch } from './Redux/store';

import { SecondLvl } from './Components/SecondLvl/SecondLvl';
import { LevelData, selectArticles, setLevel } from './Redux/slices/articlesSlice';

import first_lvl from './assets/svg/first_lvl.svg';
import second_lvl_add from './assets/svg/second_lvl_add.svg';
import menu_icon from './assets/svg/menu_icon.svg';
import back_icon from './assets/svg/back_icon.svg';
import right_sign from './assets/svg/right_sign.svg';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import ContentCategory from './Components/ContentCategory/ContentCategory';

function App() {
  const dispatch = useAppDispatch();
  const [newRowImg, setNewRowImg] = useState(false);

  const { totalPrice, levels } = useSelector(selectArticles);

  const onAddLevel = () => {
    dispatch(setLevel());
  };

  const showNewRowImg = () => {
    setNewRowImg(true);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="left">
          <div className="left-side-bar-content">
            <img src={menu_icon} className="content__menu-icon" alt="" />
            <img src={back_icon} className="content__back-icon" alt="" />

            <div className="content__view content__view_active">Просмотр</div>
            <div className="content__rule">Управление</div>
          </div>
        </div>
        <div className="right">
          <img
            className="right__user-image"
            src="https://i1.sndcdn.com/artworks-000035544866-lb9n8o-t500x500.jpg"
            alt="avatar"></img>
          <p>Антон Петров</p>
          <img src={right_sign} className="right__sign" alt="" />
        </div>
      </div>
      <div className="south_side">
        <LeftMenu />
        <div className="content">
          <div className="content__top"></div>
          <div className="content__title">
            <div className="content__title_first">
              <p>Строительно-монтажные работы</p>
            </div>
          </div>
          <div className="content-rows">
            <ContentCategory />
            <div className="first-level">
              <div onClick={showNewRowImg} className="row-lvl">
                <img src={first_lvl} alt="first lvl img" />
                <img
                  onClick={onAddLevel}
                  className={newRowImg ? '' : 'hidden'}
                  src={second_lvl_add}
                  alt="second lvl img"
                />
              </div>
              <div className="row-name">Южная строительная площадка</div>
              <div className="row-total-price">{totalPrice.totalPrice}</div>
            </div>
            {levels.map((item: LevelData) => (
              <SecondLvl
                key={item.idLvl}
                idLvl={item.idLvl}
                name={item.name}
                totalPrice={item.totalPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
