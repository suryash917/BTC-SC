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

const centersByCity = {
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

// Function to populate cities in the dropdown based on the selected state
function populateCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const selectedState = stateSelect.value;

  // Clear existing options in the city dropdown
  citySelect.innerHTML = "";

  // Add a default option for city
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

// Function to populate center addresses in the dropdown based on the selected city
function populateAddresses() {
  const citySelect = document.getElementById("city");
  const centerSelect = document.getElementById("center");
  const selectedCity = citySelect.value;

  // Clear existing options in the center dropdown
  centerSelect.innerHTML = "";

  // Add a default option for center
  const defaultCenterOption = document.createElement("option");
  defaultCenterOption.text = "Select your center";
  defaultCenterOption.disabled = true;
  defaultCenterOption.selected = true;
  centerSelect.add(defaultCenterOption);

  // Populate center addresses based on the selected city
  if (selectedCity && centersByCity[selectedCity]) {
    centersByCity[selectedCity].forEach(center => {
      const option = document.createElement("option");
      option.value = center;
      option.text = center;
      centerSelect.add(option);
    });
  }
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    center: document.getElementById("center").value
  };

  // Add your fetch request here
  fetch('https://script.google.com/macros/s/AKfycbzqsY0T8hx6MIe8RRLf78-2xJhDPg_qI1wZHJWD9VrBDTYwKcCnRbghYDV-PmDrEKVfng/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Log the server response
      alert('Form submitted successfully');
    })
    .catch(error => console.error('Error:', error));
}

// Function to populate states in the dropdown on page load
function populateStates() {
  const stateSelect = document.getElementById("state");
  stateSelect.innerHTML = "";

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

// Add event listeners
document.getElementById("signupForm").addEventListener("submit", submitForm);

// Populate states on page load
