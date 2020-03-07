$(document).ready(function() {
  // Check to see whether user is logged in
  let loggedIn = false;
  $.get("/api/user_data").then(function(data) {
    if (data.username) {
      loggedIn = true;
    }
  });

  const searchType = $(".dropdown-item");
  searchType.on("click", function(e) {
    e.preventDefault();
    if (!loggedIn) {
      window.location.href = `/login`;
    } else {
      const searchValue = $("#searchValue")
        .val()
        .trim();
      if (searchValue !== "") {
        if (e.target.text === "Users") {
          window.location.href = `/users/${searchValue}`;
        } else if (e.target.text === "Movies") {
          window.location.href = `/api/movies/${searchValue}`;
        }
      }
    }
  });

  const searchForm = $("#search-form");
  searchForm.on("submit", function(e) {
    e.preventDefault();
  });
});
