import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../css/BookConsultation.css';
import Header from "../components/Header";

function BookConsultation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [serviceDetails, setServiceDetails] = useState("");
  const [postal, setPostal] = useState("");
  const navigate = useNavigate();
  const { postalCode } = useParams();

  useEffect(() => {
    setPostal(postalCode);
  }, [postalCode])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address1":
        setAddress1(value);
        break;
      case "address2":
        setAddress2(value);
        break;
      case "serviceDetails":
        setServiceDetails(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button clicked");
    const formData = {
      name,
      email,
      phone,
      address1,
      address2,
      serviceDetails,
      postalCode: postal 
    };
  
    // Making a POST request to the backend
    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Redirect to a success page or perform other actions
      navigate("/success"); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div className="book-consultation">
      <Header title="Book Your Consultation Now" />
      <div className="service-details">
        <h1>Booking Information</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name (required)"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (required)"
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1 (required)"
            value={address1}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={address2}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="postal"
            placeholder="Postal Code"
            value={postal}
            readOnly
          />
          <textarea
            name="serviceDetails"
            placeholder="Service Details (required)"
            value={serviceDetails}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookConsultation;