        
    //const heading = document.querySelectorAll("button");
    //console.log(button)

    // for (const button in buttons) { 
        //b.addEventListener('click', changeText);

//        }

const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText)

//const button2 = document.querySelector("button2");

//const button2 = document.getElementById("button2");
//button2.addEventListener('click', changeIten)

const heading = document.querySelector("h1")

    function changeText() {
            //alert('test successful!');

        const head = prompt("tell me a secret");
        heading.textContent = head;

        }

document.addEventListener("DOMContentLoaded", function() {
    var button2 = document.getElementById('button2');
    button2.addEventListener('click', function() {
        button2.style.backgroundColor = 'blue';
    });
});

      //  const x = 'Hello!';
        //console.log(x)

        //const button = document.querySelector("button")
        //button.addEventListener('click', runFunction);

        // function runFunction () {
            // console.log("test");
           // const name = prompt("Please enter a name");
            //button.textContent = 'Player 1: $(name)';

       // }