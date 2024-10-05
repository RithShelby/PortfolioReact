import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vpnsm6b",
        "template_znsn4qh",
        form.current,
        "Ma6gvuUw5YUUoGB-n"
      )
      .then(
        () => {
          setMessage("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setMessage(`Failed to send email: ${error.text}`);
        }
      );
  };

  return (
    <div className="row my-5 mx-2">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h3 className="fs-3 fw-bold">Get in Touch 🤩 </h3>
        <p className="text-secondary">
          You can write everything you want in the text area. But please put the
          real email in the input email box.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="form-control"
            required
          />

          <input
            type="email"
            placeholder="Your Real Email ..."
            name="user_email"
            className="form-control my-4"
            required
          />
          <textarea
            className="form-control"
            placeholder="Your Message"
            name="user_text"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-dark my-3 w-100"
          />
        </form>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 bg-dark rounded-3 mb-5 p-3">
        <h3 className="fs-3 fw-bold text-light">Contact Information</h3>
        <p className="text-light">
          When you fill out the form , you will get the respond message from me
          in your gmail box ✌️.
        </p>
        <div className="d-flex">
          <FaPhoneAlt className="text-light fs-3" />
          <p className="text-light">+885 17225628</p>
        </div>
        <div className="d-flex my-4">
          <HiOutlineMail className="text-light fs-3" />
          <p className="text-light">chhunnatharith@gmail.com</p>
        </div>
        <div className="d-flex">
          <FaLocationDot className="text-light fs-3" />
          <p className="text-light">St.10A/Phnom Penh,Cambodia</p>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact;
