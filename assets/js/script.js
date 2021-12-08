// Credit: A coding exercise based on the solution provided by Brandi Williams of https://github.com/KelseyRCIS/FSI-Implement-Coin-Flipper

// TODO: Declare any global variables we need
let headsUp = 0
let tailsUp = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // Flip Button gets activated by a mouse click
    // TODO: Determine flip outcome
    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', (e) =>{
        let headFlips = Math.random() < 0.5

    // TODO: Update image and status message in the DOM
    // Display image and message as heads
    if (headFlips) {
        document.getElementById('penny-image').src = 'assets/images.penny-heads.jpg'
        document.getElementById('message').textContent = "Heads Up!"
        // Add one to the count of how many coins landed heads
        headsUp += 1
        }
    }
    else {
     // Display image and message as tails
    document.getElementById('penny-image').src = 'assets/images.penny-tails.jpg'
    document.getElementById('message').textContent = "Tails Rule!"
    //Add one to the count of how many coins flopped tails
        tailsUp += 1
    }
    
    // Update the scoreboard
   // TODO: Calculate the total number of rolls/flips
    let total = headsUp + tailsUp

    // Make variables to track the percentages of heads and tails
    let percentHeads = 0
    let percentTails = 0

    // TODO: Use the calculated total to calculate the percentages

    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    // Before trying to divide, make sure total is not zero
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsUp / total) * 100)
            percentTails = Math.round((tailsUp / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsUp
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsUp
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the heads and tails values to zero
        headsUp = 0
        tailsUp = 0

        // Update the message to the user
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // Update the scoreboard
        
        // Calculate total number of rolls
        let total = headsUp + tailsUp

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsUp / total) * 100)
            percentTails = Math.round((tailsUp / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsUp
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})