$(document).ready(function() {
  const searchType = $(".dropdown-item");
  searchType.on("click", function(e) {
    const searchValue = $("#searchValue").val();
    e.preventDefault();
    if (e.target.text === "Users") {
      window.location.href = `/users/${searchValue}`;
    } else if (e.target.text === "Movies") {
      $.get(`https://www.omdbapi.com/?t=${searchValue}&apikey=trilogy`)
      .then(function(response){
        const imdbID = response.imdbID;
        window.location.href = `/movies/${imdbID}`;
      });
    }
  });
});
