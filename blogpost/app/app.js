var postsData = {};

function addListeners() {
  $("nav a").click(function(e) {
    e.preventDefault();
    var id = e.currentTarget.id;
    var post = postsData[id];

    if (post) {
      var postString = `<p>Title: ${post.title}</p> <p>Author: ${post.author}</p> 
        <p>Publish Data: ${post.publishDate}</p>
         <p>Story: ${post.story}</p> 
         <div> 
         <h4>Comments:</h4>
          <ul>`;

      $.each(post.comments, function(idx, comment) {
        postString += `<li><p></p>${comment.commentDate} ${comment.userName}</p><p>
          ${comment.comment}</p></li>`;
      });

      postString += `</ul></div>`;

      $(".blog-holder").html(postString);
    }
  });
}

function getData() {
  $.getJSON("data/data.json", function(blogPosts) {
    postsData = blogPosts;

    $.each(postsData, function(idx, value) {
      $("nav").append(`<a id="${idx}" 
      href="#">${value.title}</a>`);
    });

    addListeners();
  });
}

$(document).ready(function() {
  getData();
});
