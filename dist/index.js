#!/usr/bin/env node
const { Command } = require("commander");
const fs = require("fs");
const program = new Command();
program
    .command("add <n1> <n2>")
    .description("Add two numbers")
    .action((n1, n2) => {
    console.log(Number(n1) + Number(n2));
});
program
    .command("subtract <n1> <n2>")
    .description("Subtract second number from first")
    .action((n1, n2) => {
    console.log(Number(n1) - Number(n2));
});
program
    .command("interest <principal> <rate> <time>")
    .description("Calculate simple interest")
    .action((principal, rate, time) => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);
    console.log((p * r * t) / 100);
});
program
    .command("validate-phone <phone>")
    .description("Validate if a string is a standard 10-digit phone number")
    .action((phone) => {
    const isValid = /^\d{10}$/.test(phone);
    console.log(isValid ? "Valid phone number" : "Invalid phone number");
});
program
    .command("validate-email <email>")
    .description("Validate email address format")
    .action((email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    console.log(isValid ? "Valid email address" : "Invalid email address");
});
program
    .command("time")
    .description("Get current time")
    .action(() => {
    console.log(new Date().toLocaleTimeString());
});
program
    .command("file-info <filepath>")
    .description("Read file and display basic file info with its content")
    .action((filepath) => {
    try {
        const stats = fs.statSync(filepath);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`\nContent:\n${fs.readFileSync(filepath, "utf8")}`);
    }
    catch (err) {
        console.error("Error reading file:", err.message);
    }
});
program
    .command("random <min> <max>")
    .description("Generate a random number between min and max")
    .action((min, max) => {
    const minNum = Math.ceil(Number(min));
    const maxNum = Math.floor(Number(max));
    console.log(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
});
program
    .command("encode-base64 <data>")
    .description("Convert string or number to base64")
    .action((data) => {
    console.log(Buffer.from(data).toString("base64"));
});
program
    .command("decode-base64 <data>")
    .description("Decode base64 string")
    .action((data) => {
    console.log(Buffer.from(data, "base64").toString("utf-8"));
});
program.parse();
