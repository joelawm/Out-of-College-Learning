// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { remote } = require('electron')
const { dialog, BrowserWindow } = remote

setTimeout( () => {

  // dialog.showMessageBox({
  //   message: 'Dialog from renderer',
  //   buttons: ['One', 'Two']
  // }).then( res => {
  //   console.log(res)
  // })

  // let win = new BrowserWindow({
  //   x: 50, y: 50, width: 300, height: 250
  // })
  //
  // win.loadFile('index.html')
  //
  // setTimeout( remote.app.quit, 2000)

  let mainWindow = remote.getCurrentWindow()
  mainWindow.maximize()

}, 2000)
