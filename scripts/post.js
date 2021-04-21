var titleNode = document.getElementById("post-title");
var authorNode = document.getElementById("post-author");
var contentNode = document.getElementById("post-content");
var editBtn = document.getElementById("edit-btn");
var saveBtn = document.getElementById("save-btn");
var likeBtn = document.getElementById("like-btn");
var likeBtnText = document.getElementById("like-btn-text");
var commentBox = document.getElementById("comment-box");
var commentsDiv = document.getElementById("post-comments");
var likesCount = 0;

// window onload will fetch data from storage session and display in html
window.onload = function() {
    authorNode.innerHTML = sessionStorage.getItem("author");
    titleNode.innerHTML = sessionStorage.getItem("postTitle");
    contentNode.innerHTML = sessionStorage.getItem("postContent");
};

// to edit a post
function editPost() {
    editBtn.style.display = 'none';     // hide edit button
    saveBtn.style.display = 'inherit';  // show save button
    titleNode.setAttribute("contenteditable", true);
    contentNode.setAttribute("contenteditable", true);
}

// to save edited post
function savePost() {
    editBtn.style.display = 'inherit';   // show edit button
    saveBtn.style.display = 'none';     // hide save button
    titleNode.setAttribute("contenteditable", false);
    contentNode.setAttribute("contenteditable", false);
}

// to add likes to the posts
function likePost() {
    likesCount += 1;
    likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
    if(likesCount == 1) {
        likeBtnText.innerHTML = "1 person likes this!";
    } else if(likesCount > 1) {
        likeBtnText.innerHTML = likesCount + " people likes this!";
    }
}

// to add comments to post
function addComment() {
    var commentText = commentBox.value;
    if (commentText) {
        commentsDiv.style.border = "5px solid lightgray";
        commentsDiv.innerHTML = '<div id="post-comment">' + commentText + "</div>" + commentsDiv.innerHTML;
    }
    commentBox.value = "";
}