let superHero = [];
let color = ["blue","red","grey"];
let root = document.getElementById("root");



let img_1 = "pic_1.jpg";
let img_2 = "pic_2.jpg";
let img_3 = "pic_3.png";



let firstHero = {

name: "spiderMan",
specialPower: "can stick to building",
suitColor: color[0], 
image: img_1,

};
// enter firsthero object to superhero array
superHero.push(firstHero);


let secondHero = {

name: "captian america",
specialPower: "very powerfull",
suitColor: color[1], 
image: img_2,

};
superHero.push(secondHero);

// enter herofirent into secondhero
secondHero.heroFriend = "batman";


let thirdHero = {

name: "tor",
specialPower: "powerfull hummer",
suitColor: color[2], 
image: img_3,

};
superHero.push(thirdHero);

for (let obj of superHero) {
  root.innerHTML += `
    <div> <strong> ${obj.name} </strong> </div>
    <div> ${obj.suitColor} </div>
    <div> ${obj.specialPower} </div>
    <div> <img src="${obj.image}" style="width:150px;height:150px;"></div>
    <br> <br>
   ` ;
    
}


