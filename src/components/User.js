import React, { useState } from "react";

const User = ({ name, location, contact }) => {
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h2>Location:{location}</h2>
      <h4>Contact:{contact}</h4>
    </div>
  );
};

export default User;
