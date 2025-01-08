<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $division = $_POST['division'];
    $district = $_POST['district'];
    $parliamentaryArea = $_POST['parliamentaryArea'];

    
    $photo = $_FILES['photo'];
    $nid = $_FILES['nid'];

   
    move_uploaded_file($photo['tmp_name'], "uploads/photos/" . basename($photo['name']));
    move_uploaded_file($nid['tmp_name'], "uploads/nids/" . basename($nid['name']));

    
    $conn = new mysqli('localhost', 'root', '', 'mp_data');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

 
    $sql = "INSERT INTO users (name, mobile, email, gender, division, district, parliamentary_area, photo, nid) 
            VALUES ('$name', '$mobile', '$email', '$gender', '$division', '$district', '$parliamentaryArea', '{$photo['name']}', '{$nid['name']}')";

    if ($conn->query($sql) === TRUE) {
        echo "Data submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
