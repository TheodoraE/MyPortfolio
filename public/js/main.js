// let body = document.body

// Affichage des slides via les ancres
let lienSend = document.getElementsByClassName("sendTo");
let homeContent1 = document.getElementById('homeContent1');
let homeContent2 = document.getElementById('homeContent2');
let homeContent3 = document.getElementById('homeContent3');
let homeContent4 = document.getElementById('homeContent4');
console.log(lienSend)

for (let i = 0; i < lienSend.length; i++) {
    lienSend[i].addEventListener('click', function(){
        switch(i){
            case 0:
                lienSend[0].style.color = "#343a40";
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
                lienSend[1].style.color = "#2F4F4F";
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
                lienSend[2].style.color = "#ae4a02";
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


// let sectionHome = document.getElementById("sectionHome");

// sectionHome.addEventListener('scroll', function(){
//     // console.log(e)
//     console.log('scrolled')
// })

// Affichage des pages via les boutons
let btnWork = document.getElementById('btnWork');
let btnAbout = document.getElementById('btnAbout');

let sectionHome = document.getElementById('sectionHome');
let sectionWork = document.getElementById('sectionWork');
let sectionAbout = document.getElementById('sectionAbout');

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