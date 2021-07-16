
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactsOperations from './redux/contacts-operations';
import contactsSelectors from './redux/contacts-selectors';
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Form from "./Components/Form/Form";


const App = ({ filter, items, dispatch, loading }) => {
  useEffect(() => dispatch(contactsOperations.fetchContacts()), []);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  return (
    <div>
        <h1>Phonebook</h1>
      <Form />
      {/* <Form onAddContact={addContact} /> */}

        <h2>Contacts</h2>
         {loading && <h2>Loading...</h2>}
      <Filter />
       {/* <Filter value={filter} onChangeFilter={onChangeFilter} /> */}
        <Contacts
          contacts={visibleContacts}
         
      />
      {/* <Contacts
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        /> */}
      </div>
    
  );
};

App.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  items: contactsSelectors.getAllContacts(state),
  filter: contactsSelectors.getFilter(state),
  loading: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps)(App);
