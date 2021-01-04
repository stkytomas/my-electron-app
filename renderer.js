const { ipcRenderer } = require('electron')

ipcRenderer.invoke("submit", window)