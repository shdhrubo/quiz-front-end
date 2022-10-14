import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.type.value);
    navigate(`/add-${event.target.type.value}`);
  };
  return (
    <div>
      <h2>DashBoard</h2>
      <form action="" onSubmit={handleSubmit}>
        <label for="type">Choose Question Type:</label>
        <br />
        <select id="type" name="type">
          <option value="short">Short</option>
          <option value="mcq">MCQ</option>
        </select>
        <br />
        <input type="submit" value="Add Question" />
      </form>
    </div>
  );
};

export default Dashboard;
