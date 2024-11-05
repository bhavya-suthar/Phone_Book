import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <div className="main">
        <div className="phone-screen">
          <div className="contact">
            <h2>Contacts</h2>
          </div>
          <div className="Links">
            <Link to={"/edit"} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Edit</Link>
            <Link to={"/add"}>
              <FaPlus style={{fontSize:"25px",color:"black"}}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
