const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
  console.log('clicked');
  const hello = document.getElementById("hello");
  hello.style.backgroundColor = "black";
  hello.style.color = "white";
})