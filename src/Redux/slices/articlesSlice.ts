import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum rowType {
  LEVEL = 'level',
  ROW = 'row',
}

interface NewRowData {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number; // Количество
  unitPrice: number; // Цена за ед.
  price: number; // Стоимость
  // parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  // type: rowType;
}

export interface RowData extends NewRowData {
  id: number;
}

export interface LevelData {
  idLvl: number;
  name: string;
  totalPrice: number;
  articles: RowData[];
}

export interface GlobalData {
  levels: LevelData[];
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

const initialState: GlobalData = {
  levels: [
    {
      idLvl: 1,
      name: 'Фундаментные работы',
      totalPrice: 5000,
      articles: [
        {
          id: 1,
          title: 'Статья работы',
          unit: 'см',
          quantity: 3,
          unitPrice: 228,
          price: 2283,
        },
      ],
    },
  ],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setLevel(state) {
      const idx = state.levels.length + 1;
      state.levels.push({
        idLvl: idx,
        name: 'Название по умолчанию',
        totalPrice: 0,
        articles: [
          {
            id: 1,
            title: 'Статья работы №1',
            unit: 'см',
            quantity: 3,
            unitPrice: 228,
            price: 2283,
          },
        ],
      });
    },
    setRow(state, action) {
      const idx = action.payload - 1;
      const tempArticles = [];
      tempArticles.push(...state.levels[idx].articles.map((item) => item));
      let endArticles: RowData[] = [...tempArticles];

      console.log(tempArticles);
      console.log(endArticles);
      endArticles.push({
        id: tempArticles.length + 1,
        title: 'Статья работы',
        unit: 'Единица',
        quantity: 3,
        unitPrice: 0,
        price: 0,
      });
      state.levels = state.levels.map((item) => {
        if (item.idLvl === idx) {
          item.idLvl = idx;
          item.name = state.levels[idx].name;
          item.totalPrice = state.levels[idx].totalPrice;
          item.articles = endArticles;
        }
      });

      console.log({ endArticles });
    },
    // clearList(state) {
    //   state.contacts = [];
    // },
    // editContact(state, action: PayloadAction<ContactType>) {
    //   state.searchCont = state.contacts.map((item) =>
    //     item.idx === action.payload.idx ? { ...item, name: action.payload.name } : item,
    //   );
    // },
    // delContact(state, action: PayloadAction<number>) {
    //   state.contacts = state.contacts.filter((obj) => obj.id !== action.payload);
    // },
    // стоит доработать, либо убрать отсюда полностью
    // setSearchValue(state, action: PayloadAction<string>) {
    //   let check;
    //   const newCont = state.contacts.filter((elem: ContactType) => {
    //     elem.name.includes(action.payload);
    //     check = elem;
    //   });
    //   state.searchCont.push(...newCont);
    //   console.log(action.payload);
    //   console.log(newCont);
    //   console.log(check);
    // },
  },
});

export const selectArticles = (state: RootState) => state.contact;

export const { setLevel, setRow } = articlesSlice.actions;

export default articlesSlice.reducer;
