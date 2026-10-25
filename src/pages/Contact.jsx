import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(true);
    e.target.reset();
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <h2 className="text-center fw-bold mb-2">Contact Us</h2>

          <p className="text-center text-secondary mb-4">
            Have any questions? We'd love to hear from you!
          </p>

          <form className="card shadow-sm border-0 p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>

            {formData && (
              <div className="alert alert-success mt-3 mb-0">
                Your message has been submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
