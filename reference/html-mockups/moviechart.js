const ctx = document.getElementById("movieChart").getContext("2d");
const movieChart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["9 - 10", "7 - 8", "5 - 6", "3 - 4", "1 - 2"],
    datasets: [
      {
        label: "% of Scores in This Range",
        data: [65, 20, 0, 5, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(91, 155, 105, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(91, 155, 105, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
            callback: function(value) {
              return value + "%";
            }
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  }
});
