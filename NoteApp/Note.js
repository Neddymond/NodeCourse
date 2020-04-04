const fs = require("fs");
function Note()
{
    return "Hello";
}


const addNotes = function(title, body)
{
    const notes = LoadFile();
    // console.log(dosomn);

    const returnedNote = notes.filter((note) => {
        return note.title === title;
    })
    
    if(returnedNote.length === 0)
    {
        notes.push(
            {
                title: title,
                body: body
            }
        )
    
        SaveNotes(notes);
        console.log("Added a new note");
    }
    else
    {
        console.log("Unable to add double Titles");
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

const removeNote = function(title)
{
    console.log(title);
}


module.exports = {
    addNotes: addNotes,
    Note: Note,
    removeNote: removeNote
}