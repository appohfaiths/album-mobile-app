export function capitalise(lowercaseString: string): string {
  return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
}
