import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() { }

  openDataBase() {
    return new Promise((resolve, reject) => {
      const request =  window.indexedDB.open("database", 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore('state', { keyPath: 'key' });
      }
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => { 
        console.log('Blocked')
      };
    }); 
  }

  loadData(dataBase) {
    return new Promise((resolve, reject) => {
      const request = dataBase.transaction('state', 'readonly').objectStore('state').get(1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

saveData(dataBase, data) {
  return new Promise((resolve, reject) => {
    const request = dataBase.transaction('state', 'readwrite').objectStore('state').add({'key': 1, 'data': JSON.stringify(data)});
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

updateData(dataBase, data) {
  return new Promise((resolve, reject) => {
    const request = dataBase.transaction('state', 'readwrite').objectStore('state').put({'key': 1, 'data': JSON.stringify(data)});
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
}
