import
Ember
from
'ember';

import
SlideController
from
'../mixins/slide-controller';

export default
Ember.Controller.extend(SlideController, {
    drug: null,

    overallEventCount: 0,

    overallMaleEventCount: 0,

    overallFemaleEventCount: 0,

    countOverallAdverseEvents: function () {
        if (this.get('drug') && this.get('drug.adverseEffects.length')) {
            var overallEventCount = 0, overallMaleEventCount = 0, overallFemaleEventCount = 0;

            var adverseEffects = this.get('drug.adverseEffects');
            var first = true;
            for (var i = 0; i < adverseEffects.length; i++) {
                var adverseEffect = adverseEffects[i],
                    adverseEffectMaleCount = 0,
                    adverseEffectFemaleCount = 0;

                if (adverseEffect.maleCount && adverseEffect.maleCount !== "null")
                    adverseEffectMaleCount = parseInt(adverseEffect.maleCount);

                overallMaleEventCount += parseInt(adverseEffectMaleCount);

                if (adverseEffect.femaleCount && adverseEffect.femaleCount !== "null")
                    adverseEffectFemaleCount = parseInt(adverseEffect.femaleCount);

                overallFemaleEventCount += parseInt(adverseEffectFemaleCount);

                adverseEffect.count = adverseEffectMaleCount + adverseEffectFemaleCount;


                overallEventCount += adverseEffect.count;
            }

            this.set('overallEventCount', overallEventCount);
            this.set('overallMaleEventCount', overallMaleEventCount);
            this.set('overallFemaleEventCount', overallFemaleEventCount);


            this.set('percentageOfMaleEvents', Math.round((overallMaleEventCount / overallEventCount) * 100));
            this.set('percentageOfFemaleEvents', Math.round((overallFemaleEventCount / overallEventCount) * 100));

            this.set('maleTotalEventStyle', "width:" + this.get('percentageOfMaleEvents') + "%;");
            this.set('femaleTotalEventStyle', "width:" + this.get('percentageOfFemaleEvents') + "%;");
        }
    }.observes('drug'),

    top10SideEffects: function () {
        var adverseEffects = this.get('drug.adverseEffects'),
            sortedForMales = [],
            sortedForFemales = [],
            sortedOverall = [];

        for (var i = 0; i < adverseEffects.length; i++) {
            sortedForMales.push(adverseEffects[i]);
            sortedForFemales.push(adverseEffects[i]);
            sortedOverall.push(adverseEffects[i]);
        }
        /*
         * Desc order by gender count
         */
        sortedForMales.sort(function (a, b) {
            var aMaleCount = 0, bMaleCount = 0;
            if (a.maleCount && a.maleCount !== "null")
                aMaleCount = a.maleCount;
            if (b.maleCount && b.maleCount !== "null")
                bMaleCount = b.maleCount;
            return parseInt(bMaleCount) - parseInt(aMaleCount);
        });

        sortedForFemales.sort(function (a, b) {
            var aFemaleCount = 0, bFemaleCount = 0;
            if (a.femaleCount && a.femaleCount !== "null")
                aFemaleCount = a.femaleCount;
            if (b.femaleCount && b.femaleCount !== "null")
                bFemaleCount = b.femaleCount;
            return parseInt(bFemaleCount) - parseInt(aFemaleCount);
        });

        sortedOverall.sort(function (a, b) {
            var aCount = 0, bCount = 0;
            if (a.femaleCount && a.femaleCount !== "null")
                aCount += parseInt(a.femaleCount);
            if (a.maleCount && a.maleCount !== "null")
                aCount += parseInt(a.maleCount);

            if (b.femaleCount && b.femaleCount !== "null")
                bCount += parseInt(b.femaleCount);
            if (b.maleCount && b.maleCount !== "null")
                bCount += parseInt(b.maleCount);

            return parseInt(bCount) - parseInt(aCount);
        });
        /*
         * Horizontal bar percentages and styling for each symptom card
         */
        var top10MaleEventCount = 0,
            top10FemaleEventCount = 0;
        for (var i = 0; i < 10; i++) {
            if(parseInt(sortedOverall[i].maleCount))
                top10MaleEventCount += parseInt(sortedOverall[i].maleCount);
            if(parseInt(sortedOverall[i].femaleCount)) {
                top10FemaleEventCount += parseInt(sortedOverall[i].femaleCount);
            }
        }
        for (var i = 0; i < sortedOverall.length; i++) {
            var adverseEvent = sortedOverall[i];

            var malePercent =
                    Math.round( (parseInt(adverseEvent.maleCount) / top10MaleEventCount ) * 100),

                femalePercent =
                    Math.round( (parseInt(adverseEvent.femaleCount) / top10FemaleEventCount ) * 100);

            var maleStyle = "width:" + malePercent + "%;",
                femaleStyle = "width:" + femalePercent + "%;";

            adverseEvent.malePercent = malePercent;
            adverseEvent.femalePercent = femalePercent;
            adverseEvent.maleStyle = maleStyle;
            adverseEvent.femaleStyle = femaleStyle;
        }

        this.set('topMaleAdverseEffects', sortedForMales.splice(0, 10));
        this.set('topFemaleAdverseEffects', sortedForFemales.splice(0, 10));
        this.set('topOverallAdverseEvents', sortedOverall.splice(0, 10));

    }.observes('overallMaleEventCount.length', 'overallFemaleEventCount.length'),

    createOverallAdverseEventBarChart: function () {
        if (!this.get('topOverallAdverseEvents') || !this.get('topOverallAdverseEvents.length'))
            return;

        /* Comment this out */
        return;

        var topOverallAdverseEvents = this.get('topOverallAdverseEvents'),
            data = [];

        for (var i = 0; i < topOverallAdverseEvents.length; i++) {
            data.push({
                label: topOverallAdverseEvents[i].event,
                value: topOverallAdverseEvents[i].maleCount,
                group: "Male"
            });
            data.push({
                label: topOverallAdverseEvents[i].event,
                value: topOverallAdverseEvents[i].femaleCount,
                group: "Female"
            });
        }
        this.set('topOverallAdverseEventsBarData', data);

    }.observes('topOverallAdverseEvents.length'),

    createOverallAdverseEventSideBySideBarChart: function () {
        if (!this.get('topOverallAdverseEvents') || !this.get('topOverallAdverseEvents.length'))
            return;

        var topOverallAdverseEvents = this.get('topOverallAdverseEvents'),
            data = [];

        for (var i = 0; i < topOverallAdverseEvents.length; i++) {
            data.push({
                group: topOverallAdverseEvents[i].event,
                value: topOverallAdverseEvents[i].maleCount,
                label: "Male"
            });
            data.push({
                group: topOverallAdverseEvents[i].event,
                value: topOverallAdverseEvents[i].femaleCount,
                label: "Female"
            });
        }
        this.set('topOverallAdverseEventsBarData', data);

    }.observes('topOverallAdverseEvents.length'),

    actions: {
        getAdverseEffectsForDrug: function () {
            this.set('fetchingDrugData', true);
            this.set('drug', null);
            $.ajax({
                url: 'http://api.genderedreactions.com/drug/name/' + this.get('searchTerm'),
                data: {},
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (response) {
                    this.set('fetchingDrugData', false);
                    //this.transitionTo('drug', this.get('searchTerm'));
                    this.set('drug', response.drug);
                }.bind(this),
                error: function (error) {
                    this.set('fetchingDrugData', false);
                    console.dir(error);
                }.bind(this)
            });

        }
    }

});
