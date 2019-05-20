console.log('Render process')

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path')
const url = require('url')

const newWindowBtn = document.getElementById('helpBtn');
newWindowBtn.addEventListener('click', function (event) {
let helpWin = new BrowserWindow({ width: 700, 
                                   height: 500 ,
                                   frame: false
                                 });
    helpWin.loadURL(url.format({
    pathname: path.join(__dirname, 'help.html'),
    protocol: 'file:',
    slashes: true
  }));
});