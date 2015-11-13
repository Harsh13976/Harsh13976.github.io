function play(){
var name=prompt("What is your name?");
alert("Hello " + name);
  var age= prompt("What is your age?");
if(age<4)
  {
  alert("You are too young");
}
else
  {
    alert("You can play welcome. I hope you enjoy. :)");
var what= prompt("What will you do if someone gives you gold? Will you keep it or Say no? ");
if(what === "No")
{
  alert("If you took the gold there will be theives following you so they can get the gold.")
}
  else {
    alert("You are wrong!!!")
  
  }
var thieves=prompt("If you took the gold you find out that the theives follow you. What will you do call the police of fight them. If you didn't take the gold the guy who was going to give you the gold gets mad at you and sends people to kill you.Will you kill the agents or run??")
}
if (thieves === "kill") {
alert(" you took the gold and told the police you are safe and the theves are in trouble and if you dinn't take the gold and decided to kill the agents you win")}
  
   

var rating=prompt("Did you like the game?")

  if(rating==="yes")
{
  alert("Thanks");
}
else {
  alert(":(")
}
}