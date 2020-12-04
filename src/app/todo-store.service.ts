import { Injectable } from '@angular/core';

export interface ITodo {
  title: string;
  completed: boolean;
  userId: number;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  constructor() {}

  fetchData(limit): Promise<ITodo[]> {
    return fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    ).then((response) => response.json());
  }
}
