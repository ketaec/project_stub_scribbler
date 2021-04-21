
var titleNode = document.getElementById("post-title");
var authorNode = document.getElementById("post-author");
var contentNode = document.getElementById("post-content");
var editBtn = document.getElementById("edit-btn");
var saveBtn = document.getElementById("save-btn");

// window onload will fetch data from storage session and display in html
window.onload = function() {
    authorNode.innerHTML = sessionStorage.getItem("author");
    titleNode.innerHTML = sessionStorage.getItem("postTitle");
    contentNode.innerHTML = sessionStorage.getItem("postContent");
};

function editPost() {
    editBtn.style.display = 'none';     // hide edit button
    saveBtn.style.display = 'inherit';  // show save button
    titleNode.setAttribute("contenteditable", true);
    contentNode.setAttribute("contenteditable", true);
}

function savePost() {
    editBtn.style.display = 'inherit';   // show edit button
    saveBtn.style.display = 'none';     // hide save button
    titleNode.setAttribute("contenteditable", false);
    contentNode.setAttribute("contenteditable", false);
}