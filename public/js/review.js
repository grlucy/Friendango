$(document).ready(function() {
  const createForm = $("#createForm");

  createForm.on("submit", function(event) {
    event.preventDefault();

    const IMDBid = $("#IMDBid").val();
    const title = $("#title").val();
    const posterURL = $("#posterURL").val();
    const reviewText = $("#review-text")
      .val()
      .trim();
    const score = parseInt($("#score-select").val());
    const username = $("#username").text();

    const reviewData = {
      IMDBid: IMDBid,
      title: title,
      posterURL: posterURL,
      reviewText: reviewText,
      score: score,
      username: username
    };

    if (!reviewData.reviewText || !reviewData.score) {
      return;
    }

    console.log(reviewData);

    createReview(
      reviewData.IMDBid,
      reviewData.title,
      reviewData.posterURL,
      reviewData.reviewText,
      reviewData.score,
      reviewData.username
    );
    $("#review-text").val("");
  });

  function createReview(IMDBid, title, posterURL, reviewText, score, username) {
    $.post("/api/review", {
      IMDBid: IMDBid,
      title: title,
      posterURL: posterURL,
      reviewText: reviewText,
      score: score,
      username: username
    })
      .then(function(data) {
        window.location.replace("/dashboard");
      })
      .catch(function(err) {
        if (err) throw err;
      });
  }
});
