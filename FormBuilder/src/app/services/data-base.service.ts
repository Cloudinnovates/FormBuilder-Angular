import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() { }

  openDataBase() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("database", 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore('state', { keyPath: 'id' });
      }
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => {
        alert('Blocked')
      };
    });
  }

  loadData(dataBase: IDBDatabase) {
    return new Promise((resolve, reject) => {
      const transaction = dataBase.transaction('state', 'readonly');
      const request = transaction.objectStore('state').get(1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  addOrUpdateData(dataBase: IDBDatabase, data) {
    return new Promise((resolve, reject) => {
      const transaction = dataBase.transaction('state', 'readwrite');
      const request = transaction.objectStore('state').put({ 'id': 1, 'data': data });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}
