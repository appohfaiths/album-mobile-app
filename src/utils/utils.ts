import {CapitaliseProps} from 'types/utils';

export function Capitalise({lowercaseString}: CapitaliseProps) {
  return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
}
