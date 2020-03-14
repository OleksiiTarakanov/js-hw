setInterval(function(){
    let d = new Date;
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
        
    if(s < 10){
        s = `0${s}`
    } 
    if(m < 10){
        m = `0${m}`
    } 
    if(h < 10){
        h = `0${h}`
    } 
    document.querySelector('.clock').innerHTML = `${h}:${m}:${s}`
},1000)


let ms = 0
let sec = 0
let min = 0
let hour = 0
let count = 0
document.querySelector('.num').innerHTML = `0${hour}:0${min}:0${sec}:00${ms}`
document.querySelector('.start').addEventListener('click',function(){
    count++
    console.log(count)
    let int = setInterval(function(){
        ms++      
       
        if(ms>99){
            sec++
            ms = 0
            
            if(sec>59){
                min++
                sec = 0
                
                if(min>59){
                    hour++
                    min = 0
                    
                }
            }
        }
        // if(ms<10){
        //     ms = `0${ms}`
        // }
        // if(sec<10){
        //     sec = `0${sec}`
        // }
        // if(min<10){
        //     min = `0${min}`
        // }
        // if(hour<10){
        //     hour = `0${hour}`
        // }
        document.querySelector('.num').innerHTML = `0${hour}:0${min}:${sec}:${ms}`
        
    },10)
    

    document.querySelector('.stop').addEventListener('click',function(){
        clearInterval(int)
    })
    
    document.querySelector('.loopBt').addEventListener('click',function(){
        let loop = document.querySelector('.num').innerHTML
        document.querySelector('.loop').innerHTML += `   ${loop}`
    })
    let ms1 = 0
    let sec1 = 0
    let min1 = 0
    let hour1 = 0
    document.querySelector('.reset').addEventListener('click',function(){
        ms = ms1
        sec = sec1
        min = min1
        hour = hour1
        document.querySelector('.num').innerHTML = `0${hour}:0${min}:0${sec}:00${ms}`
        
    })
    
})

let minsTimer = 0
let secTimer = 0
document.querySelector('.timerOn').innerHTML = '00:00'
document.querySelector('.minutes').innerHTML = `0${minsTimer}:0${secTimer}`
document.querySelector('.plus').addEventListener('click',function(){
    var resultMins = minsTimer++
    if(minsTimer<10){
    document.querySelector('.minutes').innerHTML = `0${minsTimer}:0${secTimer}`
} else {document.querySelector('.minutes').innerHTML = `${minsTimer}:0${secTimer}`}



document.querySelector('.minus').addEventListener('click',function(){
    if(minsTimer > 0){
        minsTimer--
    }
    
    if(minsTimer<10){
    document.querySelector('.minutes').innerHTML = `0${minsTimer}:0${secTimer}`
    } else {document.querySelector('.minutes').innerHTML = `${minsTimer}:0${secTimer}`}
})



let minsTimerOn = resultMins
let secTimerOn 
document.querySelector('.startT').addEventListener('click',function(){
    
    // if(secTimerOn<10){
    //     document.querySelector('.timerOn').innerHTML = `0${minsTimerOn}:0${secTimerOn}`
    // }
    secTimerOn = 60
    let timeInt = setInterval(function(){
        // minsTimerOn--
        
        secTimerOn--
        if(minsTimerOn<10 && secTimerOn<10){
            document.querySelector('.timerOn').innerHTML = `0${minsTimerOn}:0${secTimerOn}`
        } else {
            document.querySelector('.timerOn').innerHTML = `${minsTimerOn}:${secTimerOn}`
        }
        if(secTimerOn ==0 && minsTimerOn>0){
            minsTimerOn--
            secTimerOn = 60
            if(secTimerOn == 0 && minsTimerOn == 0){
                clearInterval(timeInt)
            }
        } 
        
        
    },1000)
    document.querySelector('.stopT').addEventListener('click',function(){
        clearInterval(timeInt)
    })

    document.querySelector('.resetT').addEventListener('click',function(){
        clearInterval(timeInt)
        document.querySelector('.timerOn').innerHTML = '00:00'
    })
    


})
})


