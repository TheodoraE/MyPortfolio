let body = document.body

//////// Déclarations de variables
let logoET = document.getElementById('logoET');

let plus = document.getElementById('plus');
let nav = document.querySelector('.navRight');

    // Slides
let lienSend = document.getElementsByClassName("sendTo");
let homeContent1 = document.getElementById('homeContent1');
let homeContent2 = document.getElementById('homeContent2');
let homeContent3 = document.getElementById('homeContent3');
let homeContent4 = document.getElementById('homeContent4');

let btnWork = document.getElementById('btnWork');
let btnAbout = document.getElementById('btnAbout');
let btn2Work = document.querySelector('.btnWork');
let btn2About = document.querySelector('.btnAbout');

    // Pages - Sections
let sectionHome = document.getElementById('sectionHome');
let sectionWork = document.getElementById('sectionWork');
let sectionAbout = document.getElementById('sectionAbout');

let navRight = document.querySelector('#navRight');
let moins = document.querySelector('#moins');
let naviRight = document.querySelectorAll('.naviRight');

let retour = document.querySelector('.retour');

// Animation sur Logo Header
logoET.addEventListener('mouseover', function(){
    logoET.style.transform = "rotateY(180deg)"
});
logoET.addEventListener('mouseout', function(){
    logoET.style.transform = "initial"
});

// Transparence Navbar
// let myNav = document.getElementById('mynav');
// let compt = 0
// let temp;

// window.addEventListener('scroll', function () { 
//     temp = document.body.scrollTop += 1;
//     compt += temp;
//     console.log(compt)
//     // "use strict";
//     if (compt >= 50 ) {
//         myNav.style.zIndex = 1;
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// });

// Affichage de la Navbar coin supérieur droit
plus.addEventListener('click', function(){
    sectionHome.style.display = "none";
    sectionWork.style.display = "none";            
    sectionAbout.style.display = "none";
    navRight.style.display = "block";
    plus.style.display = "none";
    moins.style.display = "inline-block";
});
moins.addEventListener('click', function(){
    navRight.style.display = "none";
    sectionHome.style.display = "block";
    sectionWork.style.display = "none";            
    sectionAbout.style.display = "none";
    moins.style.display = "none";
    plus.style.display = "inline-block";
});

for (let i = 0; i < naviRight.length; i++) {
    naviRight[i].addEventListener('click', function(){
        navRight.style.display = "none";
        moins.style.display = "none";
        plus.style.display = "inline-block";   
        switch(i){
            case 0:
                sectionHome.style.display = "block";     
                homeContent1.style.display = "block";
                sectionWork.style.display = "none";            
                sectionAbout.style.display = "none";
                homeContent2.style.display = "none";
                homeContent3.style.display = "none";
                homeContent4.style.display = "none";
                break;
            case 1:
                sectionHome.style.display = "none";     
                homeContent1.style.display = "none";
                sectionWork.style.display = "block";
                sectionAbout.style.display = "none";
                homeContent2.style.display = "none";
                homeContent3.style.display = "none";
                homeContent4.style.display = "none";
                break;
            case 2:
                sectionHome.style.display = "none";     
                homeContent1.style.display = "none";
                sectionWork.style.display = "none";
                sectionAbout.style.display = "block";
                homeContent2.style.display = "none";
                homeContent3.style.display = "none";
                homeContent4.style.display = "none";
                break;
            case 3:
                sectionHome.style.display = "block";     
                homeContent1.style.display = "none";
                sectionWork.style.display = "none";
                sectionAbout.style.display = "none";
                homeContent2.style.display = "none";
                homeContent3.style.display = "none";
                homeContent4.style.display = "block";
                break;
        };
    });
};

// Affichage des slides via les ancres
for (let i = 0; i < lienSend.length; i++) {
    lienSend[i].addEventListener('click', function(){
        switch(i){
            case 0:
                lienSend[0].style.color = "#1D6F72";
                lienSend[1].style.color = "#fff";
                lienSend[2].style.color = "#fff";
                lienSend[3].style.color = "#fff";
                homeContent1.style.display = "block";
                homeContent2.style.display = "none";
                homeContent3.style.display = "none";
                homeContent4.style.display = "none";
                break;
            case 1:
                lienSend[0].style.color = "#fff";
                lienSend[1].style.color = "#1D6F72";
                lienSend[2].style.color = "#fff";
                lienSend[3].style.color = "#fff";
                homeContent1.style.display = "none";
                homeContent2.style.display = "block";
                homeContent3.style.display = "none";
                homeContent4.style.display = "none";
                break;
            case 2:
                lienSend[0].style.color = "#fff";
                lienSend[1].style.color = "#fff";
                lienSend[2].style.color = "#1D6F72";
                lienSend[3].style.color = "#fff";
                homeContent1.style.display = "none";
                homeContent2.style.display = "none";
                homeContent3.style.display = "block";
                homeContent4.style.display = "none";
                break;
            case 3:
                lienSend[0].style.color = "#fff";
                lienSend[1].style.color = "#fff";
                lienSend[2].style.color = "#fff";
                lienSend[3].style.color = "#1D6F72";
                homeContent1.style.display = "none";
                homeContent2.style.display = "none";
                homeContent3.style.display = "none";
                homeContent4.style.display = "block";
                break;
        }
    })
}

// Affichage des pages via les boutons
btnWork.addEventListener('click', function(){
    sectionHome.style.display = "none";
    sectionAbout.style.display = "none";
    sectionWork.style.display = "block";
});
btnAbout.addEventListener('click', function(){
    sectionHome.style.display = "none";
    sectionWork.style.display = "none";
    sectionAbout.style.display = "block";
});
btn2Work.addEventListener('click', function(){
    sectionHome.style.display = "none";
    sectionAbout.style.display = "none";
    sectionWork.style.display = "block";
});
btn2About.addEventListener('click', function(){
    sectionHome.style.display = "none";
    sectionWork.style.display = "none";
    sectionAbout.style.display = "block";
});

// Retour à l'acceuil
retour.addEventListener('click', function(){
    sectionHome.style.display = "block";
    sectionAbout.style.display = "none";
    sectionWork.style.display = "none";
    myNav.style.backgroundColor = "initial"
});



// let sectionHome = document.getElementById("sectionHome");

// sectionHome.addEventListener('scroll', function(){
//     // console.log(e)
//     console.log('scrolled')
// })