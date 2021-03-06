import { app, BrowserWindow } from 'electron';
import { createDb } from './db';
import './dialog';
import './db/notesApi';
import indexPreload from '/@preload/index';
import indexHtmlUrl from '/@renderer/index.html';
import logoUrl from '/@static/logo.png';
import 'reflect-metadata';
async function main() {
  app.whenReady().then(() => {
    try {
      createDb().then((conn) => {
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
    height: 600,
    width: 800,
    webPreferences: {
      preload: indexPreload,
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: logoUrl,
  });

  mainWindow.loadURL(indexHtmlUrl);
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
