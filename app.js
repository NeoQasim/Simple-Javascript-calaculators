let date  = document.getElementById('date')
let day  = document.getElementById('day')
let month = document.getElementById('month') 
let year  = document.getElementById('year')

let actualDate = new Date()
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



date.innerHTML=actualDate.getDate()
day.innerHTML=weekdays[actualDate.getDay()]
month.innerHTML=months[actualDate.getMonth()]
year.innerHTML=actualDate.getFullYear()
