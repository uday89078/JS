function getBookDetails(title, author, year) {
    return {
        title: title,
        author: author,
        year: year
    };
}

let book = getBookDetails("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log("Book Title:", book.title);
console.log("Author:", book.author);
console.log("Published Year:", book.year);
