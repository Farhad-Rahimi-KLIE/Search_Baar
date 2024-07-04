function karo() {
  let search = document.getElementById("search").value;
  let cont1 = document.querySelector(".container");
  let cont2 = document.querySelector(".containerjan");
  let cont3 = document.querySelector(".containerkhan");
  let cont4 = document.querySelector(".containerber");
  let cont5 = document.querySelector(".containerkher");
  if (search == "Alex Morgan") {
    cont1.classList.add("bg-active");
  } else if (search == "Angliena Jolie") {
    cont2.classList.add("bh-active");
  } else if (search == "Carina Zavline") {
    cont3.classList.add("bj-active");
  } else if (search == "cristiano Ronaldo") {
    cont4.classList.add("bf-active");
  } else if (search == "Irina Shayk") {
    cont5.classList.add("bk-active");
  }
}
