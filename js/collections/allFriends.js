/* 
 * Define the Collection
 * i.e. Specifically which model it should refer to when laying code.
 */

//Namespace our app
var app = app || {};

app.friendsCollection = Backbone.Collection.extend({
    
    //what model to look
    model: app.singleFriend
    
});