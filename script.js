

let Superheros = [
    {
        id:1,
        name:"Superman",
        age:"56",
        planet:"krypton",
        group:"Justice"
    },
    {
        id:2,
        name:"Thor",
        age:"1000",
        planet:"Asgard",
        group:"Marvel"
    },
    {
        id:3,
        name:"Ironman",
        age:"42",
        planet:"Earth",
        group:"Marvel"
    },
    {
        id:4,
        name:"Jack Sparrow",
        age:"23",
        planet:"Black Pearl",
        group:"Pirates"
    }
]
const jsonObj = JSON.stringify(Superheros);

localStorage.setItem("jsonObj",jsonObj);



// console.log(Superheros[3].name)

//console.log(Superheros);

function createRow(hero)

{
    document.getElementById("data").innerHTML="";

    hero.forEach((ele,index)=>{

        //console.log(ele,index);
    
        let tr = document.createElement('tr');
    
        let td1 = document.createElement('td');
        
        let td2 = document.createElement('td');
         
        let td3 = document.createElement('td');
        
        let td4 = document.createElement('td');
       
        let td5 = document.createElement('td');
        
        td1.append(index+1);
        td2.append(ele.name);
        td3.append(ele.age);
        td4.append(ele.planet);
        td5.append(ele.group);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
    
        // console.log(tr);
        document.getElementById("data").append(tr)
        
    })
}
createRow(Superheros)

// Filter the Name
function searchName(sname){
    let arrayFilter = Superheros.filter((ele,i)=>{
        return ele.name.toUpperCase().includes(sname.toUpperCase())
    })
    createRow(arrayFilter);
    console.log(arrayFilter)
}

// Adding Hero
function addHero(){

    console.log("added.......")

    const id = document.getElementById("id").value;
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
    const planet = document.getElementById("planet").value;
	const group = document.getElementById("group").value;

    let obj = {id,name,age,planet,group}
    Superheros.push(obj)
console.log(Superheros);
appendRow(obj)
   
}
const appendRow = (obj) =>{
    let tr = document.createElement('tr');

    let _id = document.createElement('td')
    let _name = document.createElement('td')
    let _age = document.createElement('td')
    let _planet = document.createElement('td')
    let _group = document.createElement('td')

    let idText = document.createTextNode(obj.id)
    let nameText = document.createTextNode(obj.name)
    let ageText = document.createTextNode(obj.age)
    let planetText = document.createTextNode(obj.planet)
    let groupText = document.createTextNode(obj.group)

    _id.appendChild(idText)
    _name.appendChild(nameText)
    _age.appendChild(ageText)
    _planet.appendChild(planetText)
    _group.appendChild(groupText)

    tr.appendChild(_id)
    tr.appendChild(_name)
    tr.appendChild(_age)
    tr.appendChild(_planet)
    tr.appendChild(_group)
   
    document.querySelector('#data').appendChild(tr)
}


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let form = document.querySelector('.form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addHero();
})
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


