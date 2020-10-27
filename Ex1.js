function List () {
  this.listSize = 0;
  this.pos = 0;
  this.datastore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.previous = previous;
  this.next = next;
  this.hasPrevious = hasPrevious;
  this.hasNext = hasNext;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

//  function adding new element to list

function append (element) {
  this.datastore[this.listSize++] = element;
}

//  function to remove and element from list. first we first have to find that element that we want to remove by making a function for that, then remove that elemnt

function find (element) {
  for (var i = 0; i < this.datastore.length; i++) {
    if (this.datastore[i] == element) {
      return i;
    }
  }
  // if element not fount then return negative 1.
  return -1;
}

// function to remove

function remove (element) {
  var locatedAt = this.find (element);

  if (locatedAt > -1) {
    this.datastore.splice (locatedAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

//  function to return the number of elements in a list

function length () {
  return this.listSize;
}

function toString () {
  return this.datastore;
}

// going to insert and element in our current list, first we use our find function to see where we want to insert the element by finding the position, if we do find it then we splice the list addind the new insert element and increasing the list size, if it is successful it will return tru but if not the function will return false.

function insert (element, after) {
  var inserting = this.find (after);

  if (inserting > -1) {
    this.datastore.splice (inserting + 1, 0, element);
    this.listSize++;
    return true;
  }
  return false;
}

// function to clear our list, the delete will clear our current array, then reset a new array to an empty one and as well reset and resize the list size

function clear () {
  delete this.datastore;
  this.datastore = [];
  this.listSize = this.pos = 0;
}

// function to check if a given value is in a list

function contains (element) {
  for (var i = 0; i < this.datastore.length; i++) {
    if (this.datastore[i] === element) {
      return true;
    }
  }
  return false;
}

// this function will allow us to move to a specified or specific element in our list, using the moveTo() method and then get or retrieve the element where the index is currently residing using the getElement()

function moveTo (position) {
  this.pos = position;
}

function getElement () {
  return this.datastore[this.pos];
}

//  previous function

function previous () {
  return this.datastore[--this.pos];
}

function next () {
  return this.datastore[this.pos++];
}

function hasNext () {
  if (this.pos > this.listSize - 1) {
    return false;
  } else {
    return true;
  }
}

function front () {
  this.pos = 0;
}

function hasPrevious () {
  if (this.pos <= 0) {
    return false;
  } else {
    return true;
  }
}

function end () {
  this.pos = this.listSize - 1;
}

function currPos () {
  return pos;
}

var clubNames = new List ();

clubNames.append ('barca');
clubNames.append ('man-u');
clubNames.append ('liverpool');
clubNames.append ('wolves');
console.log (clubNames.toString ());
clubNames.remove ('wolves');
console.log (clubNames.toString ());
console.log (clubNames.toString ());
clubNames.front ();
console.log (clubNames.getElement ());

console.log (clubNames.next ());
console.log (clubNames.previous ());

var movies = read ('films.txt').split ('\n');

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
