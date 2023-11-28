import React from 'react'

export const NoteEditor = () => {
    return (
        <div className='note-editor'>
            <textarea 
                type='text' 
                spellCheck='false' 
                className='title-input' 
                placeholder='Enter a title...'
                maxLength={24}
            />
            <hr />
            <textarea 
                type='text' 
                spellCheck='false' 
                className='note-input' 
                placeholder='Enter a note ...'
            />
        </div>
    )
}
