const {app, BrowserWindow,globalShortcut} = require('electron');

const { NODE_ENV } = process.env;

const isProd = NODE_ENV === "production";
const isDev = NODE_ENV === "devlopment";

const Index_Url = isDev ? "http://localhost:8080/" : "src/render/dist/index.html";

// const Screenshots = require('electron-screenshots').default;
// const takePhoto = require('./screenshot');
// console.log(takePhoto);
const createWindow = ()=>{
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    });
    win.loadURL(Index_Url);
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
});

app.on('ready',()=>{
    // const screenshots = new Screenshots()
    // globalShortcut.register('ctrl+alt+c', () =>{ 
    //     console.log("=======================")
    //     // screenshots.startCapture()
    //     takePhoto();
    // })
    // // 点击确定按钮回调事件
    // screenshots.on('ok', (e, { viewer }) => {
    //   console.log('capture', viewer)
    // })
    // // 点击取消按钮回调事件
    // screenshots.on('cancel', () => {
    //   console.log('capture', 'cancel1')
    // })
    // screenshots.on('cancel', e => {
    //   // 执行了preventDefault
    //   // 点击取消不会关闭截图窗口
    //   e.preventDefault()
    //   console.log('capture', 'cancel2')
    // })
    // // 点击保存按钮回调事件
    // screenshots.on('save', (e, { viewer }) => {
    //   console.log('capture', viewer)
    // })
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
});
