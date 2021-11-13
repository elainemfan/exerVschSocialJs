var holidayPotluckHost = {
  address: "111 Boston street",
  date: 11/24/2021,
  time: 1800,
  friends: [
    {name : "Bob",
      foodAllergies : "none",
      items: {
      food : ["turkey", "pumpkin pie"],
     drink : "soda",
     other : "none"
      }
     },

   {
    name : "Sarah",
    foodAllergies : "peanuts",
    items: {
      food : ["mashed patatoes", "sweet patatoes","cranberries"],
      drink : "juice",
      other : "none"
    }
     },

    {
     name : "Matt",
     foodAllergies: "none",
     items: {
      food : ["ham", "asparagus","broccoli", "pumpkin pie"],
      drink : "none",
      other : ["napkins", "cups"]
     }
      },

     {
      name : "Mary",
     foodAllergies: "none",
     items: {
      food : ["sweet patatoes", "broccoli", "ham"],
      drink : "beer",
      other : "none"
     }
    }
  ]
}

var hamcount =0
for (var i =0; i < holidayPotluckHost.friends.length; i++) {
for (var j=0; j< holidayPotluckHost.friends[i].items.food.length; j++)
{
  if (holidayPotluckHost.friends[i].items.food[j] === "ham") {
      hamcount++;
  }
}
}

console.log ("Friends bringing ham:" + hamcount)
console.log (holidayPotluckHost)