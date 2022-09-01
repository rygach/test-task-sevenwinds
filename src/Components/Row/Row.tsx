import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { editRow, RowData } from '../../Redux/slices/articlesSlice';
import { useAppDispatch } from '../../Redux/store';

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
  const inpTitle = useRef<HTMLInputElement>(null);
  const inpUnit = useRef<HTMLInputElement>(null);
  const inpQuantity = useRef<HTMLInputElement>(null);
  const inpUnitPrice = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);

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
