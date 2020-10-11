#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "Would you like to get in touch with me?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:azachariah@mail.missouri.edu");
                    console.log("\nThank you!, I'll get back to you soon.\n");
                }
            },
            {
                name: "Just Quit.",
                value: () => {
                    console.log("Thank you!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                       Arun George Zachariah"),
    work: `${chalk.white("    Graduate Research Assistant,")} ${chalk
        .hex("#2b82b2")
        .bold("University of Missouri-Columbia")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("arungzachariah"),
    github: chalk.gray("https://github.com/") + chalk.green("Arun-George-Zachariah"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arun-george-zachariah-00ab3346"),
    web: chalk.cyan("https://arun-george-zachariah.github.io/Personal-Page/"),
    npx: chalk.red("npx") + " " + chalk.white("arun-george-zachariah"),

    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I am a Ph.D. student at the University of Missouri-Columbia under the ")}`,
        `${chalk.italic("supervision of Dr. Praveen Rao. My research is at the intersection of")}`,
        `${chalk.italic("systems design, data science, and machine learning.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());