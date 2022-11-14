console.log("Register program initiated..."); 

let petSalon = {
    //properties
    title: "All the Fluffs!",
        catch_phrase:"Albuquerque's Premier Spa for our favorite furry friends",
        address:{
            street: "232 Navajo Street",
            city: "Albuquerque",
            state: "New Mexico",
            zip: "87106"    
        },
        pets:[]
    }

    //insert title info
    document.getElementById("title").innerHTML=`<h1>${petSalon.title}</h1>`;
    document.getElementById("catch-phrase").innerHTML=`
    <p>
        <h3>${petSalon.catch_phrase}</h3>
    </p>
    `;

    //creat the constructor
    //<-------------parameters  (local variables)--------------->
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed =breed;
    this.service =service;
    this.owner =owner;
    this.phone = phone;
}


//create core pets
let pet1 = new Pet("Mr. Tinkles", 2, "Male", "Doberman", "Nail Trimming",  "James Dobson", "111-111-1111");
let pet2 = new Pet("Rickshaw", 6, "Female", "Pyrynes", "Vaccines",  "Julio Garz", "222-222-2222");
let pet3 = new Pet("Rez", 9, "Male", "Egyptian", "Grooming",  "Lev Eldemir", "333-333-3333");




   //create the pets
//let pet1=new Pet("Scooby", 60, "Male", "Dane", "Grooming", "Shaggy", "555-555-5555");
//let pet2=new Pet("Scoobz", 68, "Female", "Chihuahua", "Wash", "Gary K", "666-666-6666");
//let pet3=new Pet("Fluffs", 80, "Male", "Doberman", "Trim", "Stephen Fry", "333-333-3333");

//register function
//getting the inpiuts
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("numAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("numContact");

//validate the new pets info
function isValid(aPet){
    let valid=true;
    inputName.classList.remove("error")
    inputService.classList.remove("error")
    inputPhone.classList.remove("error")
    //check the conditions
    if(aPet.name==""){
        valid=false;
        inputName.classList.add("error");
    }
    if(aPet.service==""){
        valid=false;
        inputService.classList.add("error");
    }
    if(aPet.phone==""){
        valid=false;
        inputPhone.classList.add("error");
    }

    return valid;
    
}


function register(){
    //getting the values and creating the job.
    let thePet = new Pet (inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value);
//Validating thePet
if(isValid(thePet)==true){

//push obj into the array
petSalon.pets.push(thePet);

//display the pets
displayCards();

//display the petSalon.pets array and refresh form 
console.log(petSalon.pets);
clearForm();
}
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value ="";
    inputBreed.value ="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value ="";
}

 //intial funciton to push original pets and create publish them as cars upon opening the page
function init(){
    console.log("init");
    petSalon.pets.push (pet1,pet2,pet3);
    displayCards();
}
window.onload=init;

















































































































































































































































































//Ignore below this line.  This was me starting to separate the properties so that I could eventually insert them into a table  
//    for(let i=0; i<petSalon.pets.length; i++) {
//        for(let i=0; i<petSalon.pets.length; i++) {
// } else for(let i=0; i<petSalon.pets.length; i++) {
//         if (petSalon.pets[i].name ==thePet.name){
//     console.log ("They are the same"); return false;
////// }else petSalon.pets.push(thePet);
 //console.log (petSalon.pets[0].name);
//console.log (thePet.name);

//display the petSalon.pets
/////for(let i=0; i<petSalon.pets.length; i++) {
/////console.log(petSalon.pets[i].name);
/////console.log(petSalon.pets[i].age);
