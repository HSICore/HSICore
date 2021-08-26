console.log("Initalizing HSICore...")

var nl = require("npmlog")
var commander = require("commander")
const mainProgram = new commander.Command
mainProgram
    .version("0.0.1")
    .option("--dev, -d", "Outputs additional information --- EG: HTTP Information")
    .option("--no-electron, -ne", "Disables starting up HSICore Manager")

nl.heading = "HSICore"
console.clear()
mainProgram.parse(process.argv)
const args = mainProgram.opts


    nl.level = Infinity
    nl.warn("Boot Process", "Running in Dev Mode! All outputs will be logged!")


nl.info("Boot Process", "Initalizing!")

// Initalize all systems

nl.enableProgress()

