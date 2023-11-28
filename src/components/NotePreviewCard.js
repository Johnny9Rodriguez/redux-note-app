import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, select } from '../slices/noteSlice';

export const NotePreviewCard = ({ id, title, content }) => {
  const selectedNote = useSelector((state) => state.notes.selectedNote);
  const dispatch = useDispatch();

  const contentPreview = (content) => {
    if (content === '') {
      return 'Empty...';
    } else if (content.length > 24) {
      return content.slice(0, 24) + '...'
    } else {
      return content;
    }
  }

  const handleRemove = (e) => {
    dispatch(remove({ id: id }));
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`note-preview-card ${selectedNote.id === id ? 'selected-note' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title !== '' ? title : 'New note'}</h3>
      <p>{contentPreview(content)
      }</p>
      <button
        className={`delete-note-btn ${isHovered || selectedNote.id === id ? 'delete-btn-visible' : ''}`}
        onClick={handleRemove}
      >
        <Icon icon="ph:trash" />
      </button>
      <button
        className='note-preview-select-btn'
        onClick={() => dispatch(select({ id: id, title: title, content: content }))}
      />
    </div>
  )
}
