import * as api from '@lp-labs/sentence-statistics';
import { sentenceStats } from '@lp-labs/sentence-statistics';
const stats = sentenceStats('First sentence. Short one!');
if (stats.sentences !== 2 || stats.averageWords !== 2) throw new Error('Unexpected counts');
// @ts-expect-error invalid argument must be rejected by declarations
api.sentenceStats({ text: 'not a string' });
