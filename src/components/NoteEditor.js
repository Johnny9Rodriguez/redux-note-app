import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateTitle, updateContent } from '../slices/noteSlice';

export const NoteEditor = () => {
    const selectedNote = useSelector((state) => state.notes.selectedNote);
    const dispatch = useDispatch();

    const handleTitleUpdate = (e) => {
        dispatch(updateTitle({ title: e.target.value }));
    }

    const handleContentUpdate = (e) => {
        dispatch(updateContent({ content: e.target.value }));
    }

    const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0;
    };

    if (!isEmptyObject(selectedNote)) {
        return (
            <div className='note-editor'>
                <textarea
                    type='text'
                    spellCheck='false'
                    className='title-input'
                    placeholder='Enter a title...'
                    maxLength={64}
                    value={selectedNote.title}
                    onChange={handleTitleUpdate}
                />
                <hr />
                <textarea
                    type='text'
                    spellCheck='false'
                    className='note-input'
                    placeholder='Enter a note ...'
                    value={selectedNote.content}
                    onChange={handleContentUpdate}
                />
            </div>
        )
    } else {
        return (
            <div className='note-editor-placeholder'>
                Create a note...
            </div>
        )
    }


}
