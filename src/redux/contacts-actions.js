import { createAction } from '@reduxjs/toolkit';
import shortid from "shortid";

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');


export const changeFilter = createAction('contacts/changeFilter');

//   export const addContact = createAction('contacts/addContact', ({ name, number }) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

//  export const deleteContact = createAction('contacts/deleteContact');

//  export const changeFilter = createAction('contacts/changeFilter');

