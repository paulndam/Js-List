// Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

function List () {
  this.size = 0;
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

function append (element) {
  this.datastore[this.size++] = element;
}

function find (element) {
  for (var i = 0; i < this.datastore.length; i++) {
    if (this.datastore[i] === element) {
      return i;
    }
  }
  return -1;
}

function remove (element) {
  var locatedAt = this.find (element);

  if (locatedAt > -1) {
    this.datastore.splice (locatedAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length () {
  return this.size;
}

function toString () {
  return this.datastore;
}

//  function to insert an element into a list

function insert (element, after) {
  var insertX = this.find (after);

  if (insertX > -1) {
    this.datastore.splice (insertX + 1, 0, element);
    this.size++;

    return true;
  }
  return false;
}

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

var names = new List ();

names.append ('pet');
names.append ('mary');
names.append ('jon');
names.append ('joe');
names.append ('ralph');
names.insert ('oscar');
console.log (names.toString ());
names.remove ('jon');
console.log (names.toString ());
