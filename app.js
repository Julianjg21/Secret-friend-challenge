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

