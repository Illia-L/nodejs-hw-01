import { PATH_DB } from '../constants/contacts.js';
import { promises } from 'fs';

export const readContacts = async () => {
  try {
    const content = await promises.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(content);

    return contacts;
  } catch {
    console.error('Failed to read file.');
  }
};
