const abrir = document.getElementById("abrir")
const historia = document.getElementById("historia")
const finalBtn = document.getElementById("final")

const musica1 = document.getElementById("musica1")
const musica2 = document.getElementById("musica2")

abrir.onclick = () => {

    musica1.play()

    historia.scrollIntoView({
        behavior:"smooth"
    })

}

finalBtn.onclick = () => {

    document.getElementById("finalTela").style.display="block"

    musica1.pause()
    musica2.play()

    iniciarGalaxia()

}

/* GALAXIA */

function iniciarGalaxia(){

    const canvas = document.getElementById("galaxia")
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let estrelas = []

    for(let i=0;i<200;i++){

        estrelas.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            size:Math.random()*2
        })

    }

    function animar(){

        ctx.fillStyle="black"
        ctx.fillRect(0,0,canvas.width,canvas.height)

        ctx.fillStyle="white"

        estrelas.forEach(e=>{

            ctx.beginPath()
            ctx.arc(e.x,e.y,e.size,0,Math.PI*2)
            ctx.fill()

        })

        requestAnimationFrame(animar)

    }

    animar()

}