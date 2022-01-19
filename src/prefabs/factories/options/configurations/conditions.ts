import { Configration } from '../../../types/options';

export const showIfTrue = (key: string): Configration['condition'] => ({
  type: 'SHOW',
  option: key,
  comparator: 'EQ',
  value: true,
});

export const showIf = (
  key: string,
  comparator: 'EQ',
  value: string | boolean,
): Configration['condition'] => ({
  type: 'SHOW',
  option: key,
  comparator,
  value,
});

export const hideIf = (
  key: string,
  comparator: 'EQ',
  value: string | boolean,
): Configration['condition'] => ({
  type: 'HIDE',
  option: key,
  comparator,
  value,
});
