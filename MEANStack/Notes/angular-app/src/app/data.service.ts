import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Note } from './Note';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  noteObservable = new BehaviorSubject([]);

  constructor(private _http:Http) { }

  retrieveAll(){
    this._http.get('http://localhost:3000/notes').subscribe(
      (notes) =>{ this.noteObservable.next(notes.json());},
      (errorResponse) => { console.log('Erro'); }
    )
  }

  create(note:Note){
    console.log('At creating new note - DataService');
    this._http.post('http://localhost:3000/notes',note).subscribe(
      (res) => {this.retrieveAll();},
      (error) => {console.log('Error');}
    )
  }

}
