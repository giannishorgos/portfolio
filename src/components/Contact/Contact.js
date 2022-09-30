import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="form-container">
          <div className="form-title"></div>
          <div className="contact-box">
            <div className="form-box">
              <form className="form-content" action="https://public.herotofu.com/v1/f4554bf0-31d1-11ed-8988-6185f597c7d8" method="post">
                <div className="form-input">
                  <input name="Name" id="name" type="text" placeholder="'Ονομα" required />
                </div>

                <div className="form-input">
                  <input name="Email" id="email" type="email" placeholder="E-mail" required />
                </div>
                <div className="selection-box">
                  <select className="form-input" name="Product" id="product" required>
                    <option value="Website">Website</option>
                    <option value="E-shop">E-shop</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Custom">Άλλο</option>
                  </select>
                </div>
                <div className="messagebox-container">
                  <textarea className="form-message" type="textarea" name="Message" id="message" placeholder="Γράψτε το μήνυμα σας" />
                </div>
                <div className="button-container">
                  {/* <button className="neomorphism-contact" type="submit" value="Send"> */}
                  <input className="neomorphism-contact" type="submit" value="Αποστολή" />
                  {/* </button> */}
                </div>
              </form>
            </div>
            <div className="contact-else">
              <div className="title">Θα χαρούμε να σας ακούσουμε!</div>
              <div className="paragraph">“Μαζί οποιαδήποτε ιδέα για την επιχείρηση σας, θα γίνει πραγματικότητα.”</div>
              <div className="signature">- Orana</div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient"></div>
    </section>
  );
};

export default ContactForm;
