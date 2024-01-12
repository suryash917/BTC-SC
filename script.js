const citiesByState = {
  "Select your state": [""],
  "Andhra Pradesh": ["Anantapur", "Nellore", "Kadapa", "Vijayawada", "Visakhapatnam", "Kurnool", "Tirupati", "Guntur", "GVMC", "Rajahmundry"],
  "Assam": ["Dibrugarh"],
  "Bihar": ["Patna", "Muzaffarpur", "Purnia", "Bhagalpur", "Gaya", "Darbhanga"],
  "Chhattisgarh": ["Raipur", "Durg", "Bilaspur"],
  "Delhi": ["New Delhi"],
  "Gujarat": ["Ahmedabad", "Surat", "Rajkot", "Vapi", "Bhavnagar", "Vadodara", "Anand"],
  "Haryana": ["Karnal", "Ambala", "Gurgaon", "Faridabad", "Sonipat", "Hisar", "Jagadhiri", "Sirsa", "Chandigarh", "Panchkula"],
  "Himachal Pradesh": ["Shimla"],
  "Jharkhand": ["Jamshedpur", "Dhanbad", "Bokaro Steel City", "Ranchi"],
  "Karnataka": ["Bengaluru", "Gulbarga", "Hassan", "Belagavi", "Hubli-Dharwad", "Davanagere", "Bijapur", "Mysore", "Shivamogga", "Mangalore"],
  "Kerala": ["Kochi", "Kozhikode", "Palakkad", "Kollam", "Kottayam", "Thrissur", "Thiruvananthapuram", "Kannur", "Malappuram"],
  "Madhya Pradesh": ["Jabalpur", "Indore", "Bhopal", "Ujjain", "Gwalior", "Rewa", "Sagar"],
  "Maharashtra": ["Mumbai", "Solapur", "Nanded", "Pune", "Thane", "Nashik", "Dhule", "Amravati", "Aurangabad", "Latur", "Akola", "Ahmednagar", "Navi Mumbai", "Nagpur"],
  "Odisha": ["Bhubaneswar", "Cuttack"],
  "Punjab": ["Ludhiana", "Kharar", "Jalandhar", "Bathinda", "Sahibzada Ajit Singh Nagar, Mohali", "Sahibzada Ajit Singh Nagar", "Amritsar"],
  "Rajasthan": ["Jodhpur", "Bikaner", "Jaipur", "Bhilwara", "Ganganagar", "Udaipur", "Ajmer", "Bharatpur", "Sikar", "Alwar"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Puducherry", "Tiruchirappalli", "Salem", "Krishnagiri", "Vellore", "Erode"],
  "Telangana": ["Karimnagar", "Hyderabad", "Khammam"],
  "Uttar Pradesh": ["Ghaziabad", "Lucknow", "Faizabad", "Kanpur", "Jhansi", "Saharanpur", "Gautam Buddha Nagar", "Noida", "Meerut", "Bareilly", "Agra", "Mathura", "Allahabad", "Aligarh"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Udham Singh Nagar"],
  "West Bengal": ["Siliguri", "Asansol", "Barddhaman", "Kolkata", "Kharagpur"]
}
;

const centresByCity = {
  "Anantapur": ["Anantapur-Sangameswara Circle"],
  "Nellore": ["Nellore-Annamayya"],
  "Kadapa": ["Kadapa-Maruti Nagar"],
  "Vijayawada": ["Vijayawada-Eluru Road", "Vijayawada-Benz Circle"],
  "Visakhapatnam": ["Visakhapatnam-Chinamushidiwada", "Visakhapatnam-Madhurawada"],
  "Kurnool": ["Kurnool-Seshadri Nagar", "Kurnool-Gandhi Nagar"],
  "Tirupati": ["Tirupati-Annarao Circle"],
  "Guntur": ["Guntur-Arundelpet"],
  "GVMC": ["Visakhapatnam-Dwaraka Nagar"],
  "Rajahmundry": ["Rajahmundry-Kotagummam"],
  "Dibrugarh": ["Dibrugarh-Khalihamari"],
  "Patna": ["Patna-Anishabad", "Patna-Sampatchak", "Patna-RPS More", "Patna-Phulwari Sharif", "Patna-Saristabad", "Patna-Boaring Road"],
  "Muzaffarpur": ["Muzaffarpur-Saraiya Ganj"],
  "Purnia": ["Purnia-Navratan Hatta"],
  "Bhagalpur": ["Bhagalpur-Bhikhanpur"],
  "Gaya": ["Gaya-AP Colony"],
  "Darbhanga": ["Darbhanga-Mirzapur Chowk"],
  "Raipur": ["Raipur-Dangania", "Raipur-Shankar Nagar"],
  "Durg": ["Durg-Indira market", "Bhilai-Risali"],
  "Bilaspur": ["Bilaspur-Link Road"],
  "New Delhi": ["Delhi-Palam-Dabri Road", "Delhi-Dilshad Garden", "Delhi-Mayur Vihar", "Delhi-Rohini Sector 11", "Delhi-Defence Colony", "Delhi-Najafgarh", "Delhi-Janakpuri", "Delhi- Vasant Kunj", "Delhi-Dwarka", "Delhi-Karol Bagh", "Delhi-Mundka", "Delhi-Preet vihar", "Delhi-Rajouri Garden", "Delhi-Pitampura"],
  "Ahmedabad": ["Ahmedabad-Maninagar", "Ahmedabad-New CG Road", "Ahmedabad-SG Highway", "Ahmedabad-Bopal", "Ahmedabad-Bapu Nagar", "Ahmedabad-Memnagar", "Ahmedabad-Nikol Centre", "Ahmedabad-Paldi"],
  "Surat": ["Surat-Pal", "Surat-Katargam", "Surat-Varachha"],
  "Rajkot": ["Jamnagar-Aerodrome road"],
  "Vapi": ["Vapi-Chala"],
  "Bhavnagar": ["Bhavnagar-Kaliyabid"],
  "Vadodara": ["Vadodara-Fatehganj", "Vadodara-Ajwa Road"],
  "Anand": ["Anand-Vidyanagar"],
  "Karnal": ["Karnal-Mall Road"],
  "Ambala": ["Ambala-Sadar Bazaar"],
  "Gurgaon": ["Gurgaon-Sushant Lok", "Gurgaon-South City 2", "Gurgaon-Old DLF"],
  "Faridabad": ["Faridabad-Sector 16", "Faridabad-Railway Road NIT"],
  "Sonipat": ["Sonipat-Model Town"],
  "Hisar": ["Hisar-Camp Chowk"],
  "Jagadhiri": ["Yamuna Nagar-Model Town"],
  "Sirsa": ["Sirsa-Ambedkar Chowk"],
  "Chandigarh": ["Chandigarh-Sector 34A"],
  "Panchkula": ["Panchkula-Sector 11"],
  "Shimla": ["Shimla-Knollswood"],
  "Jamshedpur": ["Jamshedpur-Mango", "Jamshedpur-Bistupur"],
  "Dhanbad": ["Dhanbad - Steel Gate", "Dhanbad-Bank More"],
  "Bokaro Steel City": ["Bokaro-Sector 4"],
  "Ranchi": ["Ranchi-Harmu Road"],
  "Bengaluru": ["Yelahanka", "Mission Road", "JP Nagar", "Nagasandra", "Kalyan Nagar", "Sadashiva Nagar", "KR Puram", "Electronic City", "Nagavara", "Vijaya Nagar", "HSR", "White Field", "KSIT Junction", "Mahalakshmi Layout", "Rajarajeshwari nagar"],
  "Mysuru": ["Saraswathipuram", "Vijayanagar"],
  "Gulbarga": ["Timmapuri Circle"],
  "Hassan": ["Krishnaraja Pura"],
  "Belagavi": ["Nehru Nagar"],
  "Hubli-Dharwad": ["Jayanagar", "Dharwad-Court Circle"],
  "Mangalore": ["Urwa"],
  "Kochi": ["Kadavantra", "Pathadipalam"],
  "Kozhikode": ["Chevayur", "YMCA"],
  "Palakkad": ["Sultanpet"],
  "Kollam": ["Kadapakkada"],
  "Kottayam": ["T B Road"],
  "Thrissur": ["Aswani Junction"],
  "Thiruvananthapuram": ["KEK Towers Vazuthacaud"],
  "Kannur": ["Thavakkara"],
  "Malappuram": ["Perinthalmanna"],
  "Jabalpur": ["Gupteshwar", "Garha Road", "Ranjhi"],
  "Indore": ["Tower Square Centre", "Vijay Nagar", "Bengali Square", "Marimata Square", "Rajendra Nagar", "Sudama Nagar Centre", "Lal Ghati", "Jahangirabad"],
  "Bhopal": ["Arera Colony", "Lal Ghati"],
  "Ujjain": ["Tower Square"],
  "Gwalior": ["City Centre", "Nai Sadak"],
  "Rewa": ["College Square"],
  "Sagar": ["Ashok Vihar"],
  "Mumbai": ["Andheri West", "Goregaon", "Khar", "Kandivali", "Mulund", "Dahisar East", "Virar"],
  "Solapur": ["Dufferin Chowk"],
  "Nanded": ["Vazirabad", "Shree Nagar"],
  "Pune": ["Hadapsar", "Katraj", "Viman Nagar", "Kondhwa", "Koregaon park", "Pimple Saudagar", "Baner"],
  "Thane": ["Kasarvadavli", "Naupada"],
  "Dhule": ["Mundada Market"],
  "Amravati": ["Rukmini Nagar"],
  "Navi Mumbai": ["Koper Khairane"],
  "Bhubaneswar": ["Saheed Nagar", "Patrapada", "Chandrashekharpur"],
  "Ludhiana": ["Ghumar Mandi", "Sector 32-A", "Sunder Nagar", "Dugri Phase1", "Civil Lines"],
  "Kharar": ["Sector 125"],
  "Jalandhar": ["Jawahar Nagar"],
  "Bathinda": ["Civil Lines"],
  "Sahibzada Ajit Singh Nagar, Mohali": ["Phase IX"],
  "Sahibzada Ajit Singh Nagar": ["Zirakpur"],
  "Amritsar": ["Ranjit Avenue"],
  "Jodhpur": ["Saraswati Nagar", "5th Avenue PWD Colony"],
  "Bikaner": ["Khaturia Colony"],
  "Jaipur": ["Raja Park", "C-Scheme", "Vaishali Nagar", "Malviya Nagar", "Pratap Nagar", "Vidhyadhar Nagar", "Gopalpura Bypass"],
  "Bhilwara": ["Gandhi Nagar"],
  "Ganganagar": ["Sukhadia Circle"],
  "Udaipur": ["Hiran Magri", "Bhopalpura"],
  "Chennai": ["Egmore", "Selaiyur", "Purasawalkam", "Adyar", "Anna Nagar", "Besant Nagar", "Alwarpet", "Porur", "Sholinganallur", "Velachery", "ECR", "Ambattur"],
  "Coimbatore": ["RS Puram", "Avinashi Road", "Kuniamuthur", "Saibaba Colony", "Peelamedu"],
  "Puducherry": ["Uzhavarkarai"],
  "Tiruchirappalli": ["Thillai Nagar", "National College"],
  "Karimnagar": ["Mukarampura"],
  "Hyderabad": ["SF Green Park", "Sainikpuri", "Attapur", "Miyapur", "Paradise", "Trimulgherry", "Lanco Hills", "Kukatpally", "Banjara Hills", "Jubilee Hills", "Gachibowli"],
  "Ghaziabad": ["Raj Nagar Extension", "Kaushambi", "Nehru nagar"],
  "Lucknow": ["Shushant Golf City", "Aliganj", "Madiyaon", "Hazrat Ganj", "Gomati Nagar", "Ashiyana"],
  "Faizabad": ["Civil Lines"],
  "Kanpur": ["Kidwai Nagar", "SwaroopNagar", "Pandu Nagar", "Kakadeo", "Krishna Nagar"],
  "Jhansi": ["Civil Lines"],
  "Saharanpur": ["ITI"],
  "Meerut": ["Jagriti Vihar"],
  "Noida": ["Sector-136", "Sector 18", "Sector 59"],
  "Bareilly": ["Prem Nagar"],
  "Agra": ["Sadar Bazar", "Kargil"],
  "Mathura": ["Bhuteshwar Road"],
  "Allahabad": ["Civil Lines"],
  "Dehradun": ["Clock Tower", "Majra"],
  "Haridwar": ["Ranipur More Centre"],
  "Roorkee": ["Civil Lines"],
  "Siliguri": ["Sevoke Road"],
  "Asansol": ["Murgasol"],
  "Barddhaman": ["Birhata"],
  "Kolkata": ["Salt Lake", "Park Street", "Dalhousie", "Ruby", "Newtown", "Rabindra Sarobar", "Behala"]
}




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


var source = document.getElementById("source").value;
formData.append("source", source);






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
      }, 5000);
    });
}
