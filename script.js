// =======================================
// SELECT ELEMENTS
// =======================================

const seal = document.getElementById("seal");

const envelope = document.querySelector(".envelope");

const landing = document.getElementById("landing");

const letterSection = document.getElementById("letterSection");

const popup = document.getElementById("miniCardPopup");

const openCard = document.getElementById("openCard");

const flowers = document.getElementById("flowers");

const firstLetter = document.getElementById("firstLetter");

const secondLetter = document.getElementById("secondLetter");

const typing = document.getElementById("typing");

const nextBtn = document.getElementById("next");


// =======================================
// OPEN ENVELOPE
// =======================================

seal.addEventListener("click", () => {

    // Remove seal
    seal.classList.add("remove");

    // Wait a little
    setTimeout(() => {

        // Open envelope
        envelope.classList.add("open");

    },500);

    // Wait for animation
    setTimeout(() => {

        landing.style.opacity="0";

        landing.style.pointerEvents="none";

    },2200);

    // Show paper
    setTimeout(() => {

        letterSection.classList.add("show");

    },2600);

});


// =======================================
// OPEN MINI CARD
// =======================================

openCard.addEventListener("click",()=>{

    popup.style.display="none";

});


// =======================================
// PREVENT CLICKING BEFORE FLOWERS
// =======================================

firstLetter.style.display="none";

secondLetter.style.display="none";


// =======================================
// FLOWER STATE
// =======================================

let flowersHidden=false;


// =======================================
// READY FOR PART 3B
// =======================================
// =======================================
// PART 3B
// FLOWERS + TYPEWRITER
// =======================================


// Text that will be typed
const message = `I lovee you so much ❤️`;

let index = 0;


// =======================================
// SHOW FLOWERS AFTER CARD CLOSES
// =======================================

openCard.addEventListener("click", () => {

    popup.style.display = "none";

    flowers.style.display = "flex";

});


// =======================================
// HIDE FLOWERS WHEN USER CLICKS
// =======================================

document.addEventListener("click", (e) => {

    // Ignore clicks before flowers are shown
    if (popup.style.display !== "none") return;

    // Prevent multiple runs
    if (flowersHidden) return;

    // Don't hide when clicking buttons
    if (
        e.target.id === "next" ||
        e.target.id === "openCard"
    ) return;

    flowersHidden = true;

    flowers.classList.add("hide");

    setTimeout(() => {

        flowers.style.display = "none";

        firstLetter.style.display = "block";

        typeWriter();

    }, 800);

});


// =======================================
// TYPEWRITER EFFECT
// =======================================

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,70);

    }

}


// =======================================
// OPTIONAL CURSOR BLINK
// =======================================

setInterval(()=>{

    if(firstLetter.style.display==="block"){

        typing.classList.toggle("cursor");

    }

},500);


// =======================================
// READY FOR PART 3C
// =======================================
// =======================================
// PART 3C
// NEXT BUTTON + APOLOGY LETTER
// =======================================


// Next button click

nextBtn.addEventListener("click", () => {

    firstLetter.style.animation = "fadeOut .8s forwards";

    setTimeout(() => {

        firstLetter.style.display = "none";

        secondLetter.style.display = "block";

        secondLetter.style.animation = "fadeIn 1s ease";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHeartRain();

    },800);

});




// =======================================
// HEART RAIN
// =======================================

function createHeartRain(){

    const heart = document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="fallHeart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}




// Create hearts continuously

setInterval(()=>{

    if(secondLetter.style.display==="block"){

        createHeartRain();

    }

},300);




// =======================================
// FINAL MESSAGE
// =======================================

const ending=document.createElement("div");

ending.id="endingMessage";

ending.innerHTML=`

<h1>Thank You ❤️</h1>

<p>

No matter how many fights we have,

I'll always choose you.

<br><br>

I Love You Forever,

Prachi ❤️

</p>

`;

document.body.appendChild(ending);




// =======================================
// FORGIVE BUTTON
// =======================================

const forgiveButton=document.createElement("button");

forgiveButton.innerHTML="❤️ Forgive Me ❤️";

forgiveButton.id="forgive";

secondLetter.appendChild(forgiveButton);




// =======================================
// FORGIVE BUTTON EVENT
// =======================================

forgiveButton.addEventListener("click",()=>{

    secondLetter.style.animation="fadeOut 1s forwards";

    setTimeout(()=>{

        secondLetter.style.display="none";

        ending.style.display="flex";

        ending.style.animation="fadeIn 1.5s";

        massiveHeartExplosion();

    },1000);

});




// =======================================
// MASSIVE HEART EXPLOSION
// =======================================

function massiveHeartExplosion(){

    for(let i=0;i<150;i++){

        setTimeout(()=>{

            const h=document.createElement("div");

            h.innerHTML=Math.random()>0.5?"❤️":"🌸";

            h.className="fallHeart";

            h.style.left=Math.random()*100+"vw";

            h.style.fontSize=(15+Math.random()*30)+"px";

            document.body.appendChild(h);

            setTimeout(()=>{

                h.remove();

            },6000);

        },i*40);

    }

}




// =======================================
// CSS CREATED USING JAVASCRIPT
// =======================================

const style=document.createElement("style");

style.innerHTML=`

.fallHeart{

position:fixed;

top:-50px;

pointer-events:none;

animation:fallHeart 6s linear forwards;

z-index:999;

}

@keyframes fallHeart{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:1;

}

100%{

transform:

translateY(120vh)

rotate(360deg);

opacity:0;

}

}



#endingMessage{

display:none;

position:fixed;

inset:0;

background:

linear-gradient(

180deg,

#141E30,

#090A18

);

justify-content:center;

align-items:center;

flex-direction:column;

text-align:center;

color:white;

z-index:9999;

font-family:'Poppins';

}



#endingMessage h1{

font-size:65px;

font-family:'Great Vibes';

margin-bottom:25px;

color:#ffd5ea;

}



#endingMessage p{

font-size:24px;

line-height:2;

}



#forgive{

margin-top:35px;

padding:15px 40px;

border:none;

border-radius:50px;

cursor:pointer;

font-size:18px;

background:

linear-gradient(

135deg,

#ff5e95,

#ff8db5

);

color:white;

transition:.3s;

}



#forgive:hover{

transform:scale(1.08);

}



@keyframes fadeOut{

from{

opacity:1;

}

to{

opacity:0;

}

}

`;

document.head.appendChild(style);




// =======================================
// END
// =======================================