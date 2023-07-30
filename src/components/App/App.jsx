import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import FormPhonebook from 'components/FormPhonebook';
import Contact from 'components/ContactCard/ContactCard';
import Filter from 'components/Filter';
import {
  Section,
  Container,
  Title,
  TitleContacts,
  DiPhonegapSvg,
} from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filterText, setFilter] = useState('');

  let filteredContacts = contacts;

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const normalizedNameFilter = data.name.toLowerCase();
    const isFoundName = !contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedNameFilter)
    );
    const isFoundNumber = !contacts.find(contact =>
      contact.number.includes(data.number)
    );
    const isFound = isFoundName && isFoundNumber;

    if (isFound) {
      setContacts(prevState => [data, ...prevState]);
    } else {
      Notiflix.Notify.failure(`This contact is already in your contact list.`);
    }
  };

  const deleteItem = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const searchFilter = e => {
    setFilter(e.currentTarget.value);
  };

  if (filterText) {
    const normalizedFilter = filterText.toLowerCase();
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <>
      <Section>
        <Container>
          <Title>
            <DiPhonegapSvg />
            Phonebook
          </Title>
          <FormPhonebook onSubmit={addContact} />
          {contacts.length === 0 ? null : (
            <>
              <TitleContacts>Contacts</TitleContacts>
              <Filter value={filterText} onChange={searchFilter} />
              <Contact array={filteredContacts} onDeleteItem={deleteItem} />
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
