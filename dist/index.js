#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
program
    .command("add <n1> <n2>")
    .action((n1, n2) => {
    console.log(Number(n1) + Number(n2));
});
program.parse();
