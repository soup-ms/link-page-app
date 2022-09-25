window.addEventListener('DOMContentLoaded', () =>{
        
    VANTA.NET({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 20.00,
        maxDistance: 26.00
      })

    setTimeout(() => {
    const main = document.querySelector('main')
    main.style.opacity = 1
    main.style.filter = 'blur(0px)'
    }, 10) 
        
})


function discordMsg(){
    alert("Soup#4235")
}

function websiteMsg(){
    alert("Not Yet Available")
}

function snapchatMsg(){
    alert("michaelsousa.00")
}

var rand = Math.floor(Math.random() * 360);
document.getElementById('vanta').style.filter = `hue-rotate(${rand}deg)`;