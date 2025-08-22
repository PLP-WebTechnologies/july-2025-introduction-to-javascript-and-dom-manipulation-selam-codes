document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = prompt("Enter your age:");
  age = Number(age);

  let result = "";
  if (isNaN(age)) {
    result = "❌ Please enter a valid number.";
  } else if (age >= 18) {
    result = "✅ You are an adult.";
  } else {
    result = "🧒 You are underage.";
  }

  document.getElementById("ageResult").textContent = result;
});

function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let total = calculateTotal(10, 5); 
  document.getElementById("totalResult").textContent = "Total: $" + total;
});


function toggleMessage() {
  const msg = document.getElementById("toggleMessage");
  msg.classList.toggle("hidden");
}
document.getElementById("toggleBtn").addEventListener("click", toggleMessage);


document.getElementById("showListBtn").addEventListener("click", function () {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍓 Strawberry", "🍊 Orange"];
  const fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; 

  
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
});


document.getElementById("countdownBtn").addEventListener("click", function () {
  let num = 5;
  let countdownText = "";

  while (num >= 0) {
    countdownText += num + " ";
    num--;
  }

  document.getElementById("countdown").textContent = countdownText;
});


document.getElementById("changeColorBtn").addEventListener("click", function () {
  const colors = ["red", "blue", "yellow", "green", "white"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});


document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = prompt("Enter a new list item:");
  if (newItem) {
    let li = document.createElement("li");
    li.textContent = newItem;
    document.getElementById("dynamicList").appendChild(li);
  }
});


document.body.addEventListener("dblclick", function () {
  alert("🎉 You double-clicked on the page!");
});
