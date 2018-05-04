const electron = require("electron");
const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
    win = new BrowserWindow({width: 1280, height: 720, resizable: false, maximizable: false});
    win.loadURL("file:///" + __dirname + "/app/index.html")
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})
app.on("activate", () => {
    if (win === null) createWindow();
})

