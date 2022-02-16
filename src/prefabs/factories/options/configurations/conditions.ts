import { Configuration } from '../../../types/options';

export const showIfTrue = (key: string): Configuration['condition'] => ({
  type: 'SHOW',
  option: key,
  comparator: 'EQ',
  value: true,
});

export const showIf = (
  key: string,
  comparator: 'EQ',
  value: string | boolean,
): Configuration['condition'] => ({
  type: 'SHOW',
  option: key,
  comparator,
  value,
});

export const hideIf = (
  key: string,
  comparator: 'EQ',
  value: string | boolean,
): Configuration['condition'] => ({
  type: 'HIDE',
  option: key,
  comparator,
  value,
});
