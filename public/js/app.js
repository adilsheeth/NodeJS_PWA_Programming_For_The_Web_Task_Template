let result = "";
fetch("./frontEndData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  data.forEach(({ srn, first_name, last_name, gender, school_year, roll_class, dob, house } = rows) => {
    dob = dob.split("-").join("/")
    result += `
        <div class="card">
        <h1 class="card-name"><a>${first_name + " " + last_name}</a></h1>
        <p class="">${gender == "M" ? "Male" : "Female"}</p>
        <p class="">${roll_class}</p>
        <p>${dob}</p>
        <p>${house}</p>
        <p></p>
        </div>
        `;
  });
  document.querySelector(".container").innerHTML = result;
}

{/* <a class="card-link" href="${hyperlink}"><button class="btn">Read More</button></a> */}