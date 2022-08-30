import path from 'path';
import { useSelector } from 'react-redux';
import './App.scss';
import Row from './Components/Row/Row';
import { SecondLvl } from './Components/SecondLvl/SecondLvl';
import { selectArticles, setLevel } from './Redux/slices/articlesSlice';
import { useAppDispatch } from './Redux/store';

function App() {
  const dispatch = useAppDispatch();

  const { levels } = useSelector(selectArticles);

  const onAddLevel = () => {
    dispatch(setLevel());
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="left">
          <div className="left-side-bar-content">
            <svg
              className="content__menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <path
                d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z"
                fill="#A1A1AA"
              />
            </svg>{' '}
            <svg
              className="content__back-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none">
              <path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" fill="#A1A1AA" />
            </svg>
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
          <svg
            className="right__sign"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none">
            <path
              d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
              fill="white"
            />
          </svg>{' '}
        </div>
      </div>
      <div className="south_side">
        <div className="left-menu">
          <div className="top">
            <div className="top-text">
              <p className="top-text__long">Название проекта</p>
              <p className="top-text__short">Аббревиатура</p>
            </div>
            <svg
              className="top__sign"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none">
              <path
                d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>По проекту</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>Объекты</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>РД</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>МТО</div>
          </div>
          <div className="menu_item__active">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <p>СМР</p>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>График</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>МиМ</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>Рабочие</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <div>Капвложения</div>
          </div>
          <div className="menu_item">
            <svg
              className="menu_item__img"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z"
                fill="white"
              />
            </svg>
            <p>Бюджет</p>
          </div>
        </div>
        <div className="content">
          <div className="content__top"></div>
          <div className="content__title">
            <div className="content__title_first">
              <p>Строительно-монтажные работы</p>
            </div>
          </div>
          <div className="content-rows">
            <div className="content-category">
              <p className="content-category__lvl">Уровень</p>
              <p className="content-category__name">Наименование работ</p>
              <p className="content-category__details">Ед. изм.</p>
              <p className="content-category__details">Количество</p>
              <p className="content-category__details">Цена за ед.</p>
              <p className="content-category__details">Стоимость</p>
            </div>
            <div className="first-level">
              <div className="row-lvl">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2014 14.966V14.2472V14.2312H18.2377C18.6681 14.2312 19.0188 13.8799 19.0188 13.4486V2.31597C19.0188 1.88472 18.6681 1.53333 18.2377 1.53333H9.21449C9.19161 1.46809 9.16873 1.39857 9.14502 1.32651C8.95391 0.745785 8.70848 0 7.97101 0H1.96087C1.53043 0 1.17971 0.351389 1.17971 0.782639V1.83681H0.462319C0.207246 1.83681 0 2.04444 0 2.3V13.4326V14.966C0 15.2215 0.207246 15.4292 0.462319 15.4292H16.7391C16.9942 15.4292 17.2014 15.2215 17.2014 14.966ZM7.49275 3.37014L7.0942 2.3C6.99855 2.06042 6.72754 1.85278 6.48841 1.85278H1.84928V0.798611C1.84928 0.734722 1.8971 0.670833 1.97681 0.670833H7.97101C8.31251 0.670833 8.5336 1.42487 8.67407 1.90397C8.71065 2.02874 8.74177 2.13486 8.76812 2.20417H18.2536C18.3174 2.20417 18.3812 2.25208 18.3812 2.33194V13.4646C18.3812 13.5285 18.3333 13.5924 18.2536 13.5924H17.2014V3.83333C17.2014 3.57778 16.9942 3.37014 16.7391 3.37014H7.49275ZM8.75355 12.7417V5.46893H7.30824L5.50781 6.60885V7.97248L7.1733 6.92845H7.21591V12.7417H8.75355Z"
                    fill="#5F98F5"
                  />
                </svg>
                +
                <svg
                  onClick={onAddLevel}
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2014 14.966V14.2472V14.2312H18.2377C18.6681 14.2312 19.0188 13.8799 19.0188 13.4486V2.31597C19.0188 1.88472 18.6681 1.53333 18.2377 1.53333H9.21449C9.19161 1.46809 9.16873 1.39857 9.14502 1.32651C8.95391 0.745785 8.70848 0 7.97101 0H1.96087C1.53043 0 1.17971 0.351389 1.17971 0.782639V1.83681H0.462319C0.207246 1.83681 0 2.04444 0 2.3V13.4326V14.966C0 15.2215 0.207246 15.4292 0.462319 15.4292H16.7391C16.9942 15.4292 17.2014 15.2215 17.2014 14.966ZM7.49275 3.37014L7.0942 2.3C6.99855 2.06042 6.72754 1.85278 6.48841 1.85278H1.84928V0.798611C1.84928 0.734722 1.8971 0.670833 1.97681 0.670833H7.97101C8.31251 0.670833 8.5336 1.42487 8.67407 1.90397C8.71065 2.02874 8.74177 2.13486 8.76812 2.20417H18.2536C18.3174 2.20417 18.3812 2.25208 18.3812 2.33194V13.4646C18.3812 13.5285 18.3333 13.5924 18.2536 13.5924H17.2014V3.83333C17.2014 3.57778 16.9942 3.37014 16.7391 3.37014H7.49275ZM5.58946 11.6337V12.7417H10.7741V11.4846H7.72014V11.4348L8.78193 10.3944C9.28145 9.93982 9.66853 9.55038 9.94315 9.22604C10.2178 8.89934 10.4083 8.60222 10.5149 8.33471C10.6238 8.06719 10.6782 7.79612 10.6782 7.5215C10.6782 7.10246 10.5705 6.73078 10.3551 6.40644C10.1396 6.0821 9.8378 5.82879 9.44954 5.6465C9.06365 5.46184 8.61029 5.36951 8.08946 5.36951C7.58283 5.36951 7.13538 5.46539 6.74713 5.65715C6.35887 5.84891 6.05702 6.11998 5.84159 6.47036C5.62615 6.82074 5.51843 7.23385 5.51843 7.70971H6.97795C6.97795 7.4777 7.02293 7.27765 7.11289 7.10956C7.20286 6.94148 7.3307 6.81245 7.49642 6.72249C7.66214 6.63253 7.85626 6.58755 8.0788 6.58755C8.29187 6.58755 8.48245 6.63016 8.65054 6.71539C8.81862 6.79825 8.9512 6.9178 9.04826 7.07405C9.14533 7.22793 9.19386 7.41141 9.19386 7.62448C9.19386 7.81624 9.1548 7.99498 9.07667 8.1607C8.99855 8.32405 8.88373 8.49096 8.73221 8.66141C8.58306 8.83187 8.3984 9.02363 8.17823 9.23669L5.58946 11.6337Z"
                    fill="#95FFAC"
                  />
                </svg>
              </div>
              <div className="row-name">Южная строительная площадка</div>
              <div className="row-total-price">5 000</div>
            </div>
            {levels.map((item) => (
              <SecondLvl
                key={item.idLvl}
                idLvl={item.idLvl}
                name={item.name}
                totalPrice={item.totalPrice}
                articles={item.articles}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="row-item">
<div className="row-lvl">
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z"
      fill="#7890B2"
    />
  </svg>
</div>
<div className="row-name">Южная строительная площадка</div>
<div className="row-unit">1 cm</div>
<div className="row-count">100</div>
<div className="row-price">50</div>
<div className="row-total-price">5 000</div>
</div> */
}
