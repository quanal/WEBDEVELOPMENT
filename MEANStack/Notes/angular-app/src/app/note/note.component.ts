import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  newNote:Note =new Note();

  constructor(private _dataService:DataService) {
   }

  ngOnInit() {
  }

  onSubmit(note:Note){
    this._dataService.create(this.newNote);
    this.newNote = new Note();
  }

}
