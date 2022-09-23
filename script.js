////////////////////////////////////////////////////////////////////////////////
//////*          Variables that reference elements on page.

const pic = document.querySelector("#dog-pic");
const button = document.querySelector("#btn");
var input = document.getElementById("name");

////////////////////////////////////////////////////////////////////////////////
//////*          Function to random picture of dogs from API.

const getDogPicURL = async () => {
  let url = "https://dog.ceo/api/breeds/image/random";
  try {
      let result = await fetch(url);
      let object = await result.json();
      return object;
  } catch (error) {
      console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", event => {

  window.addEventListener("load", async e => {
      //change dog pic
      let post = await getDogPicURL();
      let url = post.message;
      pic.src = url;
  
  });
});

////////////////////////////////////////////////////////////////////////////////
//////*          Function to return objects from APIs and print values on page. 

async function getData() {
  let name = document.getElementById("name").value;

    //////////////////////////////
    ////// Age Api
  if (name.length == 0) {
    window.alert("Invalid name");
  } else {
    let age = await fetch("https://api.agify.io?name=" + name);
    age = await age.json();
    age = age.age;

    //////////////////////////////
    ////// Nationality API
    let nationality = await fetch("https://api.nationalize.io?name=" + name);
    nationality = await nationality.json();
    let nationality1 = await fetch("https://restcountries.com/v2/alpha/" + nationality.country[0].country_id);
    nationality1 = await nationality1.json();
    nationality1 = nationality1.name;
    let nationality2 = await fetch("https://restcountries.com/v2/alpha/" + nationality.country[1].country_id);
    nationality2 = await nationality2.json();
    nationality2 = nationality2.name;

    //////////////////////////////
    ////// Gender API
    let sex = await fetch("https://api.genderize.io?name=" + name);
    sex = await sex.json();
    sex = sex.gender;

document.querySelector("#show_msg").innerHTML = `${name}` + " is: " + `${age}` + " old, " +`${sex}` + ", from: " + `${nationality1}` + " or " + `${nationality2}` + ".";
}};