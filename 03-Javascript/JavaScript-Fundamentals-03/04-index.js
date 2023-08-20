const student = {
    name: "Uddeshya",
    age: 23,
    course: "Full Stack Web Devlopment 2.0",
    grade: "A+"
};


function hasProperty(obj, propName) {
 
    return propName in obj;
}; 

let propertyName = 'course'

if (hasProperty(student, propertyName)) {
    console.log(`The object has the property '${propertyName}'`);
} else {
    console.log(`The object does not have the property '${propertyName}'`);
}