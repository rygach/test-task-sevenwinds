import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../Redux/store';

import { editRow, RowData } from '../../Redux/slices/articlesSlice';

import article from '../../assets/svg/article.svg';

const Row: React.FC<RowData> = ({
  id,
  title,
  unit,
  quantity,
  unitPrice,
  price,
  parentId,
  type,
}) => {
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState(false);

  const inpTitle = useRef<HTMLInputElement>(null);
  const inpUnit = useRef<HTMLInputElement>(null);
  const inpQuantity = useRef<HTMLInputElement>(null);
  const inpUnitPrice = useRef<HTMLInputElement>(null);

  const goEditForm = () => {
    setShowInput(true);
  };

  const onEditRow = (e: React.FormEvent) => {
    e.preventDefault();
    let changed: RowData = {
      id: id,
      title: title,
      unit: unit,
      quantity: quantity,
      unitPrice: unitPrice,
      price: price,
      parentId: parentId,
      type: type,
    };
    if (inpUnit.current?.value && inpTitle.current?.value) {
      changed = {
        id: id,
        title: inpTitle.current?.value,
        unit: inpUnit.current?.value,
        quantity: Number(inpQuantity.current?.value),
        unitPrice: Number(inpUnitPrice.current?.value),
        price: price,
        parentId: parentId,
        type: type,
      };
    }
    if (changed) {
      dispatch(editRow(changed));
    }
    setShowInput(false);
  };

  return (
    <form onDoubleClick={goEditForm} className="row-item" onSubmit={onEditRow}>
      <div className="row-lvl">
        <img className="article-img" src={article} alt="article img" />
      </div>
      {/* я пытался сделать без кнопки, но у меня на нажатие ентера реагировала только форма, что находится в строке уровней. а до этих форм почему то не доходило... перерыв весь stackoverflow, я решил не тратить время и сделать костыль. возможно, вы мне объясните в чем причина :/ */}
      <button type="submit"></button>
      <div className="row-name">
        <p className={!showInput ? '' : 'hidden'}>{title}</p>
        <input
          ref={inpTitle}
          className={showInput ? 'row-name-inp' : 'row-name-inp hidden'}
          type="text"
          placeholder="Наименование"
        />
      </div>
      <div className="row-unit">
        <p className={!showInput ? '' : 'hidden'}>{unit}</p>
        <input
          ref={inpUnit}
          className={showInput ? 'row-unit-inp' : 'row-unit-inp hidden'}
          type="text"
          placeholder="Ед. изм."
        />
      </div>
      <div className="row-count">
        <p className={!showInput ? '' : 'hidden'}>{quantity}</p>
        <input
          ref={inpQuantity}
          className={showInput ? 'row-count-inp' : 'row-count-inp hidden'}
          type="text"
          placeholder="Количество"
        />
      </div>
      <div className="row-price">
        <p className={!showInput ? '' : 'hidden'}>{unitPrice}</p>
        <input
          ref={inpUnitPrice}
          className={showInput ? 'row-price-inp' : 'row-price-inp hidden'}
          type="text"
          placeholder="Цена за ед."
        />
      </div>
      <div className="row-total-price">{price}</div>
    </form>
  );
};

export default Row;
