// Division, District, and Constituency Data
const divisions = {
  "Dhaka": ["Dhaka", "Gazipur", "Narayanganj"],
  "Chittagong": ["Chittagong", "Cox's Bazar", "Khagrachari"],
  "Sylhet": ["Sylhet", "Moulvibazar", "Habiganj"],
};

const constituencies = {
  "Dhaka": ["Dhaka-1", "Dhaka-2", "Dhaka-3"],
  "Gazipur": ["Gazipur-1", "Gazipur-2"],
  "Narayanganj": ["Narayanganj-1", "Narayanganj-2"],
  "Chittagong": ["Chittagong-1", "Chittagong-2"],
  "Cox's Bazar": ["Cox's Bazar-1"],
  "Sylhet": ["Sylhet-1", "Sylhet-2"],
  "Moulvibazar": ["Moulvibazar-1","Moulvibazar-2"],
};

// Populate Division Dropdown
const divisionSelect = document.getElementById("division");
Object.keys(divisions).forEach(division => {
  const option = document.createElement("option");
  option.value = division;
  option.textContent = division;
  divisionSelect.appendChild(option);
});

// Populate District Dropdown Based on Selected Division
divisionSelect.addEventListener("change", () => {
  const districtSelect = document.getElementById("district");
  const constituencySelect = document.getElementById("constituency");
  districtSelect.innerHTML = '<option value="">Select Your District</option>';
  constituencySelect.innerHTML = '<option value="">Select Your Parliamentary Area</option>';

  const selectedDivision = divisionSelect.value;
  if (selectedDivision) {
    divisions[selectedDivision].forEach(district => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
});

// Populate Constituency Dropdown Based on Selected District
document.getElementById("district").addEventListener("change", () => {
  const constituencySelect = document.getElementById("constituency");
  constituencySelect.innerHTML = '<option value="">Select Your Parliamentary Area</option>';

  const selectedDistrict = document.getElementById("district").value;
  if (selectedDistrict) {
    constituencies[selectedDistrict].forEach(constituency => {
      const option = document.createElement("option");
      option.value = constituency;
      option.textContent = constituency;
      constituencySelect.appendChild(option);
    });
  }
});

// Handle Form Submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  fetch("https://brighters.org/submit.php", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      alert("ফর্ম সফলভাবে জমা হয়েছে!");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("ডেটা জমা করতে সমস্যা হয়েছে।");
    });
});
