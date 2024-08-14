

let nav = document.getElementById('nav');
// navigation bar works
function show() {
    let menu = document.getElementById("menu");

    if (menu.getAttribute('class') === 'fa-solid fa-bars') {
        menu.setAttribute("class", "fa-solid fa-square-xmark");
        nav.style.display = "flex";
        gsap.from(".nav li", {
            display: "flex",
            duration: 4,
            color:"blue",
            opacity: 0,
            rotate: 10,
            delay:0.3,
            stagger: 0.1
        });

        // Use setTimeout instead of setInterval to run only once
        setTimeout(() => {
            menu.setAttribute('class', 'fa-solid fa-bars');
            nav.style.display = "none";
        }, 7000);
    } else {
        menu.setAttribute('class', 'fa-solid fa-bars');
        nav.style.display = "none";
    }
}



// name card works

let key = document.getElementById("key");

const keyArra = [
    'I am Jay Kumar',
    'I am Web Developer',
    'I am Developer',
    'I am Java Developer',
    'I am Node.JS Developer'
];

let index = 0;

function changeKey() {
    key.innerHTML = keyArra[index];
    index = (index + 1) % keyArra.length; // Loop back to the start of the array
}

setInterval(changeKey, 2000);

gsap.from('#key',{
    color:'white',
    x:30,
    y:-30,
    scale:1.01,
    opacity:0,
    padding: 12,
    borderRadius: 20,
    duration:2,
    stagger:true,
    yoyo:true,
    repeat:-1
})
