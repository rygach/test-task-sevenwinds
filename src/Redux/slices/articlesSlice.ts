import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum rowType {
  LEVEL = 'level',
  ROW = 'row',
}

export interface RowData {
  id: number;
  title: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  price: number;
  parentId: number;
  type: rowType;
}

export interface LevelData {
  idLvl: number;
  name: string;
  totalPrice: number;
}

export type newLvlData = {
  value: string;
  id: number;
};

export type TotalPriceType = {
  checkedLvl: number[];
  checkedRow: number[];
  totalPrice: number;
};

interface stateType {
  levels: LevelData[];
  articles: RowData[];
  totalPrice: TotalPriceType;
}

// функция для сохранения строки
// function saveRow(rowData: NewRowData, storage: RowData[]) {
//   const index = Math.max(...storage.map((v) => v.id), 0) + 1;
//   const row: RowData = { id: index, ...rowData };

//   storage.push(row);
//   return {
//     current: row,
//     changed: recalculation(row.parent, storage),
//   };
// }

// // функция для изменения строки
// function editRow(row: RowData, storage: RowData[]) {
//   const index = storage.findIndex((v) => v.id === row.id);
//   storage.splice(index, 1, row);

//   return {
//     current: row,
//     changed: recalculation(row.parent, storage),
//   };
// }

// function recalculation(parentID: number | null, storage: RowData[]) {
//   const changedRows: RowData[] = [];

//   if (parentID == null) return changedRows;
//   let currentParentIndex = storage.findIndex((v) => v.id === parentID);
//   if (currentParentIndex === -1) return changedRows;
//   let currentParent = storage[currentParentIndex];

//   do {
//     const children = storage.filter((v) => v.parent == currentParent.id);
//     const newPrice = children.reduce((acc, v) => acc + v.price, 0);
//     if (currentParent.price === newPrice) break;

//     storage[currentParentIndex].price = newPrice;
//     changedRows.push(storage[currentParentIndex]);

//     currentParentIndex = storage.findIndex((v) => v.id === currentParent.parent);
//   } while (currentParentIndex !== -1);

//   return changedRows;
// }

const initialState: stateType = {
  levels: [],
  articles: [],
  totalPrice: { checkedLvl: [], checkedRow: [], totalPrice: 0 },
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setLevel(state) {
      state.levels.push({
        idLvl: state.levels.length + 1,
        name: 'New level',
        totalPrice: 0,
      });
    },
    setRow(state, action) {
      state.articles.push({
        id: state.articles.length + 1,
        title: 'New article',
        unit: 'm',
        quantity: 0,
        unitPrice: 0,
        price: 0,
        parentId: action.payload,
        type: rowType.ROW,
      });
    },
    editLevel(state, action: PayloadAction<LevelData>) {
      const index = action.payload.idLvl - 1;
      state.levels.splice(index, 1, {
        idLvl: action.payload.idLvl,
        name: action.payload.name,
        totalPrice: action.payload.totalPrice,
      });
    },
    editRow(state, action: PayloadAction<RowData>) {
      const index = action.payload.id - 1;
      state.articles.splice(index, 1, {
        id: action.payload.id,
        title: action.payload.title,
        unit: action.payload.unit,
        quantity: action.payload.quantity,
        unitPrice: action.payload.unitPrice,
        price: action.payload.quantity * action.payload.unitPrice,
        parentId: action.payload.parentId,
        type: action.payload.type,
      });
      const idxParent = action.payload.parentId - 1;
      let sumLvl = state.levels[idxParent].totalPrice;
      let sumRow = action.payload.quantity * action.payload.unitPrice;
      state.levels[idxParent].totalPrice = sumLvl + sumRow;
      if (
        !(
          state.totalPrice.checkedRow.includes(action.payload.id) &&
          state.totalPrice.checkedLvl.includes(state.levels[idxParent].idLvl)
        )
      ) {
        state.totalPrice.totalPrice = state.totalPrice.totalPrice + sumRow;
      }
    },
  },
});

export const selectArticles = (state: RootState) => state.article;

export const { setLevel, setRow, editLevel, editRow } = articlesSlice.actions;

export default articlesSlice.reducer;
