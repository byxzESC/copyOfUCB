// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB('contacts', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts db already exists');
            } else {
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true});
                console.log('db created')
        }
    }
    })
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
 const contactsDB = await openDB('contacts', 1);
 const tx = contactsDB.transaction('contacts', 'readwrite');
 const store = tx.objectStore('contacts');
 const request = store.add({ name:name, address:home, phone:cell, email:email })
 const result = await request;
 console.log('done', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    const contactsDB = await openDB('contacts', 1);
    const tx = contactsDB.transaction('contacts', 'readonly');
    const store = tx.objectStore('contacts');
    const request = store.getAll();
    const result = await request;
    console.log('done', result);
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const contactsDB = await openDB('contacts', 1);
    const tx = contactsDB.transaction('contacts', 'readwrite');
    const store = tx.objectStore('contacts');
    const request = store.delete(id);
    const result = await request;
    console.log('done', result);
};

initdb();
