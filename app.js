const hour = document.querySelector('.hour');
const mins = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const days = document.querySelector('.day');


function dayTime() {
    let today = new Date();
console.log(today)
    let dayHour= today.getHours();
   let daySeconds= today.getSeconds();
     let dayMins= today.getMinutes();
     let dayDay = today.getDay();
    
    hour.innerHTML = getFormated(dayHour);
    seconds.innerHTML = getFormated(daySeconds);
    mins.innerHTML = getFormated(dayMins);
     days.innerHTML = getFormated(dayDay);

    function getFormated(item) {
        if (item < 10) {
            return '0' + item;
        } else {
            return item
        }
    }
    
}



dayTime()

setInterval(dayTime, 1000)



