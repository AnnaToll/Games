

/* 
let typeText = (id, string) => {
    let typeString = '';

    let loopDelay = (counter) => {
        setTimeout(function(){ 
        alert("Hello"); 
    }, 300 * i);
    }
    for (let i = 0; i < string.length; i++) {
        typeString += string.charAt(i);

        console.log(typeString);

        document.getElementById(id).innerHTML = typeString; 
    }
    // return typeString;
} */

/* let typeText = (id, string) => {
    let typeString = '';

    let loopDelay = (i) => {
        setTimeout(function(){ 
            typeString += string.charAt(i);
            console.log(typeString);
            document.getElementById(id).innerHTML = typeString; 
        }, 130 * i);
    }
    
    for (let i = 0; i < string.length; i++) {
        loopDelay(i);
    }
} */


/* 
let typeText = (id, string) => {

} */

let typeString = '';
let string = 'Ready to play, young one?';

for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
        typeString += string.charAt(i);
        console.log(typeString);
        document.getElementById('p-main').innerHTML = typeString; 
    }, 130 * i)
}





// document.getElementById("p-main").innerHTML = typeText("Ready to play, litte Rabbit?_"); 
// typeText('p-main', 'Ready to play, young one?'); 