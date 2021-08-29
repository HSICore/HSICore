var nl = require("npmlog");
var ac = require("ansi-colors");
var commander = require("commander")
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function main() {

    console.clear()
    console.log("##################################################################")
    console.log("#                                                                #")
    console.log("# Note: Program will run with specified command line parameters. #")
    console.log("#                                                                #")
    console.log("# 1. Initalize program with default settings.                    #")
    console.log("#                                                                #")
    console.log("# 2. Exit.                                                       #")
    console.log("#                                                                #")
    console.log("# 3. Initalize program with additional parameters.               #")
    console.log("#                                                                #")
    console.log("##################################################################")
    console.log("")
    rl.prompt("> ")

    rl.question("", function (answer) {
        if (answer == 2) {
            options()
        }
    })

}

function options() {

    console.clear()
    console.log("##################################################################")
    console.log("#                                                                #")
    console.log("# Note: Program will run with specified command line parameters. #")
    console.log("#                                                                #")
    console.log("# 1. Verbose Output. (-v)                                        #")
    console.log("#                                                                #")
    console.log("# 2. Do not launch System Manager. (-nm)                         #")
    console.log("#                                                                #")
    console.log("# 3. Back.                                                       #")
    console.log("#                                                                #")
    console.log("##################################################################")
    console.log("")
    rl.prompt("> ")

    var response = rl.question("", function() {

    })

}

main()