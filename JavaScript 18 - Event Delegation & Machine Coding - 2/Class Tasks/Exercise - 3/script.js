// TODO:
// 1. Select the elements we need to work with: the submit button, the comment input field, and the comments container.
// 2. Add an event listener to the submit button that will create a new comment when clicked.
// 3. Create a function that will add a new comment to the comments container.
// 4. Add an event listener to the comments container that will handle the reply and toggle functionality.
// 5. Create a function that will add a reply to a comment.
// 6. Add the necessary HTML elements for the reply and toggle functionality.

const submitComment = document.getElementById('submitComment');
const commentInput = document.getElementById('commentInput');
const commentsContainer = document.getElementById('commentsContainer');

submitComment.addEventListener('click',() => {
    const commentText = commentInput.value.trim();
    if(commentText) {
        addComment(commentText);
        commentInput.value = '';
    }
})

commentsContainer.addEventListener('click',(event) => {
    if(event.target.className.includes('replyBtn')) {
        const replyButton = event.target;
        const parentComment = replyButton.closest('.comment');
        const replyInput = parentComment.querySelector('.replyInput');
        const replyText = replyInput.value.trim();
        if(replyText) {
            addReply(parentComment,replyText);
            replyInput.value = '';
        }
    }
    else if(event.target.className.includes('toggleReplies')){
        const repliesContainer = event.target.nextElementSibling;
        repliesContainer.classList.toggle('collapsed');
    };
});

function addReply(parentComment,replyText) {
    const repliesContainer = parentComment.querySelector('.repliesContainer');
    const replyElement = document.createElement('div');
    replyElement.classList = 'reply';
    replyElement.innerHTML = `<p>${replyText}</p>`;
    repliesContainer.appendChild(replyElement);
    repliesContainer.classList.remove('collapsed');
}

function addComment(commentText) {
    const commentElement = document.createElement('div');
    commentElement.classList = 'comment';
    commentElement.innerHTML = `
        <p>${commentText}</p>
        <button class="replyBtn">Reply</button>
        <button class="toggleReplies">Show/Hide Replies</button>
        <div class="repliesContainer collapsed"></div>
        <textarea class="replyInput" placeholder="Write a reply..."></textarea>
        `
    commentsContainer.appendChild(commentElement);
};