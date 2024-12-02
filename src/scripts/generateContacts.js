// 1. Generate contacts

// 2. Write contacts to db.json

// 3. Add contacts to preview contacts from db.json

import { readContacts } from '../../utils/readContacts.js';
import { createFakeContact } from '../../utils/createFakeContact.js';
import { writeContacts } from '../../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const newList = [...contactList, ...newContacts];
  await writeContacts(newList);
};

generateContacts(5);
