var ami = [17, 55, 65,34]; // array ar modde same type ar data onek gula rakha

var ami2 = {    //aita hosse object protita ase - ki and value
    age: 17,
    weight: 55,  // agula k bole property
    height: 65,
    color: 'blue'
}

// var myAge = ami2[age]; //first system
// var myAge = ami2['age']; //second system

var lookingFor = 'age';
var myAge = ami2[lookingFor]; //Third system
ami2['weight'] = 95; // .wegith, [weight], ['weight'] akhane thrid bracket dile ter age . dot dite hove na.
console.log(ami2);