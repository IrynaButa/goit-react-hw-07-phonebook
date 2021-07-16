import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;


// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (items, filter) => {
//     console.log('Составляю новый массив видимых туду');
//     const normalizedFilter = filter.toLowerCase();

//     return items.filter(({ text }) =>
//       text.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

export default {
  getLoading,
  getFilter,
  getAllContacts
  //getVisibleContacts,
};
