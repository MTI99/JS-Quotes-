

var qoutes = [ 
    `<div class="col-12 py-4 bg-light rounded-4 shadow ">
    <p class="fs-2">“So many books, so little time.”</p>
    <span class="fs-5"> ― Frank Zappa</span>
    </div>`, 
    `<div class="col-12 py-4 bg-light rounded-4 shadow">
    <p class="fs-2">“A room without books is like a body without a soul.”</p>
    <span class="fs-5"> ― Marcus Tullius Cicero</span>
    </div>`,
    `<div class="col-12 py-4 bg-light rounded-4 shadow">
    <p class="fs-2">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p>
    <span class="fs-5"> ― Bernard M. Baruch</span>
    </div>`,
    `<div class="col-12 py-4 bg-light rounded-4 shadow">
    <p class="fs-2">“Be the change that you wish to see in the world.”</p>
    <span class="fs-5"> ― Mahatma Gandhi</span>
    </div>`,
    `<div class="col-12 py-4 bg-light rounded-4 shadow">
    <p class="fs-2">“In three words I can sum up everything I've learned about life: it goes on.”</p>
    <span class="fs-5"> ― Robert Frost</span>
    </div>`,
    `<div class="col-12 py-4 bg-light rounded-4 shadow">
    <p class="fs-2">“To live is the rarest thing in the world. Most people exist, that is all.”</p>
    <span class="fs-5"> ― Oscar Wilde</span>
    </div>`
]



// By For Loop

// function generateQoutes() { 
//     var cartona = ``; 

//     for ( var i = 0  ; i < 1 ; i++ ) { 
//         cartona += qoutes[Math.floor(Math.random() * qoutes.length)]
        
//     }

//     document.getElementById("qoutes").innerHTML = cartona
// }




// By Do..While

var x;
var y; 
var displayQoute = [ ]; 
function generateQoutes() { 
    if (displayQoute.length == qoutes.length) { 
        displayQoute= []
    }

    do { 
        x = Math.floor(Math.random() * qoutes.length)
    } while (x == y || displayQoute.includes(x));

    y == x 
    displayQoute.push(x);
    console.log(displayQoute.length);
    document.getElementById("qoutes").innerHTML = qoutes[x]

}













