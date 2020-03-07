$(document).ready(function() {
  const searchType = $(".dropdown-item");
  searchType.on("click", function(e) {
    e.preventDefault();

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
  });
  const searchForm = $("#search-form");
  searchForm.on("submit", function(e) {
    e.preventDefault();
  });
});
