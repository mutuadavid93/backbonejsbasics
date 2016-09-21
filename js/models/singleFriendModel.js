
/*
 * All Your Moel code go in here
 */

//Namespace our app
var app = app || {};

app.singleFriend = Backbone.Model.extend({
   
   defaults: {
       hairColor: "black",
       image: "images/friendAvatar.jpg"
   },
   
   initialize: function () {
       //as soon as model mvc property change
       this.on('change:mvc', function () {
           //console.log("mvc of " +this.get('name')+ " model changed to "+this.get('mvc'));
       });
   }
    
});