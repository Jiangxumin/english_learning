import React, { useState } from 'react';
import vocabData from '@site/src/data/vocab';

/**
 * Inline vocabulary annotation.
 * Usage in MDX: <Vocab word="below" />
 *
 * Data is looked up from src/data/vocab.js — no inline props needed.
 * - Click → compact tooltip (phonetic + brief definition)
 * - "Details →" expands to show full info (detail, examples, synonyms)
 * - Expanded mode has "Jump to list ↕" to scroll to bottom card list
 * - Collapse button returns to compact mode
 */
export default function Vocab({ word }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Derive the book slug from the current URL: /book_01 → "book_01"
  let book = '';
  if (typeof window !== 'undefined') {
    const m = window.location.pathname.match(/\/(book_\d+)/);
    if (m) book = m[1];
  }

  const entries = vocabData[book] || [];
  const entry = entries.find((e) => e.word === word);

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpand = (e) => {
    e.preventDefault();
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleJumpToList = (e) => {
    e.preventDefault();
    setOpen(false);
    setExpanded(false);
    const el = document.getElementById(`vocab-${word}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <span
      className="vocab-word"
      onClick={() => { setOpen(!open); setExpanded(false); }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') { setOpen(!open); setExpanded(false); } }}
    >
      {word}
      {open && !expanded && (
        <span className="vocab-tooltip" onClick={(e) => e.stopPropagation()}>
          <button className="vocab-tooltip-close" onClick={handleClose} aria-label="Close">&times;</button>
          {entry?.phonetic && (
            <span className="vocab-phonetic">{entry.phonetic}</span>
          )}
          <span className="vocab-definition">{entry?.brief ?? word}</span>
          {entry && (
            <a className="vocab-detail-link" href="#" onClick={handleExpand}>
              Details &rarr;
            </a>
          )}
        </span>
      )}
      {open && expanded && entry && (
        <span className="vocab-tooltip vocab-tooltip-expanded" onClick={(e) => e.stopPropagation()}>
          <button className="vocab-tooltip-close" onClick={handleClose} aria-label="Close">&times;</button>
          <div className="vocab-expanded-header">
            <span className="vocab-expanded-word">{word}</span>
            {entry.phonetic && <span className="vocab-phonetic">{entry.phonetic}</span>}
            <span className="vocab-card-pos">{entry.pos}</span>
          </div>
          <div className="vocab-expanded-brief">{entry.brief}</div>
          <div className="vocab-expanded-body">
            {entry.detail && (
              <p className="vocab-expanded-detail">{entry.detail}</p>
            )}
            {entry.examples?.length > 0 && (
              <div className="vocab-expanded-section">
                <div className="vocab-card-label">Examples</div>
                <ul>
                  {entry.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                </ul>
              </div>
            )}
            {entry.synonyms?.length > 0 && (
              <div className="vocab-expanded-section">
                <div className="vocab-card-label">Synonyms</div>
                <ul className="vocab-synonyms">
                  {entry.synonyms.map((s, i) => (
                    <li key={i}><strong>{s.word}</strong> — {s.note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="vocab-expanded-footer">
            <button className="vocab-expanded-btn" onClick={handleCollapse} title="Collapse">
              &#x21BA; Collapse
            </button>
            <a className="vocab-expanded-jump" href={`#vocab-${word}`} onClick={handleJumpToList}>
              Jump to list &#x2193;
            </a>
          </div>
        </span>
      )}
    </span>
  );
}
