var createPostModal = document.getElementById("createpost-modal");

//Search for create post button
var createPostBtn = document.getElementById("createpost-btn");

//Search close button
var closeCreatePost = document.getElementById("close-createpost");

//add events to the buttons
createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));