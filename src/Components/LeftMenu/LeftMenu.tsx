import top_sign from '../../assets/svg/top_sign.svg';
import item_img from '../../assets/svg/item_img.svg';
import menu_item from '../../assets/svg/menu_item.svg';

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="top">
        <div className="top-text">
          <p className="top-text__long">Название проекта</p>
          <p className="top-text__short">Аббревиатура</p>
        </div>
        <img src={top_sign} className="top__sign" alt="" />
      </div>
      <div className="menu_item">
        <img src={item_img} className="menu_item__img" alt="" />
        <div>По проекту</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>Объекты</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>РД</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>МТО</div>
      </div>
      <div className="menu_item__active">
        <img src={menu_item} className="menu_item__img" alt="" />
        <p>СМР</p>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>График</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>МиМ</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>Рабочие</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <div>Капвложения</div>
      </div>
      <div className="menu_item">
        <img src={menu_item} className="menu_item__img" alt="" />
        <p>Бюджет</p>
      </div>
    </div>
  );
};

export default LeftMenu;
