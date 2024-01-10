const citiesByState = {
  "Karnataka": ["Bengaluru", "Mysuru"],
  "Maharashtra": ["Mumbai", "Pune"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  "Delhi": ["New Delhi"],
  "Uttar Pradesh": ["Lucknow"],
};

const centersByCity = {
  "Bengaluru": ["Indiranagar", "Koramangala", "Whitefield"],
  "Mysuru": ["Saraswathipuram", "Vijayanagar"],
  "Mumbai": ["Bandra", "Juhu", "Powai"],
  "Pune": ["Koregaon Park", "Kothrud", "Viman Nagar"],
  "Chennai": ["Adyar", "Anna Nagar", "Besant Nagar"],
  "Coimbatore": ["RS Puram", "Saibaba Colony", "Peelamedu"],
  "New Delhi": ["Connaught Place", "Defence Colony", "GK"],
  "Lucknow": ["Gomti Nagar", "Hazratganj", "Aliganj"],
};

// Function to populate states in the dropdown
function populateStates() {
  const stateSelect = document.getElementById("state");
  stateSelect.innerHTML = ""; // Clear existing options

  // Add default option
  const defaultStateOption = document.createElement("option");
  defaultStateOption.value = "";
  defaultStateOption.text = "Select your state";
  defaultStateOption.disabled = true;
  defaultStateOption.selected = true;
  stateSelect.add(defaultStateOption);

  // Add state options
  Object.keys(citiesByState).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

// Function to populate cities based on the selected state
function populateCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const centerGroup = document.getElementById("center-address-group");

  const selectedState = stateSelect.value;

  // Clear existing options in the city dropdown and center radio group
  citySelect.innerHTML = "";
  centerGroup.innerHTML = "";

  // Add a default option for city and center
  const defaultCityOption = document.createElement("option");
  defaultCityOption.text = "Select your city";
  defaultCityOption.disabled = true;
  defaultCityOption.selected = true;
  citySelect.add(defaultCityOption);

  const defaultCenterLabel = document.createElement("label");
  defaultCenterLabel.textContent = "Center Address";
  centerGroup.appendChild(defaultCenterLabel);

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

// Function to populate center addresses based on the selected city
function populateAddresses() {
  const citySelect = document.getElementById("city");
  const centerGroup = document.getElementById("center-address-group");

  const selectedCity = citySelect.value;

  // Clear existing options in the center radio group
  centerGroup.innerHTML = "";

  // Add a default label for center
  const defaultCenterLabel = document.createElement("label");
  defaultCenterLabel.textContent = "Center Address";
  centerGroup.appendChild(defaultCenterLabel);

  // Populate center addresses based on the selected city
  if (selectedCity && centersByCity[selectedCity]) {
    centersByCity[selectedCity].forEach(center => {
      const radioDiv = document.createElement("div");
      radioDiv.className = "radio-option";
      
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.id = center;
      radioInput.name = "center-address";
      radioInput.value = center;

      const radioLabel = document.createElement("label");
      radioLabel.for = center;
      radioLabel.textContent = center;

      radioDiv.appendChild(radioInput);
      radioDiv.appendChild(radioLabel);
      
      centerGroup.appendChild(radioDiv);
    });
  }
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    center: document.querySelector('input[name="center-address"]:checked').value
  };

  // Add your fetch request here
  // ...

  console.log("Form data:", formData);
}

// Add event listeners
document.getElementById("signupForm").addEventListener("submit", handleFormSubmission);

// Populate states on page load
window.onload = populateStates;
