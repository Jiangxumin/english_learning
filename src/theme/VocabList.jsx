import React from 'react';
import vocabData from '@site/src/data/vocab';

/**
 * Renders all vocabulary annotation cards for the given book.
 * Usage in MDX: <VocabList book="book_01" />
 *
 * Place this at the bottom of the book page.
 */
export default function VocabList({ book }) {
  const entries = vocabData[book];
  if (!entries || entries.length === 0) return null;

  return (
    <div className="vocab-list">
      <h2 className="vocab-list-title">Vocabulary Notes</h2>
      {entries.map((e) => (
        <div key={e.word} className="vocab-card" id={`vocab-${e.word}`}>
          <div className="vocab-card-header">
            <span className="vocab-card-word">{e.word}</span>
            {e.pos && <span className="vocab-card-pos">{e.pos}</span>}
            {e.phonetic && <span className="vocab-card-phonetic">{e.phonetic}</span>}
          </div>

          <div className="vocab-card-brief">{e.brief}</div>

          {e.detail && (
            <div className="vocab-card-detail">{e.detail}</div>
          )}

          {e.examples?.length > 0 && (
            <div className="vocab-card-section">
              <span className="vocab-card-label">Examples</span>
              <ul>
                {e.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          )}

          {e.synonyms?.length > 0 && (
            <div className="vocab-card-section">
              <span className="vocab-card-label">Synonyms</span>
              <ul className="vocab-synonyms">
                {e.synonyms.map((s, i) => (
                  <li key={i}>
                    <strong>{s.word}</strong> — {s.note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
