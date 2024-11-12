import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addContact, EditContactSlice } from "../redux/ContactSlice";

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
    if(id){
      dispatch(EditContactSlice({id,...input}))
    }else{

      dispatch(addContact(input));
    }

    setInput({ name: "", phone: "", email: "" });
    navigate("/");
  };

  const { id } = useParams();
  console.log("🚀 ~ AddContact ~ id:", id);

  const con = useSelector((state) => state.contact.contacts);
  console.log("🚀 ~ AddContact ~ con:", con);
  const EditContact = con.find((contact) => contact.id === id);
  console.log("🚀 ~ AddContact ~ EditContact:", EditContact);

  useEffect(()=>{
    if(EditContact){
      setInput(EditContact)
    }
  },[EditContact])

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
                      color: "white",
                      fontSize: "16px",
                    }}
                  >
                    Cancel
                  </Link>
                </div>
                <div className="text-white">
                  <h4>{id ? "Edit Contact" : "New Contact"}</h4>
                </div>
                <div className="Links">
                  <button
                    className="text-white border-0"
                    style={{ backgroundColor: "#5f9ea0" }}
                    type="submit"
                  >
                    Done
                  </button>
                </div>
              </div>

              <Form.Group className="field">
                <Form.Label column className="text-white">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={
                   input.name
                  }
                  onChange={handleInput}
                  className="inputField"
                  placeholder="Name"
                  required
                />
              </Form.Group>

              <Form.Group className="field">
                <Form.Label column className="text-white">
                  Phone No.
                </Form.Label>
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
                <Form.Label column className="text-white">
                  email
                </Form.Label>
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
