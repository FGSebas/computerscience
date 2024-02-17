const heading1 =document.getElementById("text");
let name= `Alexandra is sailing
              the world`;  
                

heading1.textContent = `Hi ${name}`;
Get_fischar(name);
Get_lastchar(name);
Get_lower(name);
Get_upper(name);
Get_Capitalized(name);

function Get_fischar(text){ 

console.log(text.substring(0,1));
}

function Get_lastchar(text){

    console.log(text.at(-1));
}

function Get_lower(text){

console.log(text.toLowerCase())
}

function Get_upper(text){

    console.log(text.toUpperCase())
}

function Get_Capitalized(text){

    console .log(text.at(0).toUpperCase()+text.substring(1));
}

const input_ = document.getElementById("i1")


const e1 = document.getElementById('Q1')

input_.addEventListener('keyup', () =>{
    let value_ = e1.value;

    e1.textContent = Get_lower(value_);

});