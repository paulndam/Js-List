// var movies = read ('films.txt').split ('\n');

// function to read data from file

function createArray (file) {
  var arr = read (file).split ('\n');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim ();
  }

  return arr;
}

// now taking the movies array and storing it contents in a list

var movieList = new List ();

for (var i = 0; i < movies.length; i++) {
  movieList.append (movies[i]);
}

//  function to display the movies

function display (list) {
  for (list.front (); list.hasNext (); ) {
    var listItem = list.next ();

    if (listItem instanceof Customer) {
      console.log (listItem.name + ' ' + listItem.movie);
    } else {
      console.log (listItem);
    }
  }
}

//  creating list to store the customers who check out at the kiosk

// constructor function for a customer object

function Customer (name, movie) {
  this.name = name;
  this.movie = movie;
}

//  function that wil let customer to check out a movie, function takes two arguments, which is the name of customer and the movie they wanna watch.
// if movie is available, the function will remove that movie from the movie list and then add it onto the customer's list
// we are gonna use the list class function contains() to take care of this task.

function checkoutMovie (name, movie, customerList, movieList) {
  if (movieList.contains (movie)) {
    var m = new Customer (name, movie);
    customerList.append (m);
    movieList.append (movie);
  } else {
    return movie + ' not available for now';
  }
}

var movies = createArray ('films.txt');
var movieList = new List ();
var thecustomer = new List ();

for (var i = 0; i < movies.length; i++) {
  movieList.append (movies[i]);
}

console.log ('Movies available : \n');
display (movieList);
console.log ('\nEnter your Name');

var name = readline ();
console.log ('what movie you wanna watch');
var movie = readline ();

checkoutMovie (name, movie, movieList, thecustomer);
console.log ('\nCustomer Rentals: \n');
