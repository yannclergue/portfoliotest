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

document.querySelector(".soleil").addEventListener("click", nuit)

function nuit(){
    document.querySelector("body").classList.toggle("nuit");
    document.querySelector(".lune").classList.toggle("salut");
    this.classList.toggle("aurevoir");
}

document.querySelector(".lune").addEventListener("click", jour)

function jour(){
    document.querySelector("body").classList.toggle("nuit");
    document.querySelector(".soleil").classList.toggle("aurevoir");
    this.classList.toggle("salut");
}


document.querySelector(".soleil2").addEventListener("click", nuit2)

function nuit2(){
    this.classList.toggle("aurevoir");
    document.querySelector(".invisible1").classList.toggle("aurevoir")
    document.querySelector(".invisible2").classList.toggle("salut")
    document.querySelector("body").classList.toggle("nuit");
    document.querySelector(".lune2").classList.toggle("salut");

}

document.querySelector(".lune2").addEventListener("click", jour2)

function jour2(){
    this.classList.toggle("salut");
    document.querySelector("body").classList.toggle("nuit");
    document.querySelector(".soleil2").classList.toggle("aurevoir");
    document.querySelector(".invisible1").classList.toggle("aurevoir");
    document.querySelector(".invisible2").classList.toggle("salut");

}


let slideSites = document.querySelector(".sites")

window.addEventListener("scroll", () => {
    let {scrollTop, clientHeight} = 
    document.documentElement;

    let TopElementToTopViewport = slideSites.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + TopElementToTopViewport).toFixed() - clientHeight * 0.60) {
        slideSites.classList.add('coucou')
    }

})