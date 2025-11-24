window.onload = function () {
  var column = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Differents bacs passes dans la classe",
    },
    axisY: {
      title: "Nb",
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        legendText: "Nom des bacs",
        dataPoints: [
          { y: 10, label: "Bac General" },
          { y: 9, label: "Bac PRO SN" },
          { y: 9, label: "BAC STI2D" },
        ],
      },
    ],
  });

  var pieVille = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Ville",
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 2, label: "Gaillac" },
          { y: 13, label: "Albi" },
          { y: 1, label: "Arifat" },
          { y: 1, label: "Arthes" },
          { y: 1, label: "Castres" },
          { y: 1, label: "Lamillarie" },
          { y: 1, label: "Peyrole" },
          { y: 1, label: "ST-Gregoire" },
          { y: 2, label: "St-Juery" },
          { y: 1, label: "Terssac" },
          { y: 1, label: "Carmaux" },
          { y: 2, label: "figeac" },
        ],
      },
    ],
  });

  var piePoursuite = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Ville",
    },
    legend: {
      cursor: "pointer",
      itemclick: explodePie,
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        showInLegend: true,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{name} - {y}%",
        dataPoints: [
          { y: 21, name: "Oui", exploded: true },
          { y: 4, name: "Non" },
          { y: 5, name: "Je ne sais pas" },
        ],
      },
    ],
  });

  column.render();
  pieVille.render();
  piePoursuite.render();
};

function explodePie(e) {
  if (
    typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" ||
    !e.dataSeries.dataPoints[e.dataPointIndex].exploded
  ) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();
}
