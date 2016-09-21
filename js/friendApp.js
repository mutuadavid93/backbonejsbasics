/* 
 * Code to implement all modules together.
 * Executions occur here
 * Model instances are created as well
 */

var developers = new app.singleFriend({
   name: "William wambua",
   hairColor: "brown",
   mvc: "Angularjs",
   link: "William_wambua",
   image: "images/William_wambua.jpg"
});

var dataWranglers = new app.singleFriend({
    name: "Etyang kizito",
    hairColor: "grey",
    mvc: "Emberjs",
    link: "Etyang_kizito"
});

var netWorkEngineers = new app.singleFriend({
    name: "Lydia muthoki",
    mvc: "Knockoutjs",
    image: "images/Lydia_muthoki.jpg",
    link: "Lydia_muthoki"
});


//instantiate the collection
var friendsGroup = new app.friendsCollection([
   developers, dataWranglers, netWorkEngineers
]);

console.log(friendsGroup.toJSON());