import { notesApi } from '../../preload/index';

const notes = (window as any).notes as typeof notesApi;

export const useNotes = () => notes;
