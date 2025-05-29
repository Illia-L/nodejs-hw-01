import { PATH_DB } from '../constants/contacts.js';
import { promises } from 'fs';

export const writeContacts = async (updatedContacts) => {
  const updatedFileContent = JSON.stringify(updatedContacts);
  
  try {
    await promises.writeFile(PATH_DB, updatedFileContent, 'utf-8');
  } catch {
    console.error('Failed to write file');
  }
};
