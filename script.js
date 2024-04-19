const markAsARead = document.querySelector("#mark_Read");
const unreadPostNumber = document.querySelector("#number");
const posts = document.querySelectorAll(".post");

function updateNotifications() {
  const newNotReadPosts = document.querySelectorAll(".not_Read");
  unreadPostNumber.innerText = newNotReadPosts.length;
}

markAsARead.addEventListener("click", () => {
  const notReadPosts = document.querySelectorAll(".not_Read");

  notReadPosts.forEach((notReadPost) => {
    notReadPost.classList.remove("not_Read");
    updateNotifications();
  });
});

posts.forEach((post) => {
  post.addEventListener("click", () => {
    post.querySelector(".not_Read").classList.remove("not_Read");
    updateNotifications();
  });
});
