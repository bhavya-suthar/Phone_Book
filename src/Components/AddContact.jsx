import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <>
      <div className="main">
        <div className="phone-screen">
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
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "16px",
                }}
              >
                Done
              </Link>
            </div>
          </div>
          <div className="formDiv">
            <Form>
              <Form.Group className="field">
                <Form.Label column>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="inputField"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group className="field">
                <Form.Label column>Phone No.</Form.Label>
                <Form.Control
                  className="inputField"
                  type="text"
                  placeholder="Phone No."
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
