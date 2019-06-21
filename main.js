const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')


let win;

function createWindow () {

  win = new BrowserWindow({width: 600, height: 400})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true /*,
    icon: path.join(__dirname, 'minicheckers_64x64.jpg') */
  }));

// Open the DevTools.
// win.webContents.openDevTools()

    win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
