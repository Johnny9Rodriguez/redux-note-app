import React from 'react'
import { NotePreviewCard } from './NotePreviewCard'

export const NotePreview = () => {
    return (
        <div className='note-preview'>
            <NotePreviewCard title='Shopping List' note='Kartoffeln, Paprika, Olivenöl' />
            <NotePreviewCard title='Shopping List' note='Kartoffeln, Paprika, Olivenöl' />
            <button className='add-note-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
            </button>
        </div>
    )
}
