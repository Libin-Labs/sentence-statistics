export interface SentenceStats {
  readonly sentences: number;
  readonly words: number;
  readonly averageWords: number;
}
export function sentenceStats(text: string): SentenceStats {
  if (typeof text !== 'string' || text.length > 1000000)
    throw new TypeError('Expected bounded text');
  const words = text.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) ?? [];
  const endings = text.match(/[.!?]+(?:["'’”’)\]]*)?(?=\s|$)/gu) ?? [];
  const sentences = words.length ? Math.max(1, endings.length) : 0;
  return { sentences, words: words.length, averageWords: sentences ? words.length / sentences : 0 };
}
