import React from 'react'

export const NotePreviewCard = ({ title, note }) => {
  return (
    <button className='note-preview-card'>
        <h3>{title}</h3>
        <p>{note}</p>
    </button>
  )
}
