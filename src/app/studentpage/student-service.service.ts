import { Injectable } from '@angular/core';

export type StudentType = {id: string, name: string, email: string};
@Injectable()
export class StudentServiceService {
  current:StudentType;
  _data: StudentType[] = [
  	{id: '1', name: 'Suman Lama', email: 'suman@rocks.com'},
  	{id: '2', name: 'Lama Suman', email: 'lama@rocks.com'},
  	{id: '3', name: 'I Lama', email: 'I@rock.com'},
  	{id: '4', name: 'Me Lama', email: 'Me@rocks.com'}
  ];

  constructor() { }

  get data() {
  	return this._data;
  }

  getData():StudentType[] {
  	return this._data;
  }

  setCurrent(id) {
  	this.current = this._data.find(x => x.id === id);
  	return this.current;
  }
}
