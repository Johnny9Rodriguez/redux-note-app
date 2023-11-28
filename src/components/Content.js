import React from 'react'
import { NotePreview } from './NotePreview'
import { NoteEditor } from './NoteEditor'

export const Content = () => {
  return (
    <div className='content'>
        <NotePreview />
        <NoteEditor />
    </div>
  )
}
