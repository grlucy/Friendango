$(document).ready(function() {
  const searchType = $(".dropdown-item");
  searchType.on("click", function(e) {
    const searchValue = $("#searchValue").val();
    e.preventDefault();
    if (e.target.text === "Users") {
      window.location.href = `/users/${searchValue}`;
    } else if (e.target.text === "Movies") {
        window.location.href = `/api/movies/${searchValue}`;
      }}
    )
  });
// });
