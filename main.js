console.log("Initalizing HSICore...")

var nl = require("npmlog")
var commander = require("commander")
const mainProgram = new commander.Command
mainProgram
    .addHelpText("beforeAll", "HSICore Server is needed for the use of the HSICore system on Roblox.\n\nHSICore Server can be started without certain subsystems.\n\nUsing the HSICore System Manager is optional. As -nm will disable it.\n\nFor more information on the system, check the help documentation below.\n")
    .name("HSICore")
    .version("0.0.1")
    .option("-v, --verbose", "Outputs additional information")
    .option("-nm, --no-manager", "Disables starting up HSICore System Manager")

nl.heading = "HSICore"
console.clear()
var arguments = mainProgram.parse(process.argv)

if (arguments.verbose) {
    nl.level = Infinity
    nl.warn("Boot Process", "Running in Verbose Mode! All outputs will be logged!")
}

nl.info("Boot Process", "Initalizing!")

// Initalize all systems

nl.enableProgress()

