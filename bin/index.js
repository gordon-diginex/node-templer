#! /usr/bin/env node
"use strict";var _chalk=_interopRequireDefault(require("chalk")),_figlet=_interopRequireDefault(require("figlet")),_init=_interopRequireDefault(require("./init"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var argv=require("yargs").demandCommand(1).command("init","Initialize templer to the project.").command("create <temp>","Create templates defined in .temp folders.").default("r","src").alias("r","root").describe("r","Set base folder of templates to be created.").argv;switch(console.log(_chalk.default.blue(_figlet.default.textSync("Templer",{}))),argv._[0]){case"init":(0,_init.default)();break;case"create":break;default:process.exit(1);}console.log(argv);