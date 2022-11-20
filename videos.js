
let Videos = []
let Viesos_used = []

for (let index = 0; index < 5; index++) {
    Videos.push({'src':`fds${index}`,'ID':index});
}
console.log(Videos)
function Get_vidos(){
    GET_VIDOS = 0;
    while (GET_VIDOS == 0 || GET_VIDOS == 1 ) {
        Random_ummber = Math.floor(Math.random() *  Videos.length)
        console.log(Random_ummber)
        if(! Viesos_used.includes(Videos[Random_ummber])){
            Viesos_used.push(Videos[Random_ummber])
            break
        } if (Videos.length  == Viesos_used.length || Videos.length -1  == Viesos_used.length ) {
            break
            
        }
    }
    console.log(Viesos_used)
}

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowDown") {

        
        Get_vidos()
        Get_vidos()
        console.log(Viesos_used[Viesos_used.length - 1])
        let VIeDeos_Div = document.querySelector('.audio-mp3-qurran')
        let div = document.createElement('div')
        div.setAttribute('class','vide0Scroll')
        let vido = document.createElement('video')
        vido.setAttribute('id',`vidroRemo${Viesos_used[Viesos_used.length - 1]["ID"]}`)  
        vido.setAttribute('class','vidaoDsi')
        vido.setAttribute('controlsList','noplaybackrate nodownload')
        let sourse = document.createElement('sourse')
        // sourse.setAttribute('src',`/videos/fds${Viesos_used[Viesos_used.length - 1]['ID']}.mp4`)
        sourse.setAttribute('src',`https://i.top4top.io/m_2515ni0kj1.mp4`)
        sourse.setAttribute('type','video/mp4')
        vido.appendChild(sourse)
        div.appendChild(vido)
        VIeDeos_Div.appendChild(div)

     
        
    
    
    } else if(event.key == "ArrowUp"){
        console.log('YAMAN')
    }

}); window.onwheel = e => {
  if(e.deltaY >= 0){
    console.log('Scroll Down');
  } else {

    console.log('Scroll Up');
  }
}