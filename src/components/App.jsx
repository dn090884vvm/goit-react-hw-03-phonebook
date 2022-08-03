import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { SectionWrapper } from './SectionWrapper/Sectionwrapper.styled';
import { Header1, Header2 } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  deleteContact = contactListId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactListId
      ),
    }));
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <GlobalStyle />
        <SectionWrapper>
          <Header1>Phonebook</Header1>
          <ContactForm onSubmit={this.addContact} />
        </SectionWrapper>
        <SectionWrapper>
          <Header2>Contacts</Header2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </SectionWrapper>
      </>
    );
  }
}

export default App;
