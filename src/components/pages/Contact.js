import React from "react";
import "../../index.css";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_uln6h1q",
      "template_of8y0ra",
      toSend,
      "user_hSyhxScEt0cgIEqbi0NwJ"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="from_name"
        placeholder="from name"
        value={toSend.from_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="reply_to"
        placeholder="Your email"
        value={toSend.reply_to}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Your message"
        value={toSend.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
