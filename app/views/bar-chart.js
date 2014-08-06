import
Ember
from
'ember';

export default
Ember.View.extend({
    didInsertElement: function () {
        console.log("Bar chart view loading..");
        if (!this.get('controller.maleBarChartCanvas')) {
            console.log("Male bar chart canvas not set yet, about to set");
            var maleBarChartCanvas = $("#maleBarChartCanvas").get(0).getContext("2d");
            this.get('controller').set('maleBarChartCanvas', maleBarChartCanvas);
        }
        if (!this.get('controller.femaleBarChartCanvas')) {
            var femaleBarChartCanvas = $("#femaleBarChartCanvas").get(0).getContext("2d");
            this.get('controller').set('femaleBarChartCanvas', femaleBarChartCanvas);
        }
    }
});
