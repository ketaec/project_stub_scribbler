var selectedPost;
var deletePostModal = document.getElementById("delete-post-modal");

// open delete post modal
function openDeletePostModal(e) {
    selectedPost = e.closest(".post");
    console.log(selectedPost);
    deletePostModal.style.display = "block";
}

// closes delete post modal
function closeDeletePostModal() {
    selectedPost = null;
    deletePostModal.style.display = "none";
}

// to delete or hide a post
function deletePost() {
    selectedPost.style.display = 'none';
    selectedPost.remove();
    closeDeletePostModal();
}

// to redirect to post.html
function showFullPost(e) {
    var post = e.closest(".post");
    var author = post.querySelector(".post-username").innerText;
    var postTitle = post.querySelector(".post-content-title").innerText;
    var postContent = post.querySelector(".post-content").innerText;
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("postTitle", postTitle);
    sessionStorage.setItem("postContent", postContent);
    window.location.href = "../html/post.html";
}