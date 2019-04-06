var modal = document.getElementById('reportModal');
var btn = document.getElementById("sumbit");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";

  var contact_name = document.getElementById("contact_name").value;
  var company_name = document.getElementById("company_name").value;
  var company_email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var error = false;

  if(contact_name === "") {
      document.getElementById("genContactName").innerHTML = "Error: Please Enter the Contact Name";
      document.getElementById("genContactName").style.color = "red"
      error = true;
  }
  if(company_name === "") {
      document.getElementById("genCompanyName").innerHTML = "Error: Please Enter the Company Name";
      document.getElementById("genCompanyName").style.color = "red"
      error = true;
  }
   if(company_email === "") {
      document.getElementById("genEmail").innerHTML = "Error: Please Enter the Email address";
      document.getElementById("genEmail").style.color = "red"
      error = true;
  }
  if(number === "") {
      document.getElementById("genNumber").innerHTML = "Error: Please Enter the Email address";
      document.getElementById("genNumber").style.color = "red"
  }
  if(getTotal() == 0) {
      error = true;
      document.getElementById("genTotal").innerHTML = "Error: Please Select a Cleaning Service";
      document.getElementById("genTotal").style.color = "red"
  }

  if(!error) {
      document.getElementById("genContactName").innerHTML =  "Contact Name: " + contact_name;
      document.getElementById("genCompanyName").innerHTML =  "Company Name: " + company_name;
      document.getElementById("genEmail").innerHTML =  "Company Email: " + company_email;
      document.getElementById("genNumber").innerHTML =  "Phone Number: " + number;
      document.getElementById("genTotal").innerHTML =  "Total : $" +  getTotal() + ".00";

      document.getElementById("genContactName").style.color = "black"
      document.getElementById("genCompanyName").style.color = "black"
      document.getElementById("genEmail").style.color = "black"
      document.getElementById("genNumber").style.color = "black"
      document.getElementById("genTotal").style.color = "black"
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function findTotal() {
   var total = getTotal();


    document.getElementById("total").innerHTML =  "$" +  total + ".00";
}

function getTotal() {
    var total = 0;
    if (document.getElementById("mominc").checked == true) {
        total += 5000;
    }
    if (document.getElementById("ac").checked == true) {
        total += 6500;
    }
    if (document.getElementById("sec").checked == true) {
        total += 10000;
    }
    if (document.getElementById("hks").checked == true) {
        total += 7800;
    }
    if (document.getElementById("oc").checked == true) {
        total += 5300;
    }
    if (document.getElementById("rc").checked == true) {
        total += 5900;
    }

    return total;
}