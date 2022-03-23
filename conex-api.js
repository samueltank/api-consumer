"use strict";

const getContent = async () => {
  try {
    const res  = await fetch("http://localhost:4567/");
    const data = await res.json();

    showUSers(data);

    console.log(res);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getContent();

const showUSers = (users) => {
  let output = "";
  
  for (let user of users) {
    output += `<li>${user.name}</li>`;
  }

  document.querySelector("main").innerHTML = output; 
};