import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="row text-light text-center bg-dark d-lg-flex d-md-flex d-none">
      <div className="d-flex justify-content-between flex-sm-wrap">
        <div className="d-flex flex-column">
          <h1>Logo</h1>
          <p>Name</p>
          <p>Email : chhunnatharith@gmail.com</p>
        </div>
        <div className='d-flex flex-column'>
          <p>Get in touch with contact my email or telegram</p>
          <div className='d-flex justify-content-evenly'>
          <Link to='/contact-me' className='btn btn-light rounded-4'>Get in touch</Link>
          <Link to='/project' className='btn btn-outline-light rounded-4'>See my project</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <p> © Developed in 2024 by rith</p>
      </div>
    </div>
  
  );
};

export default Footer;
