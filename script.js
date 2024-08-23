const monthEl = document.getElementById('month')
const dayNameEl = document.getElementById('day')
const numberofdayEl = document.getElementById('numberofday')
const yearEl =  document.getElementById('year')
//const TimeEl = document.getElementById('time')

const date = new Date()
const month = date.getMonth()
//const Time = date.getTime()

monthEl.innerHTML = date.toLocaleDateString("en", {
    month: "long", 
})
//TimeEl.innerHTML = time.tolocalTimeString("en", {
 //   time: "long", 
//}) 


dayNameEl.innerHTML = date.toLocaleDateString("en", {
    weekday: "long"
});

numberofdayEl.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
//TimeEl.innerHTML = date.getTime();