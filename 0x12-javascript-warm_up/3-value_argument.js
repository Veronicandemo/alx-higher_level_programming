#!/usr/bin/node

const [, , arg] = process.argv;
arg ? console.log(arg) : console.log("No argument");
