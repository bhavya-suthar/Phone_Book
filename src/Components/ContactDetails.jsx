import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();
  console.log("🚀 ~ Contacts ~ id:", id);

  const con = useSelector((state) => state.contact.contacts);
  const findContact = con.find((contact) => contact.id == id);
  return (
    <div className="main">
      <div className="phone-screen">
        <div className="phone-wrap">
          <h3>Details</h3>
        </div>
        <h5 className="d-flex justify-content-center">{findContact.name}</h5>
        <div className="d-flex m-3 gap-2 align-items-start">
          {" "}
          <h6> Phone No. :</h6>
          {findContact.phone}
        </div>
        <div className="d-flex m-3 gap-2 align-items-start">
          {" "}
          <h6> Email :</h6> {findContact.email}{" "}
        </div>
        <div className="m-3">
          <h6>Call Logs</h6>
          <h6>Not in groups</h6>
          <h6>Default ringtone</h6>
          <Link>Delete Contact</Link>
          </div>
      </div>
    </div>
  );
};

export default ContactDetails;
