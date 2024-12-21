import { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    subject: "",
    Message: "",
  });
  const data = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const send = async (e) => {
    e.preventDefault();
    const { Name, email, subject, Message } = user;
    if (!Name || !email || !subject || !Message) {
      alert("Please fill in all fields");
      return;
    }
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Name, email, subject, Message }),
    };
    const response = await fetch(
      "https://react-ecommerce-contact-default-rtdb.firebaseio.com/Message.json",
      option
    );
    if (response.ok) {
      alert("Message Sent Successfully");
      setUser({ Name: "", email: "", subject: "", Message: "" });
    } else {
      alert("Error occurred, message failed to send.");
    }
  };
  return (
    <div className="contact">
      {" "}
      <div className="container">
        {" "}
        <div className="form">
          {" "}
          <h2># Contact Us</h2>{" "}
          <form method="POST" onSubmit={send}>
            {" "}
            <div className="box">
              {" "}
              <div className="label">
                {" "}
                <h4>Name</h4>{" "}
              </div>{" "}
              <div className="input">
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  value={user.Name}
                  name="Name"
                  onChange={data}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="label">
                {" "}
                <h4>Email</h4>{" "}
              </div>{" "}
              <div className="input">
                {" "}
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  name="email"
                  onChange={data}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="label">
                {" "}
                <h4>Subject</h4>{" "}
              </div>
              <div className="input">
                {" "}
                <input
                  type="text"
                  placeholder="Subject"
                  value={user.subject}
                  name="subject"
                  onChange={data}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="label">
                {" "}
                <h4>Message</h4>{" "}
              </div>{" "}
              <div className="input">
                {" "}
                <textarea
                  placeholder="Message!"
                  value={user.Message}
                  name="Message"
                  onChange={data}
                />{" "}
              </div>{" "}
            </div>{" "}
            <button type="submit">Send</button>
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Contact;
