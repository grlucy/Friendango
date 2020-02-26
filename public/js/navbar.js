$(document).ready(function() {
  const searchType = $("dropdown-item");
  const searchValue = $("navbar-search").val().trim();
  console.log(searchValue);
  searchType.on("click", function(event) {
    if (searchType.val() === "Users") {
      window.location.href = `/user/${searchValue}`;
    } else if (searchType.val() === "Movies") {
      window.location.href = `/movies/${searchValue}`;
    }
  });
});
