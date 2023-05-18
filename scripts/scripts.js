const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/programmer1.jpg") {
    myImage.setAttribute("src", "image/programmer2.jpg");
  } else {
    myImage.setAttribute("src", "image/programmer1.jpg");
  }
};

let myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");
myButton.onclick = () =>
{
  setUserName();
};

function setUserName() {
  const myName = prompt("Please Enter Your Name");
  if (!myName){
    setUserName();
  }
  else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my front-End development session, ${myName}`;
  }
  let myButton2 = document.querySelector("button");
  myButton2.textContent = `Thank you, ${myName}`;
}

if (!localStorage.getItem("name")){
   setUserName();
}
else{
  const storedName = "";
  myHeading.textContent = `Welcome to my front-End development session, ${storedName}`;
}


