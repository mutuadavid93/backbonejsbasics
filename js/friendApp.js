/* 
 * Code to implement all modules together.
 * Executions occur here
 * Model instances are created as well
 */

var developers = new app.singleFriend({
   name: "William wambua",
   hairColor: "black",
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
    images: "images/Lydia_muthoki.jpg",
    link: "Lydia_muthoki"
});


console.log(developers.toJSON());
console.log(dataWranglers.toJSON());
console.log(netWorkEngineers.toJSON());