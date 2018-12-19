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

  loadData(dataBase) {
    return new Promise((resolve, reject) => {
      const request = dataBase.transaction('state', 'readonly').objectStore('state').get(1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  saveData(dataBase, data) {
    return new Promise((resolve, reject) => {
      const request = dataBase.transaction('state', 'readwrite').objectStore('state').add({ 'id': 1, 'data': data });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  updateData(dataBase, data) {
    return new Promise((resolve, reject) => {
      const request = dataBase.transaction('state', 'readwrite').objectStore('state').put({ 'id': 1, 'data': data });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}
