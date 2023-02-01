function findAccountById(accounts, id) {

  
  //- An array of account objects.
  //- A string ID of a single account object.
  
  //use find function to match id
let findID = accounts.find((account) => account.id === id);
return findID;
}

//------------------


function sortAccountsByLastName(accounts) { 
accounts.sort((accountA, accountB) => 
               accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 );
 return accounts;
  
}



//------------------




// function getTotalNumberOfBorrows(account, books) {
// const accountID = account.id;
// let total = 0;
//   books.forEach(book => book.borrows.forEach(borrow => accountID === borrow.id && total++));
//   return total;
// }


function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  return books.reduce((totalBorrowed, { borrows }) => {
    if (borrows.some((record) => record.id === accountId)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}

//------------------



function getBooksPossessedByAccount(account, books, authors) {

  //It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
  
  /*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
  
  //obtain array of books possessed
  let booksPossessed=[];
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  })
  
  //match to author
  booksPossessed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  
  return booksPossessed;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
