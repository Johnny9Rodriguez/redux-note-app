import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        noteList: [],
        selectedNote: {},
        idCount: 0,
        noteListIndex: 0,
    },
    reducers: {
        add: (state) => {
            const newNote = {
                id: state.idCount,
                title: '',
                content: '',
            };

            state.noteList.push(newNote);
            state.idCount += 1;
            state.selectedNote = newNote;
            state.noteListIndex = state.noteList.length - 1;
        },
        remove: (state, action) => {
            state.noteList = state.noteList.filter(note => note.id !== action.payload.id);

            if (action.payload.id === state.selectedNote.id) {
                if (state.noteList.length === 0) {
                    state.selectedNote = {};
                } else {
                    state.selectedNote = state.noteList[0];
                }
            }
        },
        select: (state, action) => {
            const { id, title, content } = action.payload;

            state.selectedNote = { id, title, content };

            state.noteListIndex = state.noteList.findIndex(note => note.id === id);
        },
        updateTitle: (state, action) => {
            const { title } = action.payload;

            state.selectedNote = { ...state.selectedNote, title };
            state.noteList[state.noteListIndex].title = title;
        },
        updateContent: (state, action) => {
            const { content } = action.payload;

            state.selectedNote = { ...state.selectedNote, content };
            state.noteList[state.noteListIndex].content = content;
        }
    }
})

export const { add, remove, select, updateTitle, updateContent } = noteSlice.actions;

export default noteSlice.reducer;