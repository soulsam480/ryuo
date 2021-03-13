import { shell, clipboard, ipcRenderer, contextBridge, Dialog } from 'electron';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Notes } from '../main/db/entities/notes';
const api = {
  shell,
  clipboard,
  ipcRenderer,
  dialog: {
    showCertificateTrustDialog(...options: any[]) {
      return ipcRenderer.invoke(
        'dialog:showCertificateTrustDialog',
        ...options,
      );
    },
    showErrorBox(...options: any[]) {
      return ipcRenderer.invoke('dialog:showErrorBox', ...options);
    },
    showMessageBox(...options: any[]) {
      return ipcRenderer.invoke('dialog:showMessageBox', ...options);
    },
    showOpenDialog(...options: any[]) {
      return ipcRenderer.invoke('dialog:showOpenDialog', ...options);
    },
    showSaveDialog(...options: any[]) {
      return ipcRenderer.invoke('dialog:showSaveDialog', ...options);
    },
  } as Pick<
    Dialog,
    | 'showCertificateTrustDialog'
    | 'showErrorBox'
    | 'showMessageBox'
    | 'showOpenDialog'
    | 'showSaveDialog'
  >,
};
export const notesApi = {
  getAllnotes(): Promise<Notes[]> {
    return ipcRenderer.invoke('notes:getAll');
  },
  createNote(args: {
    data: string;
    meta: Record<string, any>;
  }): Promise<Notes> {
    return ipcRenderer.invoke('notes:create', { ...args });
  },
  getNoteById(args: { id: string }): Promise<Notes[]> {
    return ipcRenderer.invoke('notes:getById', { ...args });
  },
  updateNote(args: {
    id: string;
    data: string;
    meta: Record<string, any>;
  }): Promise<UpdateResult> {
    return ipcRenderer.invoke('notes:update', { ...args });
  },
  deleteNote(args: { id: string }): Promise<DeleteResult> {
    return ipcRenderer.invoke('motes:delete', { ...args });
  },
};
try {
  contextBridge.exposeInMainWorld('electron', api);
  contextBridge.exposeInMainWorld('notes', notesApi);
} catch {
  (window as any).electron = api;
  (window as any).notes = notesApi;
}
