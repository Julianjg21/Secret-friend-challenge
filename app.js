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
  ).innerHTML = `<li>${friends[pickFriend]}</li>`;
};
