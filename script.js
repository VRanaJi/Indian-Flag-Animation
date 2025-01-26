document.addEventListener("DOMContentLoaded", () =>{
    let cursor = document.querySelector('.cursor')

    let textContent = "Jai_Hind Jai_Bharat"

    for(let i=0; i<textContent.length; i++){
        let span = document.createElement('span')
        span.classList.add('text')
        span.style.setProperty('--i', i+1)
        span.style.left = i * 10 + 'px'
        span.textContent = textContent[i]
        cursor.appendChild(span)
    }
    document.addEventListener("mousemove", e=>{
        gsap.to(".text", {
            x : e.clientX,
            y : e.clientY,
            stagger : 0.05
        })
    })
})