import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../Redux/store';

import {
  editLevel,
  LevelData,
  rowType,
  selectArticles,
  setRow,
} from '../../Redux/slices/articlesSlice';
import Row from '../Row/Row';

import second_lvl from '../../assets/svg/second_lvl.svg';
import article_add from '../../assets/svg/article_add.svg';

export const SecondLvl: React.FC<LevelData> = ({ idLvl, name, totalPrice }) => {
  const dispatch = useAppDispatch();
  const valInp = useRef<HTMLInputElement>(null);
  const { articles } = useSelector(selectArticles);
  const [showInput, setShowInput] = useState(false);
  const [newRowImg, setNewRowImg] = useState(false);

  const onAddRow = () => {
    dispatch(setRow(idLvl));
    setNewRowImg(false);
  };

  const goEditForm = () => {
    setShowInput(true);
  };

  const showNewRowImg = () => {
    setNewRowImg(true);
  };

  const onEditLevel = (e: React.FormEvent) => {
    e.preventDefault();
    if (valInp.current?.value) {
      const changed: LevelData = {
        idLvl: idLvl,
        name: valInp.current?.value.toString(),
        totalPrice: totalPrice,
      };
      dispatch(editLevel(changed));
    }
    setShowInput(false);
  };

  return (
    <>
      <form onDoubleClick={goEditForm} className="row-item" onSubmit={onEditLevel}>
        <div onClick={showNewRowImg} className="row-lvl">
          <img className="second-lvl-img" src={second_lvl} alt="second lvl img" />
          <img className={newRowImg ? '' : 'hidden'} onClick={onAddRow} src={article_add} alt="" />
        </div>
        <div className="row-name">
          <p className={!showInput ? '' : 'hidden'}>{name}</p>
          <input
            ref={valInp}
            className={showInput ? 'row-name-inp' : 'row-name-inp hidden'}
            type="text"
            placeholder="Наименование"
          />
        </div>
        <div className="row-total-price">{totalPrice}</div>
      </form>
      {articles.map((item) => {
        if (item.parentId === idLvl) {
          return (
            <Row
              key={item.id}
              id={item.id}
              title={item.title}
              unit={item.unit}
              quantity={item.quantity}
              unitPrice={item.unitPrice}
              price={item.price}
              parentId={idLvl}
              type={rowType.ROW}
            />
          );
        }
      })}
    </>
  );
};
