import
Ember
from
'ember';

export default
Ember.View.extend({
    didInsertElement: function () {
        var malePieChartCanvas = $("#malePieChartCanvas").get(0).getContext("2d");
        var data = [
            {
                value: 300,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ];

        var myDoughnutChart = new Chart(malePieChartCanvas).Doughnut(data, this.options);
        malePieChartCanvas.onclick = function (evt) {
            var activePoints = myDoughnutChart.getSegmentsAtEvent(evt);
            console.dir(activePoints);
            // => activePoints is an array of segments on the canvas that are at the same position as the click event.
        }
    }
});
