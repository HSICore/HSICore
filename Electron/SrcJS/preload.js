var electron = require("electron")

var bcrypt = require("bcryptjs")

var fs = requrie("fs")

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })

electron.contextBridge.exposeInMainWorld("plapi",
{
    fs = {
        writeFile = function(text, name) {
            fs.writeFileSync(`./Data/${name}`)
        },
        fileExists = function(name) {
            return fs.existsSync(`./Data/${name}`)
        },
        readFile = function(name) {
            if (!fs.existsSync(`./Data/${name}`)) {
                throw new ReferenceError("Cannot load a nonexistent file.")
            } else {
                return fs.readFileSync(`./Data/${name}`)
            }
        }
    },
    bcrypt = {
        compareEncryptedString = function(string, hash) {

            if (string == null || string == undefined) {
                throw new SyntaxError("Cannot compare an null or undefined string to a hash.")
            }

            if (hash == null || hash == undefined) {
                throw new SyntaxError("Cannot compare an null or undefined hash to a string.")
            }

            return bcrypt.compareSync(string, hash)
        }
    }
})