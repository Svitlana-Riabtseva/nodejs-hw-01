import { readFile } from 'node:fs/promises';

import { PATH_DB_CONTACTS } from '../../constants/contacts.js';

export const readContacts = async () => {
  const data = await readFile(PATH_DB_CONTACTS, 'utf-8');
  return JSON.parse(data);
};
