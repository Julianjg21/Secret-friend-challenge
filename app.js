let friends = [];

const addFriend = () => {
  //Obtain the input element for your ID
  const addNameInput = document.getElementById("friend");
  //Obtain the value of the input
  const valor = addNameInput.value;
  if (valor === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  //push the value to Array
  friends.push(valor);
  //Restore the input text
  addNameInput.value = "";
  //Add in friend on list
  orderFriendsList();
};

const orderFriendsList = () => {
  //Obtain the input element for your ID
  const friendsListUl = document.getElementById("friendsList");
  //Clean the first element
  friendsListUl.innerHTML = "";
  //Resort array friends
  for (let friend in friends) {
    //Add friend on the list with your html
    friendsListUl.innerHTML += `<li>${friends[friend]}</li>`;
  }
};

const pickRandomFriend = () => {
  //Validate that the array is not empty
  if (friends.length === 0) return;
  //Create random number
  const pickFriend = Math.floor(Math.random() * friends.length);
  //Insert HTML
  document.getElementById(
    "result"
  ).innerHTML = `<li style="background-color: #fff9eb; color: gold"><span style="color: blue">Tu amigo secreto es: </span>${friends[pickFriend]}🥳</li>
`;
};

const showResults = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F933FF", "#33FFF5"];
  let currentIndex = 0;

  //function to change the background color and update the <li>
  const updateStyle = () => {
    const ulElement = document.getElementById("result");

    if (ulElement) {
      //Change background color
      ulElement.style.backgroundColor = colors[currentIndex % colors.length];

      //Update the content of the <ul> with a new <li>
      ulElement.innerHTML = `<li>${
        friends[currentIndex % friends.length]
      }</li>`;

      //Advance to the following index
      currentIndex++;
    }
  };

  //Change the color and li Every  0.5 seconds
  const intervalId = setInterval(updateStyle, 500);

  //Stop the change of colors and execute another function after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId); //Stop the change of colors
    pickRandomFriend(); //Select the name
  }, 5000); //5 seconds of time in milliseconds
};
