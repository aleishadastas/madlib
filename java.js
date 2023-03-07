// let myArray = [1, 2, 3, 4, 5, 6, 7]
// myArray[myArray.length -1] index starts at 0, length starts at 1
// myArray[1] = "turkey"
// myArray.push('I love margaritas')
// console.log = (myArray)

let nounArray = ["computer", "foot", "turkey", "puppy", "stable", "flower", "ugly face"]
let nounSpan = document.getElementById ('noun')
let Counter = 0
let adjectiveArray = ["insane", "ugly", "shadowy", "pretty", "catastrophic", "evil", "sparkly"]
let adjective = document.getElementById ('adjective')
let verbArray = ["killed", "imagined", "attracted", "destroyed", "hammered", "japed", "attacked"]
let verb = document.getElementById ('verb')
let eventArray = ["spawned out of nowhere", "made the president fall down", "fell off the earth", "posted a silly video on tiktok", "caused the universe to implode", "excavated gold", "went to a beach party"]
let event = document.getElementById ('event')

nounSpan.addEventListener('click', ()=>{
   nounSpan.innerHTML = nounArray[Counter]
   Counter++
   nounSpan.style.color = "red"
   document.body.style.backgroundColor = "#ffc875"
   if(Counter > nounArray.length -1){
    Counter = 0 //cycles through again
   }
})

adjective.addEventListener('click', ()=>{
    adjective.innerHTML = adjectiveArray[Counter]
    Counter++
    adjective.style.color = "red"
    document.body.style.backgroundColor = "#eed4ff"
    if(Counter > adjectiveArray.length -1){
     Counter = 0 //cycles through again
    }
 })

 verb.addEventListener('click', ()=>{
    verb.innerHTML = verbArray[Counter]
    Counter++
    document.body.style.backgroundColor = "#b4faed"
    verb.style.color = "red"
    if(Counter > verbArray.length -1){
     Counter = 0 //cycles through again
    }
 })

 event.addEventListener('click', ()=>{
   event.innerHTML = eventArray[Counter]
   Counter++
   event.style.color = "red"
   document.body.style.backgroundColor = "#f7d0d0"
   if(Counter > eventArray.length -1){
    Counter = 0 //cycles through again
   }
})

