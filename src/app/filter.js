export function filterByTypedWord(arrayBooks, typedWord) {
  return arrayBooks.filter((book) =>
    book.title.toLowerCase().includes(typedWord.toLowerCase())
  );
}
