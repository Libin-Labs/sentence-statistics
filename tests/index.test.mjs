import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts two simple sentences', () => {
  assert.deepEqual(api.sentenceStats('First sentence. Short one!'), {
    sentences: 2,
    words: 4,
    averageWords: 2,
  });
});
test('treats punctuation runs as one ending', () => {
  assert.equal(api.sentenceStats('Really?! Yes...').sentences, 2);
});
test('counts apostrophe-connected word', () => {
  assert.equal(api.sentenceStats("don't stop").words, 2);
});
test('uses one sentence for unpunctuated words', () => {
  assert.equal(api.sentenceStats('plain words only').sentences, 1);
});
test('returns zeros for empty text', () => {
  assert.deepEqual(api.sentenceStats('...'), { sentences: 0, words: 0, averageWords: 0 });
});
test('rejects non-string input', () => {
  assert.throws(() => api.sentenceStats(null), TypeError);
});
