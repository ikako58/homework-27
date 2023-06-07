function calculateTotalExpenses(productData) {
    let totalExpenses = 0;
    for (let i = 0; i < productData.length; i++) {
      totalExpenses += productData[i].amount;
    }
    return totalExpenses;
  }
  
  const productData = [
    { product_id: 1, amount: 200 },
    { product_id: 2, amount: 300 },
    { product_id: 3, amount: 500 }
  ];
  
  const totalExpenses = calculateTotalExpenses(productData);
  document.querySelector("p").textContent = "ხარჯების ჯამი: " + totalExpenses;

  const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    }
  ];
  
  const userListDiv = document.getElementById("user-list");
  
  function createUserCard(user) {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
  
    const avatarImg = document.createElement("img");
    avatarImg.src = user.avatar;
    avatarImg.alt = "User Avatar";
    userCard.appendChild(avatarImg);
  
    const name = document.createElement("p");
    name.textContent = `${user.first_name} ${user.last_name}`;
    userCard.appendChild(name);
  
    const emailBtn = document.createElement("button");
    emailBtn.innerHTML = '<i class="fas fa-envelope"></i>';
    emailBtn.addEventListener("click", () => {
      alert(user.email);
    });
    userCard.appendChild(emailBtn);
  
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.addEventListener("click", () => {
      userCard.remove();
    });
    userCard.appendChild(removeBtn);
  
    return userCard;
  }
  
  users.forEach((user) => {
    const userCard = createUserCard(user);
    userListDiv.appendChild(userCard);
  });