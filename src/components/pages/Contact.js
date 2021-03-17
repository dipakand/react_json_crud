import React, { useState } from "react";
import { useHistory } from "react-router";

const Contact = () => {
  const history = useHistory();

  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    subject: "",
    massege: "",
  });

  const OnInputChange = (e) => {
    //console.log(e.target.value);
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault(e);
    console.log(contacts);
    alert("Massege Has Been Send Successfully...");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact page</h1>
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form onSubmit={(e) => onsubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={contacts.name}
                        onChange={(e) => OnInputChange(e)}
                      />
                      <label className="">Your name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={contacts.email}
                        onChange={(e) => OnInputChange(e)}
                      />
                      <label className="">Your email</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={contacts.subject}
                        onChange={(e) => OnInputChange(e)}
                      />
                      <label className="">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                        onChange={(e) => OnInputChange(e)}
                      >
                        {contacts.massege}
                      </textarea>
                      <label>Your message</label>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>

              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p> Swavalambi Nagar, Nagpur, IND</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 902 120 4958</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@deeptechnology.in</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
