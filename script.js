
let users = [
  { id: 1, name: "John", age: "18", profession: "developer" },
  { id: 2, name: "Jack", age: "20", profession: "developer" },
  { id: 3, name: "Karen", age: "19", profession: "admin" }
];


function filterUsers() {
  const professionSelect = document.getElementById("profession");
  const selectedProfession = professionSelect.value;

  if (selectedProfession === "") {
    alert("Please select a profession before filtering.");
    return;
  }

  const filteredUsers = users.filter(user => user.profession === selectedProfession);
  displayUsers(filteredUsers);
}


function displayUsers(filteredUsers) {
  const cardContainer = document.getElementById("userList");
  cardContainer.innerHTML = "";

  filteredUsers.forEach(user => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `${user.id}   Name: ${user.name}   Profession: ${user.profession}   Age: ${user.age} <br><br>`;
    cardContainer.appendChild(cardElement);
  });
}


function addUser() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const professionInput = document.getElementById("profession");

  const name = nameInput.value;
  const age = ageInput.value;
  const profession = professionInput.value;

  const newUser = {
    id: users.length + 1,
    name: name,
    age: age,
    profession: profession
  };

  users.push(newUser);


  displayUsers(users);


  nameInput.value = "";
  ageInput.value = "";
  professionInput.value = "";
}

document.getElementById("filterButton").addEventListener("click", filterUsers);
document.getElementById("addButton").addEventListener("click", addUser);


displayUsers(users);
