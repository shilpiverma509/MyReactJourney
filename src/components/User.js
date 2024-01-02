import React, { useState, useEffect } from "react";

const User = ({ name, location, contact }) => {
  console.log("usee");
  useEffect(() => {
    console.log("use11sr");
    const timer = setInterval(() => {
      console.log("setInterval() called");
    }, 1);
    return () => {
      clearInterval(timer);
      console.log("useEffect return called");
    };
    console.log("render");
  }, []);
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h2>Location:{location}</h2>
      <h4>Contact:{contact}</h4>
    </div>
  );
};

export default User;
