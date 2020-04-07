const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) =>
{
    const notes = LoadFile();
    const duplicateNote = notes.find((note)  => note.title === title);

    debugger

    if(!duplicateNote)
    {
        notes.push(
            {
                title: title,
                body: body
            }
        )
    
        SaveNotes(notes);
        console.log(chalk.green.inverse("Added a new note"));
    }
    else
    {
        console.log(chalk.red.inverse("Unable to add double Titles"));
    }
}

function SaveNotes(notes)
{
    const stringifiedFile = JSON.stringify(notes);
    const writtenFile = fs.writeFileSync("notes.json", stringifiedFile);
}

const LoadFile = function()
{
    try {
        const readFile = fs.readFileSync("notes.json");
        const stringedFile = readFile.toString();
        return JSON.parse(stringedFile);
    } catch (er) {
        return [];
    }
}

const removeNote = (title) =>
{
    const notes = LoadFile();

    const returnedNote = notes.filter((note) => note.title !== title);

    if(notes.length > returnedNote.length)
    {
        console.log(chalk.bgGreen("Note Removed"));
        SaveNotes(returnedNote);
    }
    else
    {
        console.log(chalk.bgRed("No Note Removed"))
    }
}

const listNote = () => {
    const notes = LoadFile();
    notes.forEach((note) => console.log(chalk.cyan(note.title))); 
}

const readNote = (title) => {
    const notes = LoadFile();
    const noteToRead = notes.find((note) => note.title === title);

    if(noteToRead)
    {
        console.log(chalk.yellow(noteToRead.title));
        console.log(noteToRead.body);
    }
    else
    {
        console.log(chalk.red.inverse("No note has that Title"));
    }
}


module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}