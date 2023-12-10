import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { contactConfig } from "./content_option";
import "./two.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oeeqe78",
        "template_adau8hi",
        form.current,
        "iyB2vlDNkZJLDq3QX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container xs={12} md={6} style={{ height: "120vh" }}>
      <Box>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1
              className="display-4 mb-4"
              style={{ color: "#987456", fontWeight: "bold" }}
            >
              Contact Me
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      </Box>
      <Box>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact__form w-100"
            >
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <br />

              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />

              <Row>
                <Col lg="12" className="form-group">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="btn ac_btn"
                    type="submit"
                    style={{ color: "#fff" }}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Box>
    </Container>
  );
};

export default Contact;
