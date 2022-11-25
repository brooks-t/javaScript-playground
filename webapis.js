// console.log(`----------------------------------`)
// console.log(`WINDOW OBJECT`)
// console.log(`----------------------------------`)

// console.log(this);
// console.log(window.document);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.head);

// console.log(`----------------------------------`)
// console.log(`TRAVERSE THE DOM`)
// console.log(`----------------------------------`)

// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[1]);
// console.log(document.body.children[2]);
// console.log(document.body.children[3]);
// console.log(document.body.children[4]);
// console.log(document.body.children[5]);
// console.log(document.body.children[5].children[0]);

// console.log(`----------------------------------`)
// console.log(`SETTING ATTRIBUTES`)
// console.log(`----------------------------------`)

var headline = document.getElementById("headline");
console.log(headline);

headline.style.color = "#e97451";
headline.style.fontSize = "50px";

// var gibbsFavList = document.getElementById("gibbs-fav-list");
// console.log(gibbsFavList);

// gibbsFavList.children[1].style.color = "#e97451";

var liTags = document.querySelectorAll("li");
for (i = 0; i < liTags.length; i++) {
    liTags[i].setAttribute("style", "color:blue; font-size:20px");
}

var gibbsFavTitle = document.querySelector("#gibbs-fav-title");
gibbsFavTitle.setAttribute("style", "font-size: 30px; font-weight: bold; text-decoration: underline; color: red");

gibbsFavTitle.textContent = "Gibbs Top List";

var gibbsFriend = document.getElementById("gibbs-friend");
gibbsFriend.setAttribute("src", "https://placekitten.com/g/200/200");

var newHeadline = document.createElement("h1");
document.body.appendChild(newHeadline);
newHeadline.textContent = "New Headline";

alert("Hello there!");

prompt("What would you like to do today?");