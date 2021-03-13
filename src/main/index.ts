import { app, BrowserWindow } from 'electron';
import { createDb } from './db';
import './dialog';
import './db/notesApi';
import indexPreload from '/@preload/index';
import indexHtmlUrl from '/@renderer/index.html';
import logoUrl from '/@static/logo.png';
import 'reflect-metadata';
import installExtension from 'electron-devtools-installer';
async function main() {
  app.whenReady().then(() => {
    try {
      createDb().then(async (conn) => {
        if (process.env.NODE_ENV === 'development') {
          const VUE_DEVTOOLS_BETA = 'ljjemllljcmogpfapbkkighbhhppjdbg';
          await installExtension(VUE_DEVTOOLS_BETA)
            .then(() => console.log('installed Vue Devtools'))
            .catch((err) => console.log(err));
        }
        createWindow();
      });
    } catch (error) {
      console.log(error);
    }
  });
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      preload: indexPreload,
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: logoUrl,
  });

  mainWindow.loadURL(indexHtmlUrl);
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
  return mainWindow;
}

// ensure app start as single instance
if (!app.requestSingleInstanceLock()) {
  app.quit();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

process.nextTick(main);
