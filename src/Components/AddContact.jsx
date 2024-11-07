import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addContact } from "../redux/ContactSlice";

const AddContact = () => {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // console.log("🚀 ~ AddContact ~ input:", input);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ handleSubmit ~ input:", input);
    dispatch(addContact(input));
    setInput({ name: "", phone: "", email: "" });
    navigate("/");
  };

  return (
    <>
      <div className="main">
        <div className="phone-screen">
          <div className="formDiv">
            <Form onSubmit={handleSubmit}>
              <div className="phone-wrap">
                <div className="Links">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "16px",
                    }}
                  >
                    Cancel
                  </Link>
                </div>
                <div>
                  <h4>New Contact</h4>
                </div>
                <div className="Links">
                  <button className="bg-white border-0" type="submit">
                    Done
                  </button>
                </div>
              </div>

              <Form.Group className="field">
                <Form.Label column>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleInput}
                  className="inputField"
                  placeholder="Name"
                  required
                />
              </Form.Group>

              <Form.Group className="field">
                <Form.Label column>Phone No.</Form.Label>
                <Form.Control
                  className="inputField"
                  name="phone"
                  value={input.phone}
                  onChange={handleInput}
                  type="number"
                  placeholder="Phone No."
                  required
                />
              </Form.Group>
              <Form.Group className="field">
                <Form.Label column>email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                  className="inputField"
                  placeholder="email"
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
