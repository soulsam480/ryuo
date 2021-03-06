import { ipcMain } from 'electron';
import { Notes } from './entities/notes';

ipcMain.handle('notes:getAll', (event, ...args) => {
  return Notes.find();
});

ipcMain.handle('notes:getById', async (e, args: { id: string }) => {
  return await Notes.find({ id: args.id });
});

ipcMain.handle(
  'notes:create',
  async (e, args: { data: string; meta: string }) => {
    const note = Notes.create({ ...args });
    return await Notes.save(note);
  },
);

ipcMain.handle(
  'notes:update',
  async (e, args: { data: string; meta: string; id: string }) => {
    return await Notes.update(
      {
        id: args.id,
      },
      {
        data: args.data,
        meta: args.meta,
      },
    );
  },
);

ipcMain.handle('notes:delete', async (e, args: { id: string }) => {
  return await Notes.delete({ id: args.id });
});
