import { BiMessageRounded } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteContact } from "../redux/ContactSlice";
import { IoIosArrowBack } from "react-icons/io";

const ContactDetails = () => {
  const { id } = useParams();
  console.log("🚀 ~ Contacts ~ id:", id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const con = useSelector((state) => state.contact.contacts);
  const findContact = con.find((contact) => contact.id == id);
  console.log("🚀 ~ ContactDetails ~ findContact:", findContact);

  const handleDelete = () => {
    dispatch(deleteContact(findContact.id));
  };
  if (!findContact) {
    navigate("/");
  }

  return (
    <div className="main">
      <div className="phone-screen">
        <div className="phone-wrap">
          <h3 className="text-white">
            {" "}
            <IoIosArrowBack
              style={{ cursor: "pointer"}}
              onClick={() => navigate("/")}
            />
            Details
          </h3>
          <Link
                to={`/add/${id}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Edit
              </Link>
            
        </div>
        <h5 className="d-flex justify-content-center text-white" >{findContact.name}</h5>
        <div className="d-flex m-3 gap-2 align-items-start justify-content-between">
          {" "}
          <div className="d-flex gap-3 text-white">
            {" "}
            <h6 className="text-white"> Phone No. :</h6>
            {findContact.phone}
          </div>
          {/* <a href="callto:+918238627119"> //when you want to call using skype app*/}
          <div className="d-flex gap-2 text-white">
            <a
              href={`tel:+91${findContact.phone}`}
              style={{ fontSize: "20px", color: "white" }}
            >
              {" "}
              {/* when you want to call selected app  */}
              <IoCallOutline />
            </a>
            <a
              href={`SMS:+91${findContact.phone}`}
              style={{ fontSize: "20px", color: "white" }}
            >
              <BiMessageRounded />{" "}
              {/* when you want to msg using selected app */}
            </a>
          </div>
        </div>
        <div className="d-flex m-3 gap-2 align-items-start text-white">
          {" "}
          <h6> Email :</h6> {findContact.email}{" "}
        </div>
        <h6 className="m-3 text-white">Call Logs</h6>
        <h6 className="m-3 text-white">Not in groups</h6>
        <h6 className="m-3 text-white">Default ringtone</h6>
        <Link
          className="m-3"
          style={{ textDecoration: "none", color: "red" }}
          onClick={handleDelete}
        >
          Delete Contact
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
