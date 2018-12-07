const buttonUp = document.querySelector(".upvote-btn");
const buttonUpText = buttonUp.querySelector(".upvote-text");
let isUpvoted = false;
buttonUp.addEventListener('click', () => {
    isUpvoted = !isUpvoted;
    if (!isDownvoted && isUpvoted) {
        buttonUpText.innerHTML = "Cancel"
    } else {
        buttonUpText.innerHTML = "Upvote"
    }
})

const buttonDown = document.querySelector(".downvote-btn");
const buttonDownText = buttonDown.querySelector(".downvote-text");
let isDownvoted = false;
buttonDown.addEventListener('click', () => {
    isDownvoted = !isDownvoted;
    if ( !isUpvoted && isDownvoted) {
        buttonDownText.innerHTML = "Cancel"
    } else {
        buttonDownText.innerHTML = "Downvote"
    }
})

