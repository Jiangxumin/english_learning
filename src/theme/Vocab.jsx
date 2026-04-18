import React, { useState } from 'react';
import vocabData from '@site/src/data/vocab';

/**
 * Inline vocabulary annotation.
 * Usage in MDX: <Vocab word="below" />
 *
 * Data is looked up from src/data/vocab.js — no inline props needed.
 * - Click → brief tooltip (phonetic + short definition)
 * - "Details →" link scrolls to the full annotation card at the bottom of the page.
 */
export default function Vocab({ word }) {
  const [open, setOpen] = useState(false);

  // Derive the book slug from the current URL: /book_01 → "book_01"
  let book = '';
  if (typeof window !== 'undefined') {
    const m = window.location.pathname.match(/\/(book_\d+)/);
    if (m) book = m[1];
  }

  const entries = vocabData[book] || [];
  const entry = entries.find((e) => e.word === word);

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
        <span className="vocab-tooltip" onClick={(e) => e.stopPropagation()}>
          <button
            className="vocab-tooltip-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
          {entry?.phonetic && (
            <span className="vocab-phonetic">{entry.phonetic}</span>
          )}
          <span className="vocab-definition">
            {entry?.brief ?? word}
          </span>
          {entry && (
            <a
              className="vocab-detail-link"
              href={`#vocab-${word}`}
              onClick={() => setOpen(false)}
            >
              Details &rarr;
            </a>
          )}
        </span>
      )}
    </span>
  );
}
