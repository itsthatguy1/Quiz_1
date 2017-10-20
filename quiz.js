/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync'); //Calls the library "readline-sync"

let continueResponse; //Declares boolean variable "continueResponse"
let currentMonth, currentGrade, currentClassroom, upperTuition; //Declares integer variables
const MAX_GRADE = 8, //Declares constant
    MAX_MONTH = 9, //Declares constant
    MAX_CLASSROOM = 3, //Declares constant
    KDG_TUITION = 80; //Declares constant

function main() { //Defines function "main". Open curly brace opens block
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse(); //Calls function
    while (continueResponse === 1) { //While loop runs when "continueResponse" = 1. Open curly brace opens block
        setCurrentMonth(); //Calls function
        setCurrentGrade(); //Calls function
        setCurrentClassroom(); //Calls function
        processPaymentCoupons(); //Calls function
        setContinueResponse(); //Calls function
        for (let i = 0; i < MAX_CLASSROOM; i++) { //For loop - declares "i", says loop runs when "i" is less than constant "MAX_CLASSROOM", increases "i" by one every time the loop runs. Open curly brace opens block
            printGoodbye(); //Calls function
        } //Closes block
    } //Closes block
} //Closes Bock

main(); //Calls function "main"

function setContinueResponse() { //Defines function "setContinueResponse. Opens block
    if (continueResponse != null) { //if statement. Runs when "continueResponse" is not null. Opens block
        continueResponse = -1; //sets "continueResponse" to -1.
        while (continueResponse !== 0 && continueResponse !== 1) { //while loop. Runs when "continueResponse" is not equal to zero or 1. Opens block.
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //Asks user to define "continueResponse"
        } //Closes block
    } else { //Closes bracket. If while loop does not run else statement is run. Opens block
        continueResponse = 1; //Sets "continueResponse" to 1
    } //Closes block
} //Closes block

function setCurrentMonth() { //Defines Function "setCurrentMonth" Opens block.
    if (currentMonth != null && currentMonth <= MAX_MONTH) { //if statement. Runs when "currentMonth" is not null and is lower than or equal to "MAX_MONTH". Opens block.
        currentMonth++; //Increments "currentMonth" by 1
    } else { //Closes block. When if statement is not true else statement is run. Opens block.
        currentMonth = 1; //Sets "currentMonth" equal to 1
    } //Closes block.
} //Closes block.

function setCurrentGrade() { //Defines Function "setCurrentGrade". Opens block.
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) { //if statement. Runs when "currentGrade" is not an undefined data type and "currentGrade is less than or equal to "MAX_GRADE". Opens block.
        currentGrade++; //Increments "currentGrade" by 1
    } else { //Closes block. Runs when if statement is not run. Opens block.
        currentGrade = 0; //Sets "currentGrade" 0
    } //Closes block.
} //Closes block.

function setCurrentClassroom() { //Defines function "setCurrentClassroom". Opens block
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) { //if statement. Runs when "currentClassroom is not an undefined data type and "currentClassroom is less than or equal to "MAX_CLASSROOM". Opens block.
        currentClassroom++; //Increments "currentClassroom" by 1
    } else { //Closes block. else statement. Opens block.
        currentClassroom = 1; //sets "currentClassroom" to 1
    } //closes block
} //closes block

function setUpperTuition() { //Defines function "setUpperTuition". Opens block
    const BASE_TUITION = 60; //Declares constant
    upperTuition = BASE_TUITION * currentGrade; // Sets "upperTuition" equal to "BASE_TUITION" * "currentGrade".
} //Closes block

function processPaymentCoupons() { //Defines function "processPaymentCoupons". Opens block
    while (currentGrade <= MAX_GRADE) { //While loop. Runs when "currentGrade" is less than or equal to "MAX_GRADE". Opens block
        while (currentClassroom <= MAX_CLASSROOM) { //While loop. Runs when "currentClassroom" is less than or equal to "MAX_CLASSROOM". Opens block
            while (currentMonth <= MAX_MONTH) { //While loop. Runs when "currentMonth" is less than or equal to "MAX_MONTH" Opens block
                if (currentGrade == 0) { //if statement. Runs when "currentGrade" is equal to zero. Opens block
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`); //Displays message
                } else { //Closes block. Else statement. Opens block
                    setUpperTuition(); //Calls function "setUpperTuition"
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`); //Displays message
                } //Closes block.
                setCurrentMonth(); //Calls function
            } //Closes block.
            setCurrentClassroom(); //Calls function
            setCurrentMonth(); //Calls function
        } //Closes block
        setCurrentGrade(); //Calls function
        setCurrentClassroom(); //Calls function
    } //Closes block
} //Closes block

function printGoodbye() { //Defines function "printGoodbye". Opens block
    console.log(`\tGoodbye.`); //Displays message.
} //Closes block