let Videos = []

let Viesos_used = []

var  Id_v = 1;
var running_now = false;
var running_now_id = 1;

for (let index = 2; index < 27; index++) {
    Videos.push({'src':`V${index}`,'ID':index});
}

console.log(Videos)



function Get_vidos(){


    while(true){
        Random_ummber = Math.floor(Math.random() *  Videos.length)
        if(! Viesos_used.includes(Videos[Random_ummber]))
         {
            Viesos_used.push(Videos[Random_ummber])
            break

        }

    }
    return Videos[Random_ummber]
}



function Go_to_new_Viedeos(id){
    location.href = `#vidroRemo${id}`
    console.log(`#vidroRemo${id}`)

}
function create_a_viedeos(){
    var Vedios = Get_vidos()
    console.log(Vedios['ID'])
    let VIeDeos_Div = document.querySelector('.audio-mp3-qurran')
    let div = document.createElement('div')
    div.setAttribute('class','vide0Scroll')
    let vido = document.createElement('video')
    vido.setAttribute('id',`vidroRemo${Id_v + 1}`)  
    vido.setAttribute('class','vidaoDsi')
    vido.setAttribute('controlsList','noplaybackrate nodownload')
    vido.setAttribute('autoplay','autoplay')
    let sourse = document.createElement('sourse')
    sourse.setAttribute('src',`/videos/V${Vedios['ID']}.mp4`)
    sourse.setAttribute('type','videos/mp4')
    vido.src = `/videos/V${Vedios['ID']}.mp4`
    vido.setAttribute("controls","controls") 
    console.log('YAMAN')
    vido.appendChild(sourse)
    div.appendChild(vido)
    VIeDeos_Div.appendChild(div)
    setTimeout(function(){
        last_vedeos = document.querySelector(`#vidroRemo${Id_v}`).pause()
        Go_to_new_Viedeos(Id_v + 1)
        Id_v =  Id_v + 1
        
    
    },
    500
    ) 
    

}


document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowDown") {
        if (running_now || running_now_id != Id_v ) {

            Go_to_new_Viedeos(running_now_id +1)
            
            running_now = false
            running_now_id = running_now_id +1
            that_vedeos = document.querySelector(`#vidroRemo${running_now_id}`) 
            that_vedeos.play()
            that_vedeos.currentTime = 0


            
        } else{
            create_a_viedeos() 
            running_now_id = running_now_id +1

        }

        
    
    
    } else if(event.key == "ArrowUp"){
        if (running_now_id != 1) {

            setTimeout(function(){
                last_vedeos = document.querySelector(`#vidroRemo${running_now_id}`).pause()
                running_now_id = running_now_id -1
                that_vedeos = document.querySelector(`#vidroRemo${running_now_id}`)
                that_vedeos.play()
                that_vedeos.currentTime = 0
                Go_to_new_Viedeos(running_now_id)
                running_now = true
                
            
            },
            500
            ) 
            
        }

    }

}); window.onwheel = e => {
  if(e.deltaY >= 133){
    create_a_viedeos()
    setTimeout(function(){
        console.log('slepp')
        Go_to_new_Viedeos(Id_v + 1)
        Id_v =  Id_v + 1
    },
    500)



  } else {

    console.log('Scroll Up');
  }
}

// 

