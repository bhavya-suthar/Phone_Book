import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Contacts = () => {
  const con = useSelector((state) => state.contact.contacts);
  console.log("🚀 ~ Contacts ~ con:", con);

  return (
    <>
      <div className="main">
        <div className="phone-screen">
          <div className="phone-wrap">
            <div className="contact">
              <h2>Contacts</h2>
            </div>
            <div className="Links">
              <Link
                to={"/edit"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                Edit
              </Link>
              <Link to={"/add"}>
                <FaPlus style={{ fontSize: "25px", color: "black" }} />
              </Link>
            </div>
          </div>
          <div>
            <ul>
              {con.map((ele,index)=>(
                <div className="d-flex gap-3" key={index}>
                <h6>{index + 1}</h6>
                <Link to={`/details/${ele.id}`} style={{ textDecoration:"none",fontSize: "15px", color: "black" }}>{ele.name}</Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
