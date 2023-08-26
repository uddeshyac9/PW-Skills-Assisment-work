
const books = [
    { title: "Harry poter 2", author: "j. k. Rowling", year: 2005 },
    { title: "Harry poter 8", author: "j. k. Rowling", year: 2012 },
    { title: "Harry poter 5", author: "j. k. Rowling", year: 2008 },
]
function filterAndCapatalize(books) {
    const currentYear = new Date().getFullYear;
    const filteredBooks = books.filter(book => book.year > 2010);
    // return filteredBooks;
    const formattedBooks = filteredBooks.map((book) => {
        
     return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
     }
    });
    
 return formattedBooks;
}
console.log(filterAndCapatalize(books));

// output: [ { title: 'Harry poter 8', author: 'J. K. ROWLING', year: 2012 } ]