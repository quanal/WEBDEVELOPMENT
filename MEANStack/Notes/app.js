const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Set up static file and connect to angular
app.use(express.static(__dirname + '/angular-app/dist/angular-app'));

//Set up Model (mongoDB with mongooseJS)
mongoose.connect('mongodb://localhost/notes_api');
mongoose.connection.on('connected',()=>{console.log('Connect to mongoDB');});
const NoteSchema = new mongoose.Schema({
    content:{
        type:String,
        required:[true,'content is required'],
        minlength: [3,'note should be longer than 3 chars']
    },
    dateTime: {
        type:Date,
        required:[true,'Date is required']
    } 
})
const Note = mongoose.model('Note',NoteSchema);

//Set up controller
const noteController = {
    index:(req,res)=>{
        Note.find({},(err,notes)=>{
            if(err) console.log('Error');
            else res.json(notes);
        });
    },
    create:(req,res)=>{
        let newNote = new Note({
            content: req.body.content,
            dateTime: req.body.dateTime
        });

        newNote.save((err)=>{
            if(err) console.log('Error at creating new notes');
            else console.log('Successfully added new note');
        });
        res.json();
    }
}

app.get('/notes',noteController.index);
app.post('/notes',noteController.create);

const port = 3000;
app.listen(port,()=>{
    console.log('Server running at port: ' + port);
})
