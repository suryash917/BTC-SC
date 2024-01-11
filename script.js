const citiesByState = {
  "Karnataka": ["Bengaluru", "Mysuru"],
  "Maharashtra": ["Mumbai", "Pune"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  "Delhi": ["New Delhi"],
  "Uttar Pradesh": ["Lucknow", "Kanpur"],
  "Rajasthan": ["Jaipur", "Jodhpur"],
  "Telangana": ["Hyderabad"],
  "Gujarat": ["Ahmedabad", "Surat"],
  "Kerala": ["Thiruvananthapuram"],
};

const centresByCity = {
  "Bengaluru": ["Indiranagar", "Koramangala", "Whitefield"],
  "Mysuru": ["Saraswathipuram", "Vijayanagar"],
  "Mumbai": ["Bandra", "Juhu", "Powai"],
  "Pune": ["Koregaon Park", "Kothrud", "Viman Nagar"],
  "Chennai": ["Adyar", "Anna Nagar", "Besant Nagar"],
  "Coimbatore": ["RS Puram", "Saibaba Colony", "Peelamedu"],
  "New Delhi": ["Connaught Place", "Defence Colony", "GK"],
  "Lucknow": ["Gomti Nagar", "Hazratganj", "Aliganj"],
  "Kanpur": ["Civil Lines", "Swaroop Nagar", "Kakadeo"],
  "Jaipur": ["Malviya Nagar", "C-Scheme", "Vaishali Nagar"],
  "Jodhpur": ["Ratanada", "Sardarpura", "Shastri Nagar"],
  "Hyderabad": ["Banjara Hills", "Jubilee Hills", "Gachibowli"],
  "Ahmedabad": ["Satellite", "Bodakdev", "Thaltej"],
  "Surat": ["Adajan", "Vesu", "Piplod"],
  "Thiruvananthapuram": ["Kowdiar", "Sreekariyam", "Vellayambalam"],
};

// Function to populate cities based on selected state
function populateCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const selectedState = stateSelect.value;

  // Clear existing options in the city dropdown
  citySelect.innerHTML = "";

  // Create a default option
  const defaultCityOption = document.createElement("option");
  defaultCityOption.text = "Select your city";
  defaultCityOption.disabled = true;
  defaultCityOption.selected = true;
  citySelect.add(defaultCityOption);

  // Populate cities based on the selected state
  if (selectedState && citiesByState[selectedState]) {
    citiesByState[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    });
  }
}

// Function to populate centers based on selected city
function populateAddresses() {
  const citySelect = document.getElementById("city");
  const centreSelect = document.getElementById("centre");
  const selectedCity = citySelect.value;

  // Clear existing options in the center dropdown
  centreSelect.innerHTML = "";

  // Create a default option
  const defaultCentreOption = document.createElement("option");
  defaultCentreOption.text = "Select your centre";
  defaultCentreOption.disabled = true;
  defaultCentreOption.selected = true;
  centreSelect.add(defaultCentreOption);

  // Populate centers based on the selected city
  if (selectedCity && centresByCity[selectedCity]) {
    centresByCity[selectedCity].forEach(centre => {
      const option = document.createElement("option");
      option.value = centre;
      option.text = centre;
      centreSelect.add(option);
    });
  }
}

// Function to populate states on page load
function populateStates() {
  const stateSelect = document.getElementById("state");
  stateSelect.innerHTML = "";

  // Create a default state option
  const defaultStateOption = document.createElement("option");
  defaultStateOption.value = "";
  defaultStateOption.text = "Select your state";
  defaultStateOption.disabled = true;
  defaultStateOption.selected = true;
  stateSelect.add(defaultStateOption);

  // Populate states based on the data
  Object.keys(citiesByState).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

// Attach event listener for form submission
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  submitForm(); // Call the submitForm function
});

// Call populateStates function on page load
window.onload = function () {
  populateStates();
  document.getElementById("signupForm").reset(); // Reset the form on page load
};






// Function to handle form submission
function submitForm() {
  // Disable the submit button to prevent multiple submissions
  document.getElementById("submit").disabled = true;

  // Display a loading text on the button
  document.getElementById("submit").innerText = "Submitting...";

  // Collect the form data
  var formData = new FormData(document.getElementById("signupForm"));
  var keyValuePairs = [];

  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbw28aFutGkr_JXTYRsENyE4FuJROozLPs8FRymXsMcs36GPyygL8HjoHWd0V-KOXWA7cg/exec", {
    redirect: "follow",
    method: "POST",
    body: formDataString,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  })
    .then(function (response) {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }
      return response.json(); // Assuming your script returns JSON response
    })
    .then(function (data) {
      // Handle successful form submission
      console.log("Data submitted successfully!");
      document.getElementById("signupForm").reset(); // Reset the form if needed
      alert("Form submitted successfully!"); // Display a success notification
    })
    .catch(function (error) {
      // Handle errors, display an error message
      console.error(error);
      alert("Form submitted"); // Display an error notification
    })
    .finally(function () {
      // Enable the submit button after 10 seconds
      setTimeout(function () {
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").innerText = "Submit";
      }, 8000);
    });
}
