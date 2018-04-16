<<<<<<< HEAD
var recipes={};
function updateObjectWithKeyAndValue(object,key,value){
return Object.assign({},object,{[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}
function deleteFromObjectByKey(object,key){
var newObject=Object.assign({},object);
delete newObject[key];
return newObject;
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
=======
var object=recipes;
>>>>>>> 10146bf60c64cbf81b022cb1c37e1a785245c3fa
