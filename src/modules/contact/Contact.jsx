import React, { useRef } from "react";
import {Button, Form} from "react-bootstrap";
import {dataContact} from "../helper/dataSkill";
import {Link} from "react-router-dom";
import {FaFacebook, FaYoutube} from "react-icons/fa";
import emailjs from "@emailjs/browser"
import {ErrorAlert, Success} from "../widget/SweetAlert";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm("service_olvgf9l", "template_jx7lr66", form.current, "DLzmkq9Fe6Ydadk_q")
        .then((result) => {
          Success("Email has sent!");
          form.current.reset();
        })
        .catch((err) => {
          ErrorAlert("Email hasn't sent!");
        });
  };

  return (
    <div className="row my-5 mx-2 pb-5">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h3 className="fs-3 fw-bold">Get in Touch</h3>
        <p className="text-secondary">
          You can write everything you want in the text area. But please put the
          real email in the input email box.
        </p>
        {dataContact.map((item) => (
            <div key={item.id} className="d-flex align-items-center">
              <Link to={item.link} className="contact-hover">
                <i className="fs-3 text-secondary">{item.icon}</i>
              </Link>
              <div className="d-flex flex-column lh-1 ms-4 align-items-start mt-3">
                <p className="fw-bold ">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
        ))}
        <hr/>
        <h5 className="fw-bold">Follow my Content Team:</h5>
        <div className="d-flex">
          <Link target="_blank" to="https://www.youtube.com/@3Cast-%E1%9E%9F%E1%9F%92%E1%9E%9A%E1%9F%92%E1%9E%8F%E1%9F%81%E1%9E%9F%E1%9E%83%E1%9E%B8">
            <FaYoutube className="text-danger fs-3"/>
          </Link>
          <Link target="_blank" to="https://www.facebook.com/profile.php?id=61567683958745" className="ms-2">
            <FaFacebook className="fs-3" />
          </Link>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
        <Form ref={form} onSubmit={sendEmail} className="py-5 px-4 bg-light rounded-5 h-100" style={{boxShadow : "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
          <Form.Control
              type="text"
              name="name_form"
              placeholder="Your name"
              className="border-0 no-focus rounded-3"
              required
          />
          <Form.Control
              type="email"
              placeholder="Your Real Email ..."
              name="email_form"
              className="border-0 no-focus my-4 rounded-3"
              required
          />
          <textarea
              className="border-0 no-focus w-100 rounded-3 mb-3 ps-3"
              placeholder="Your Message"
              name="message"
              required
          />
          <hr/>
          <p className="text-secondary">
            When you fill out the form , you will get the respond message from me
            in your gmail box .
          </p>
          <Button type="submit" className="btn btn-dark rounded-5 py-3 float-end w-75">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
