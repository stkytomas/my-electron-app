const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

let results = document.querySelector("results");

app.addListener("submit", function(formValidation) {
    let waist = document.querySelector("input[name=waist]");
    let circumference = waist.value;
    let waistC = Number(circumference);

    let length = document.querySelector("input[name=length]");
    let skirt = length.value;
    let skirtL = Number(skirt);

    let seam = document.querySelector("input[name=seam]");
    let allowance = seam.value;
    let seamA = Number(allowance);

    if (waist.value === "" || length.value === "" || seam.value === "") {
        alert("All fields are required!");
    } else if (isNaN(waistC) === false || isNaN(skirtL) === false || isNaN(seamA) === false) {
        alert("Invalid input. Please enter numbers only!");
    } else {
        results.style.visibility = "visible";
    }

})