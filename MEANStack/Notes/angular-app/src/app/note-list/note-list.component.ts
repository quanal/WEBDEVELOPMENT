import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes:Note[] = [];

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.noteObservable.subscribe(
      (notes) => { this.notes = notes;}
    );
    this._dataService.retrieveAll();
  }

}
