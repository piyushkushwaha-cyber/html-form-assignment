document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const email = document.getElementById("email").value.trim();
  
    const gender = document.querySelector('input[name="gender"]:checked');
  
    const techStack = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (cb) {
      techStack.push(cb.value);
    });
  
    
    if (
      name === "" ||
      age === "" ||
      !gender ||
      country === "" ||
      techStack.length === 0 ||
      address === "" ||
      telephone === "" ||
      email === ""
    ) {
      alert("Please fill all fields correctly.");
      return;
    }
  
    
    document.getElementById("output").innerHTML = `
      <h3>Submitted Data</h3>
      <table border="1" cellpadding="5">
        <tr><th>Name</th><td>${name}</td></tr>
        <tr><th>Age</th><td>${age}</td></tr>
        <tr><th>Gender</th><td>${gender.value}</td></tr>
        <tr><th>Country</th><td>${country}</td></tr>
        <tr><th>Technological Stack</th><td>${techStack.join(", ")}</td></tr>
        <tr><th>Address</th><td>${address}</td></tr>
        <tr><th>Telephone</th><td>${telephone}</td></tr>
        <tr><th>Email</th><td>${email}</td></tr>
      </table>
    `;
  });
 
  document.getElementById("userForm").addEventListener("reset", function () {
    document.getElementById("output").innerHTML = "";
  });
  
  document.getElementById("telephone").addEventListener("input", function () {
    this.value = this.value
      .replace(/[^0-9+]/g, "")   
      .replace(/(?!^)\+/g, ""); 
  });
  