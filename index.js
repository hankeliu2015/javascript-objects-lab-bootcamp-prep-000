var recipes = new Object ({water: '1'});

<<<<<<< HEAD
// update 

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value});

 }

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
=======
// function updateObjectWithKeyAndValue(object, key, value) {
//   return object.assign({}, {key: value});

// }

function updateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
>>>>>>> 48d80b464df04ea8b5ab7627ed9232324ebb4ced
  return object;
}


<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; // this is working by change to [].
=======

//destructive Update 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
>>>>>>> 48d80b464df04ea8b5ab7627ed9232324ebb4ced
  return object;
}

// non-destructive delete

<<<<<<< HEAD
// function deleteFromObjectByKey(object, key) {
//   delete object.key;
//   return object;
// }
=======
function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
>>>>>>> 48d80b464df04ea8b5ab7627ed9232324ebb4ced

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, {object:key}); // Object need to be upper case
  delete newObj.key;
  return newObj;
}

// destructive delete

function destructivelyDeleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  delete object[key];   //this worked by change from . notatiaon to []. 
=======
  Object.assign({}, {object, key});
>>>>>>> 48d80b464df04ea8b5ab7627ed9232324ebb4ced
  return object;
  
}