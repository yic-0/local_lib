function getTotalBooksCount(books) {
   return books.length;
}


//----------------------------




function getTotalAccountsCount(accounts) {
   return accounts.length;
}



//----------------------------



//It returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.

function getBooksBorrowedCount(books) {
let booksCheckedOut = books.filter(
  (book) =>  book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}



//----------------------------
/*
It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

Even if there is a tie, the array should only contain no more than five objects.

*/

function getMostCommonGenres(books) {
   let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((bookA, bookB) => bookB.count - bookA.count)
  .slice(0, 5);
}




//----------------------------


//It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.


function getMostPopularBooks(books) {
   return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5);
}





//----------------------------






function getMostPopularAuthors(books, authors) {

   let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
  
  
  
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
