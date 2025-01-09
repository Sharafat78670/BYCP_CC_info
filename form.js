// Division, District, and Constituency Data
const divisions = {
  "Dhaka": [
        "Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", 
        "Narayanganj", "Narsingdi", "Tangail", "Faridpur", "Gopalganj", 
        "Madaripur", "Rajbari", "Shariatpur"
    ],
    "Chittagong": [
        "Chittagong", "Cox's Bazar", "Khagrachari", "Bandarban", 
        "Rangamati", "Noakhali", "Feni", "Lakshmipur", "Comilla", 
        "Chandpur", "Brahmanbaria"
    ],
    "Sylhet": [
        "Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"
    ],
    "Rajshahi": [
        "Rajshahi", "Chapainawabganj", "Natore", "Naogaon", 
        "Pabna", "Sirajganj", "Joypurhat", "Bogra"
    ],
    "Khulna": [
        "Khulna", "Bagerhat", "Satkhira", "Jessore", "Narail", 
        "Jhenaidah", "Magura", "Kushtia", "Chuadanga", "Meherpur"
    ],
    "Barisal": [
        "Barisal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokati", 
        "Barguna"
    ],
    "Rangpur": [
        "Rangpur", "Panchagarh", "Thakurgaon", "Dinajpur", 
        "Kurigram", "Lalmonirhat", "Nilphamari", "Gaibandha"
    ],
    "Mymensingh": [
        "Mymensingh", "Jamalpur", "Netrokona", "Sherpur"
    ]
};

const constituencies = {
  "Dhaka": ["Dhaka-1", "Dhaka-2", "Dhaka-3", "Dhaka-4", "Dhaka-5", "Dhaka-6", "Dhaka-7", "Dhaka-8", "Dhaka-9", "Dhaka-10", "Dhaka-11", "Dhaka-12", "Dhaka-13", "Dhaka-14", "Dhaka-15", "Dhaka-16", "Dhaka-17", "Dhaka-18", "Dhaka-19", "Dhaka-20"],
  "Gazipur": ["Gazipur-1", "Gazipur-2", "Gazipur-3", "Gazipur-4", "Gazipur-5"],
  "Kishoreganj": ["Kishoreganj-1", "Kishoreganj-2", "Kishoreganj-3", "Kishoreganj-4", "Kishoreganj-5", "Kishoreganj-6"],
  "Manikganj": ["Manikganj-1", "Manikganj-2", "Manikganj-3"],
  "Munshiganj": ["Munshiganj-1", "Munshiganj-2", "Munshiganj-3"],
  "Narayanganj": ["Narayanganj-1", "Narayanganj-2", "Narayanganj-3", "Narayanganj-4", "Narayanganj-5"],
  "Narsingdi": ["Narsingdi-1", "Narsingdi-2", "Narsingdi-3"],
  "Tangail": ["Tangail-1", "Tangail-2", "Tangail-3", "Tangail-4", "Tangail-5", "Tangail-6", "Tangail-7", "Tangail-8"],
  "Faridpur": ["Faridpur-1", "Faridpur-2", "Faridpur-3", "Faridpur-4"],
  "Gopalganj": ["Gopalganj-1", "Gopalganj-2"],
  "Madaripur": ["Madaripur-1", "Madaripur-2", "Madaripur-3"],
  "Rajbari": ["Rajbari-1", "Rajbari-2"],
  "Shariatpur": ["Shariatpur-1", "Shariatpur-2", "Shariatpur-3"],
  "Chittagong": ["Chittagong-1", "Chittagong-2", "Chittagong-3", "Chittagong-4", "Chittagong-5", "Chittagong-6", "Chittagong-7", "Chittagong-8", "Chittagong-9", "Chittagong-10", "Chittagong-11", "Chittagong-12", "Chittagong-13", "Chittagong-14", "Chittagong-15", "Chittagong-16"],
  "Cox's Bazar": ["Cox's Bazar-1", "Cox's Bazar-2", "Cox's Bazar-3", "Cox's Bazar-4"],
  "Khagrachari": ["Khagrachari-1"],
  "Bandarban": ["Bandarban-1"],
  "Rangamati": ["Rangamati-1"],
  "Noakhali": ["Noakhali-1", "Noakhali-2", "Noakhali-3", "Noakhali-4", "Noakhali-5", "Noakhali-6"],
  "Feni": ["Feni-1", "Feni-2", "Feni-3"],
  "Lakshmipur": ["Lakshmipur-1", "Lakshmipur-2", "Lakshmipur-3", "Lakshmipur-4"],
  "Comilla": ["Comilla-1", "Comilla-2", "Comilla-3", "Comilla-4", "Comilla-5", "Comilla-6", "Comilla-7", "Comilla-8", "Comilla-9", "Comilla-10", "Comilla-11"],
  "Chandpur": ["Chandpur-1", "Chandpur-2", "Chandpur-3", "Chandpur-4", "Chandpur-5"],
  "Brahmanbaria": ["Brahmanbaria-1", "Brahmanbaria-2", "Brahmanbaria-3", "Brahmanbaria-4", "Brahmanbaria-5", "Brahmanbaria-6"],
  "Sylhet": ["Sylhet-1", "Sylhet-2", "Sylhet-3", "Sylhet-4", "Sylhet-5", "Sylhet-6"],
  "Moulvibazar": ["Moulvibazar-1", "Moulvibazar-2", "Moulvibazar-3"],
  "Habiganj": ["Habiganj-1", "Habiganj-2", "Habiganj-3", "Habiganj-4"],
  "Sunamganj": ["Sunamganj-1", "Sunamganj-2", "Sunamganj-3", "Sunamganj-4", "Sunamganj-5"],
  "Rajshahi": ["Rajshahi-1", "Rajshahi-2", "Rajshahi-3", "Rajshahi-4", "Rajshahi-5", "Rajshahi-6"],
  "Chapainawabganj": ["Chapainawabganj-1", "Chapainawabganj-2", "Chapainawabganj-3"],
  "Natore": ["Natore-1", "Natore-2", "Natore-3", "Natore-4"],
  "Naogaon": ["Naogaon-1", "Naogaon-2", "Naogaon-3", "Naogaon-4", "Naogaon-5", "Naogaon-6"],
  "Pabna": ["Pabna-1", "Pabna-2", "Pabna-3", "Pabna-4", "Pabna-5"],
  "Sirajganj": ["Sirajganj-1", "Sirajganj-2", "Sirajganj-3", "Sirajganj-4", "Sirajganj-5", "Sirajganj-6"],
  "Joypurhat": ["Joypurhat-1", "Joypurhat-2", "Joypurhat-3"],
  "Bogra": ["Bogra-1", "Bogra-2", "Bogra-3", "Bogra-4", "Bogra-5", "Bogra-6", "Bogra-7"],
  "Khulna": ["Khulna-1", "Khulna-2", "Khulna-3", "Khulna-4", "Khulna-5", "Khulna-6"],
  "Bagerhat": ["Bagerhat-1", "Bagerhat-2", "Bagerhat-3", "Bagerhat-4"],
  "Satkhira": ["Satkhira-1", "Satkhira-2", "Satkhira-3", "Satkhira-4"],
  "Jessore": ["Jessore-1", "Jessore-2", "Jessore-3", "Jessore-4", "Jessore-5", "Jessore-6"],
  "Narail": ["Narail-1", "Narail-2"],
  "Jhenaidah": ["Jhenaidah-1", "Jhenaidah-2", "Jhenaidah-3", "Jhenaidah-4"],
  "Magura": ["Magura-1", "Magura-2"],
  "Kushtia": ["Kushtia-1", "Kushtia-2", "Kushtia-3", "Kushtia-4"],
  "Chuadanga": ["Chuadanga-1", "Chuadanga-2"],
  "Meherpur": ["Meherpur-1", "Meherpur-2"],
  "Barisal": ["Barisal-1", "Barisal-2", "Barisal-3", "Barisal-4", "Barisal-5", "Barisal-6"],
  "Bhola": ["Bhola-1", "Bhola-2", "Bhola-3", "Bhola-4"],
  "Patuakhali": ["Patuakhali-1", "Patuakhali-2", "Patuakhali-3", "Patuakhali-4"],
  "Pirojpur": ["Pirojpur-1", "Pirojpur-2", "Pirojpur-3"],
  "Jhalokati": ["Jhalokati-1", "Jhalokati-2"],
  "Barguna": ["Barguna-1", "Barguna-2", "Barguna-3"],
  "Rangpur": ["Rangpur-1", "Rangpur-2", "Rangpur-3", "Rangpur-4", "Rangpur-5", "Rangpur-6"],
  "Panchagarh": ["Panchagarh-1", "Panchagarh-2"],
  "Thakurgaon": ["Thakurgaon-1", "Thakurgaon-2", "Thakurgaon-3"],
  "Dinajpur": ["Dinajpur-1", "Dinajpur-2", "Dinajpur-3", "Dinajpur-4", "Dinajpur-5", "Dinajpur-6"],
  "Kurigram": ["Kurigram-1", "Kurigram-2", "Kurigram-3", "Kurigram-4", "Kurigram-5", "Kurigram-6"],
  "Lalmonirhat": ["Lalmonirhat-1", "Lalmonirhat-2", "Lalmonirhat-3"],
  "Nilphamari": ["Nilphamari-1", "Nilphamari-2", "Nilphamari-3", "Nilphamari-4"],
  "Gaibandha": ["Gaibandha-1", "Gaibandha-2", "Gaibandha-3", "Gaibandha-4", "Gaibandha-5"],
  "Mymensingh": ["Mymensingh-1", "Mymensingh-2", "Mymensingh-3", "Mymensingh-4", "Mymensingh-5", "Mymensingh-6", "Mymensingh-7", "Mymensingh-8", "Mymensingh-9", "Mymensingh-10"],
  "Jamalpur": ["Jamalpur-1", "Jamalpur-2", "Jamalpur-3", "Jamalpur-4", "Jamalpur-5"],
  "Netrokona": ["Netrokona-1", "Netrokona-2", "Netrokona-3", "Netrokona-4"],
  "Sherpur": ["Sherpur-1", "Sherpur-2", "Sherpur-3"]
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
  fetch("http://localhost/submit.php", {
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
