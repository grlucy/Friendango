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
    const userId = $("#userId").text();

    const reviewData = {
      IMDBid: IMDBid,
      title: title,
      posterURL: posterURL,
      reviewText: reviewText,
      score: score,
      userId: userId
    };

    if (!reviewData.reviewText) {
      return;
    }

    createReview(
      reviewData.IMDBid,
      reviewData.title,
      reviewData.posterURL,
      reviewData.reviewText,
      reviewData.score,
      reviewData.userId
    );
    $("#review-text").val("");
  });

  function createReview(IMDBid, title, posterURL, reviewText, score, userId) {
    $.post("/api/review", {
      IMDBid: IMDBid,
      title: title,
      posterURL: posterURL,
      reviewText: reviewText,
      score: score,
      userId: userId
    })
      .then(function(data) {
        window.location.replace("/dashboard");
      })
      .catch(function(err) {
        if (err) throw err;
      });
  }
});
