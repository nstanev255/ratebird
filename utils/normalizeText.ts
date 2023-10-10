function normalizeText(text: string, symbols: number): string {
  if (!text) {
    return '';
  }
  let formatted = text;

  if (text.length > symbols) {
    formatted = `${text.slice(0, symbols)}...`;
  }

  return formatted;
}

export default normalizeText;
