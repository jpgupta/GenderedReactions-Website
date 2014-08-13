import
Ember
from
'ember';

export default
Ember.Controller.extend({
//    isCaptchaReady: false,
//
//    createCaptcha: function () {
//        if (!this.get('isCaptchaReady')) {
//            $('#captchaInput').realperson();
//            this.set('isCaptchaReady', true);
//        }
//    }.observes('fullName'),

    actions: {
        sendMessage: function () {
            if (!this.get('fullName') || !this.get('email') || !this.get('message')) {
                alert('Please enter your full name, email and a message!');
                return;
            }
            jQuery.ajax({
                url: 'script/jquery.realperson.php?email='+this.get('email')+
                    '&fullName='+this.get('fullName')+'&subject='+this.get('subject')+
                    '&message='+this.get('message'),
                success: function (data) {
                    alert('Thank you! We have received your message.')
                    this.transitionToRoute('index');
                }.bind(this)
            });
        }
    }
});
