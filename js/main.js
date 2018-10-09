

 var object1 = 	{
 	firstName: "Adam" ,
   lastName: "Levine",
   portrait: "img/levine.png",
   title:  "cto"
 };
   

  var object2 = 	{
 	firstName: "Jen" ,
   lastName: "Lopes",
   portrait: "img/levine.png",
   title:  "cfo" 
 };


   var object3 = 	{
 	firstName: "Kurt" ,
   lastName: "Cobain",
   portrait:"img/levine.png",
   title:  "cmo" 
 };
var object4 = 	{
 	firstName: "Bob" ,
   lastName: "Marley",
   portrait:"img/levine.png",
   title:  "co-founder" 
};
   var object5 = {
 	firstName: "Ben" ,
   lastName: "Affleck",
   portrait: "img/levine.png",
   title:  "co-founder" 

};

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);

var actorsArray=[];

function Actors(first, last, portrait, title){
	this.first = first;
	this.last =  last;
	this.portrait = portrait;
	this.titles =title;
  //   this.fullName= function(){
  // 	 return this.first + " " +  this.last;

  // }

 
};



var Actors1 = new Actors("Adam","Levine", "img/levine.png", "cfo");
var Actors2 = new Actors("Jen" ,"Lopes", "img/levine.png","cto" );
var Actors3 = new Actors("Kurt" ,"Cobain","img/levine.png", "cmo" );
var Actors4 = new Actors("Bob" ,"Marley", "img/levine.png", "co-founder");
var Actors5 = new Actors ("Ben" ,"Affleck", "img/levine.png","co-founder" );
console.log(Actors1.fullName());
console.log(Actors2.fullName());
console.log(Actors3.fullName());
console.log(Actors4.fullName());
console.log(Actors5.fullName());


Actors.prototype.fullName= function(){
	return this.first + " " +this.last;
}

for(i=0;i<actorsArray.length; i++){
	var myDiv= document.createElement("div");
   myDiv.appendChild()
}