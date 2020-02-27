$(document).ready(function() {
  const createFollowBtn = $("#createFollow");

  createFollowBtn.on("click", function(event) {
    event.preventDefault();
    const followedID = $("#profileUserId").val();
    const followerID = $("#loginUserId").val();

    createFollow(followedID, followerID);
    $("#followStatus").empty();
  });

  function createFollow(followedID, followerID) {
    $.post("/api/follow", {
      followedID: followedID,
      followerID: followerID
    })
      .then(function(data) {
        window.location.reload();
      })
      .catch(function(err) {
        if (err) throw err;
      });
  }
});
