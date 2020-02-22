const ctx = document.getElementById("indexChart").getContext("2d");
const indexChart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [
      "Sonic The Hedgehog",
      "The Call of the Wild",
      "Harley Quinn: Birds of Prey",
      "The Photograph",
      "Fantasy Island"
    ],
    datasets: [
      {
        label: "Average Score",
        data: [8.7, 7.7, 6.7, 4.8, 2],
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
            suggestedMax: 10
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
