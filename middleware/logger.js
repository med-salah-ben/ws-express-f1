const res = require("express/lib/response");

let date =new Date();

let currentHour = date.getHours();
console.log(currentHour);

// let currentDay = date.getDate();
// console.log("date",currentDay);
let currentDay = date.getDay();
console.log("day",currentDay);

function logger(req,res,next){
    if( currentHour> 8 && currentHour < 17 && currentDay > 0 && currentDay<6){
        next()
    }else{
        res.send('<h1> Sorry we are closed! </h1>')
    }
}

module.exports = logger;