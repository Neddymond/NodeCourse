const notes = require("./Note");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.version("20.0.0");

// Create Add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "This is the body to the Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv)
    {
        notes.addNotes(argv.title, argv.body);
        // console.log(`Title: ${argv.title}, Body: ${argv.body}`);
    } 
})

// Create Remove command
yargs.command({
    command: "remove",
    describe: "Removing a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
        // body: {
        //     describe: "This is the body of the note to remove",
        //     demandOption: true,
        //     type: "string"
        // }
    },
    handler(argv)
    {
        notes.removeNote(argv.title);
    } 
})

// Create a List Command
yargs.command({
    command: "list",
    describe: "List a new note",
    handler(argv)
    {
        console.log("Listing a new note..", argv);
    } 
})

// Create a Read command
yargs.command({
    command: "Read",
    describe: "Read a new file",
    handler()
    {
        console.log("Reading a new file");
    }
})

yargs.parse();
// console.log(yargs.argv);