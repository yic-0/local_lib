function findAuthorById(authors, id) {
  let returnAuthor = authors.find((author) => author.id === id);
  return returnAuthor;
}


//------------------

function findBookById(books, id) {
  let returnBooks = books.find((book) => book.id === id);
  return returnBooks; 
}




//---------------------



function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true)
 )
  let booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false)
 )
 let resultArray = [[...booksBorrowed], [...booksReturned]];
 return resultArray;
}
   


//----------------

//come back to this....

//It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.


function getBorrowersForBook(book, accounts) {
  
  /*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/
  
   return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
  
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
