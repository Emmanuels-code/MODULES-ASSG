import { calendar } from './calendar.mjs';
import { dateElements } from './date.mjs';

// Using imported elements
console.log(calendar.innerHTML);
console.log(dateElements.month.innerHTML);
console.log(dateElements.day.innerHTML);
console.log(dateElements.numberofday.innerHTML);
console.log(dateElements.year.innerHTML);

const date = new Date()
//const month = date.getMonth()
//const Time = date.getTime()

dateElements.month.innerHTML = date.toLocaleDateString("en", {
    month: "long", 
});
//TimeEl.innerHTML = time.tolocalTimeString("en", {
 //   time: "long", 
//}) 


dateElements.day.innerHTML = date.toLocaleDateString("en", {
    weekday: "long",
});

dateElements.numberofday.innerHTML = date.getDate();
dateElements.year.innerHTML = date.getFullYear();
//TimeEl.innerHTML = date.getTime();