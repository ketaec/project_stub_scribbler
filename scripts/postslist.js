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
    window.location.href = "../html/post.html";
}