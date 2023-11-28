import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../slices/noteSlice'
import { Icon } from '@iconify/react';
import { NotePreviewCard } from './NotePreviewCard'

export const NotePreview = () => {
    const noteList = useSelector((state) => state.notes.noteList);
    const dispatch = useDispatch();

    return (
        <div className='note-preview'>
            {noteList.map((note) => (
                <NotePreviewCard key={note.id} id={note.id} title={note.title} content={note.content} />
            ))}
            <button
                className='add-note-btn'
                onClick={() => dispatch(add())}
            >
                <Icon icon="material-symbols:add" />
            </button>
        </div>
    )
}
