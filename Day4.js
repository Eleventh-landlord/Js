// Task 1
function task1 (){
let movie = {
  title : "BMF",
  director: "50 Cent",
  releaseYear: 2024,
  rating: "10/10",

  getSummary() {
    return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
  }
};

console.log(movie.getSummary());

movie.isWatched = true;
console.log(`${movie.title} was directed by ${movie.director} and was released in ${movie.releaseYear} and is rated ${movie.rating} and have i watched? ${movie.isWatched ? "yes" : "no"}.`);

//challenge
movies = ["BMF","Suits","The Chi","Wu tang"];
ratings = [9.5,7,8,9];

function displayTopMovies(movies, ratings) {
  console.log(" Movies with rating ≥ 8 ⭐");
  for (let i = 0; i < movies.length; i++) {
    if (ratings[i] >= 8) {
      console.log(`${movies[i]} (Rating: ${ratings[i]})`);
    }
  }
}
displayTopMovies(movies, ratings); 
};
//Task2
//Create an object cartItem with properties: name,price, quantity
function task2() {
let cartItem = {
  name : "Mars in Retrograde",
  price : 50000,
  quantity : 2,

  //Add a method `getTotal()` that returns the total cost of that item (`price × quantity`)
  getTotal(){
    return this.price * this.quantity;
  }
};
console.log("Total: ",cartItem.getTotal());

let shoppingCart = [
  { name: "Laptop", price: 350000, quantity: 1 },
  { name: "Headphones", price: 25000, quantity: 2 },
  { name: "Mouse", price: 15000, quantity: 1 }
];

shoppingCart.forEach(item => {
  item.getTotal = function () {
    return this.price * this.quantity;
  };
});

function getCartTotal(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.getTotal();
  }
  return total;
}

console.log("Total Cart Value: ₦" + getCartTotal(shoppingCart));
};

//Task3
//Create an object `member` with properties: `name`, `membershipType` (`basic`, `premium`), and `borrowedBooks` (array) 
function task3(){
let member = {
  name : "Adeleke",
  membershipType : "basic, premium",
  borrowedBooks : [],

  borrowedBook(book){
    this.borrowedBooks.push(book);
    return `${book}`
  },

  getBorrowedCount(){
    return `${this.borrowedBooks.length}`;
  },

  getMembershipInfo(){
    return this.membershipType;
  }

};
console.log(member.borrowedBook("BMF"));
console.log(member.getBorrowedCount());
console.log(member.getMembershipInfo());
}
