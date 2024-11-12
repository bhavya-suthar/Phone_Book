import { useState } from "react";
import AlphabetList from "react-alphabet-list";
import { FaPlus } from "react-icons/fa";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Contacts = () => {
  const con = useSelector((state) => state.contact.contacts);
  console.log("🚀 ~ Contacts ~ con:", con);
  const [selectedLetter, setSelectedLetter] = useState(null);
  console.log("🚀 ~ selectedLetter:", selectedLetter)

  const findContact = selectedLetter
  ? con.filter((contact) => contact.name.startsWith(selectedLetter))
  : con;
  console.log("🚀 ~ findContact:", findContact)

  const handleLetter = (letter) => {
    setSelectedLetter(letter === selectedLetter ? null : letter);
  };
  console.log("🚀 ~ handleLetter ~ handleLetter:", handleLetter)
  return (
    <>
      <div className="main">
        <div className="phone-screen">
          <div className="phone-wrap">
            <div className="contact">
              <h2>Contacts</h2>
            </div>
            <div className="Links">
              <Link to={"/add"}>
                <FaPlus style={{ fontSize: "25px", color: "white" }} />
              </Link>
            </div>
          </div>
          {con.length == 0 ? (
            <p className="container">No Record Found</p>
          ) : (
            <div id="scrollableDiv" style={{ height: "460px",position:"relative",overflowY:"auto",paddingRight:"30px" }}>
              {/* <InfiniteScroll
                dataLength={con.length}
                hasMore={false}
                scrollableTarget="scrollableDiv"
              > */}

              <div style={{right:"470px",width:"40px",position:"fixed"}}>
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter)=>(
                  <>
                    <div style={{display:"flex",justifyContent:"end",flexDirection:"column",width:"20px",height:"17.5px",right:"10px"}}>
                      <button style={{backgroundColor:"#5f9ea0",border:"none",color:"white",right:'20px',fontSize:"13px",fontWeight:selectedLetter === letter ? "bold":"normal"}} key={letter} onClick={()=>handleLetter(letter)}>{letter}</button>
                    </div>
                  </>
                ))}
              </div>
                {findContact.length == 0 ? (<p style={{color:"white",margin:"10px"}}>No Record Found</p>):( <AlphabetList
                data={findContact}
                nameKey={"name"}
                style={{ color: "white" }}
                alphabetListStyle={{ color: "white",display:"none" }}
                alphabetItemStyle={{ color: "black" }}
                generateFn={(contact, index) => {
                  return (
                    <div className="d-flex gap-3 m-3" key={index}>
                      {/* <h6>{index + 1}</h6> */}
                      <Link
                        to={`/details/${contact.id}`}
                        style={{
                          textDecoration: "none",
                          fontSize: "15px",
                          color: "white",
                        }}
                      >
                        {contact.name}
                      </Link>
                    </div>
                  );
                }}
              />)}
             
              {/* {con.map((ele, index) => (
                  <>
                    {" "}
                    <div className="d-flex gap-3 m-3" key={index}>
                      {/* <h6>{index + 1}</h6> 
                      <Link
                        to={`/details/${ele.id}`}
                        style={{
                          textDecoration: "none",
                          fontSize: "15px",
                          color: "white",
                        }}
                      >
                        {ele.name}
                      </Link>
                    </div>
                  </>
                ))} */}
              {/* </InfiniteScroll> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contacts;
