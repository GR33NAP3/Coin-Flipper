// TODO: Declare any global variables we need
let amountHeads = 0
let amountTails = 0
let totalTries = 0 
let percentHeads = 0
let percentTails = 0

//function flipFunction()

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons
    let flip = document.querySelector("#flip") 
    let clear = document.querySelector('#clear')
    let penny = document.querySelector('#penny-image')
    let message = document.querySelector('#message')

    flip.addEventListener('click', function()
    {
            let coinFlipped = Math.round(Math.random())
            if (coinFlipped >= .5)//changes things to heads for above .5
            {
                penny.src="assets/images/penny-heads.jpg"
                amountHeads++// adds to heads amount and total tries
                totalTries++
                percentHeads=(Math.round(amountHeads/totalTries * 100))
                if(amountTails>0){
                    percentTails=(Math.round(amountTails/totalTries * 100))
                }

                document.querySelector('#message').innerHTML ='you Flipped Heads!'
                document.querySelector('#heads').innerHTML = amountHeads
                document.querySelector('#heads-percent').innerHTML = `${percentHeads}%`
                document.querySelector('#tails-percent').innerHTML = `${percentTails}%`
            }
            else if(coinFlipped < .5)//changes things to tails 
            {
                penny.src="assets/images/penny-tails.jpg"
                amountTails++
                totalTries++
                percentTails=(Math.round(amountTails/totalTries * 100))
                if(amountHeads>0){
                percentHeads=(Math.round(amountHeads/totalTries * 100))
                }
                document.querySelector('#message').innerHTML ='you Flipped Tails!'
                document.querySelector('#tails').innerHTML = amountTails
                document.querySelector('#heads-percent').innerHTML = `${percentHeads}%`
                document.querySelector('#tails-percent').innerHTML = `${percentTails}%`
                
            }
            else//just in case it didnt work
            {
                console.log("math aint mathing")
            }
    })
    

    clear.addEventListener("click", function(){
         amountHeads = 0
        amountTails = 0
        totalTries = 0 
        percentHeads = 0
        percentTails = 0
        penny.src="assets/images/penny-heads.jpg"
        document.querySelector('#message').innerHTML ="Let's get flipping!"
        document.querySelector('#tails').innerHTML = amountTails               
        document.querySelector('#heads').innerHTML = amountHeads
        document.querySelector('#heads-percent').innerHTML = `${percentHeads}%`
        document.querySelector('#tails-percent').innerHTML = `${percentTails}%`

    }
    )
})