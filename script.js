const button = document.getElementsByTagName("button");

button.addEventListener("click", () => {
  const hello = document.getElementById("hello");
  hello.style.backgroundColor = "black";
  hello.style.color = "white";
})