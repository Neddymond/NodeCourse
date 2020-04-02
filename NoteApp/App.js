const note = require("./Note");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.version("20.0.0");

// Create Add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function()
    {
        console.log("Adding a new note..");
    } 
})

// Create Remove command
yargs.command({
    command: "remove",
    describe: "Removing a new note",
    handler: function()
    {
        console.log("Removing a new note..");
    } 
})

// Create a List Command
yargs.command({
    command: "list",
    describe: "List a new note",
    handler: function()
    {
        console.log("Listing a new note..");
    } 
})

// Create a Read command
yargs.command({
    command: "Read",
    describe: "Read a new file",
    handler: function()
    {
        console.log("Reading a new file");
    }
})


console.log(yargs.argv);