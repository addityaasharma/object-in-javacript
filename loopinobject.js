// loop is object

let data={
    name:"Aditya",
    class:"12",
    sec:"8"
}

let text="";

for(let x in data){
    text=text+data[x];
    console.log(text);
}