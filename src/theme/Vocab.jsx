import React, { useState } from 'react';

export default function Vocab({ word, phonetic, definition, audioUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="vocab-word"
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') setOpen(!open); }}
    >
      {word}
      {open && (
        <span className="vocab-tooltip">
          {phonetic && <span className="vocab-phonetic">{phonetic}</span>}
          <span className="vocab-definition">{definition}</span>
          {audioUrl && <audio src={audioUrl} controls />}
        </span>
      )}
    </span>
  );
}
