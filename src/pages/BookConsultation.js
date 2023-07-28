import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../css/BookConsultation.css';
import Header from "../components/Header";

function BookConsultation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [serviceDetails, setServiceDetails] = useState("");
  const navigate = useNavigate();
  const { postalCode } = useParams();

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
    console.log("Submitted data:", {
      name,
      email,
      phone,
      address1,
      address2,
      serviceDetails,
      postalCode
    });
    // Redirect to a success page or perform other actions
  };

  return (
    <div className="book-consultation">
      <Header />
      <div className="service-details">
        <h1>Book Consultation</h1>
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