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

function populateCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const selectedState = stateSelect.value;
  
  citySelect.innerHTML = "";
  const defaultCityOption = document.createElement("option");
  defaultCityOption.text = "Select your city";
  defaultCityOption.disabled = true;
  defaultCityOption.selected = true;
  citySelect.add(defaultCityOption);

  if (selectedState && citiesByState[selectedState]) {
    citiesByState[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    });
  }
}

function populateAddresses() {
  const citySelect = document.getElementById("city");
  const centreSelect = document.getElementById("centre");
  const selectedCity = citySelect.value;

  centreSelect.innerHTML = "";
  const defaultcentreOption = document.createElement("option");
  defaultcentreOption.text = "Select your centre";
  defaultcentreOption.disabled = true;
  defaultcentreOption.selected = true;
  centreSelect.add(defaultcentreOption);

  if (selectedCity && centresByCity[selectedCity]) {
    centresByCity[selectedCity].forEach(centre => {
      const option = document.createElement("option");
      option.value = centre;
      option.text = centre;
      centreSelect.add(option);
    });
  }
}

function submitForm(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    centre: document.getElementById("centre").value
  };

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyZNG2zZiGmFR5MvPQfGjPIVDy3xuX9A5vVlztoxb_7ztRxUVQGKj7Ydz9kzgac2ODtug/exec';

  fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully');
      window.location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting the form');
    });
}

function populateStates() {
  const stateSelect = document.getElementById("state");
  stateSelect.innerHTML = "";

  const defaultStateOption = document.createElement("option");
  defaultStateOption.value = "";
  defaultStateOption.text = "Select your state";
  defaultStateOption.disabled = true;
  defaultStateOption.selected = true;
  stateSelect.add(defaultStateOption);

  Object.keys(citiesByState).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

document.getElementById("signupForm").addEventListener("submit", submitForm);
window.onload = populateStates;

