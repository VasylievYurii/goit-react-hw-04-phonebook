import { Component } from 'react';
import Notiflix from 'notiflix';
import FormPhonebook from 'components/FormPhonebook';
import Contact from 'components/ContactCard';
import Filter from 'components/Filter';
import {
  Section,
  Container,
  Title,
  TitleContacts,
  DiPhonegapSvg,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const normalizedNameFilter = data.name.toLowerCase();
    const isFoundName = !this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedNameFilter)
    );
    const isFoundNumber = !this.state.contacts.find(contact =>
      contact.number.includes(data.number)
    );
    const isFound = isFoundName && isFoundNumber;

    if (isFound) {
      this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
    } else {
      Notiflix.Notify.failure(`This contact is already in your contact list.`);
    }
  };

  deleteItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section>
          <Container>
            <Title>
              <DiPhonegapSvg />
              Phonebook
            </Title>
            <FormPhonebook onSubmit={this.addContact} />
            {contacts.length === 0 ? null : (
              <>
                <TitleContacts>Contacts</TitleContacts>
                <Filter value={filter} onChange={this.searchFilter} />
                <Contact
                  array={filteredContacts}
                  onDeleteItem={this.deleteItem}
                />
              </>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
