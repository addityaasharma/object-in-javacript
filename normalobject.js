// normal object

let student = {
    name:"Aditya Sharma",
    class:"B.Sc IInd Year",
    job_role:'Web Developer',
    cars:{
        car1:"Alto 800",
        car2:"Wagon R"
    }
}
student.cars.bike="Luna XL 100";
student.home = "Power House";  // to add the more object
delete student.home;  // to delete the created obejct

console.log(student.cars.bike);
console.log(student.cars['bike']); // alternatvie method to console object