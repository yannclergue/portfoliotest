document.querySelector(".burger").addEventListener("click", menu)

function menu(){
    document.querySelector("nav").classList.toggle("viens")
}
document.querySelector(".burger2").addEventListener("click", menus)

function menus(){
    document.querySelector("nav").classList.remove("viens")
}


document.querySelector("#ecofood").addEventListener("click", eco)

function eco(){
    document.querySelector(".ecofood").classList.toggle("salut")
    document.querySelector(".LTJV").classList.remove("salut")
    document.querySelector(".nutry").classList.remove("salut")
     document.querySelector(".youtube").classList.remove("salut")
}
document.querySelector("#LTJV").addEventListener("click", jeu)

function jeu(){
    document.querySelector(".LTJV").classList.toggle("salut")
    document.querySelector(".ecofood").classList.remove("salut")
    document.querySelector(".nutry").classList.remove("salut")
     document.querySelector(".youtube").classList.remove("salut")
}
document.querySelector("#nutry").addEventListener("click", nutry)

function nutry(){
    document.querySelector(".LTJV").classList.remove("salut")
    document.querySelector(".ecofood").classList.remove("salut")
    document.querySelector(".nutry").classList.toggle("salut")
     document.querySelector(".youtube").classList.remove("salut")
}
document.querySelector("#YT").addEventListener("click", youtube)

function youtube(){
    document.querySelector(".LTJV").classList.remove("salut")
    document.querySelector(".ecofood").classList.remove("salut")
    document.querySelector(".nutry").classList.remove("salut")
    document.querySelector(".youtube").classList.toggle("salut")
}


document.querySelectorAll("h3").forEach(lien => {
    lien.addEventListener("click", function(){
        document.querySelector("nav").classList.toggle("viens")
    })
})

document.querySelector("h4").addEventListener("click", nuit)

function nuit(){
    document.querySelector("body").classList.toggle("nuit")
    document.querySelector("nav").classList.toggle("viens")
}
