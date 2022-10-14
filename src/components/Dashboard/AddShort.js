import React from "react";

const AddShort = () => {
  return (
    <div>
      <h2>Add Short Question</h2>
      <form action="">
        <input type="text" placeholder="Question"  required/>
        <br />
        <input type="number" placeholder="Point" required/>
        <br />
        <input type="submit" value="Add Question" />
      </form>
    </div>
  );
};

export default AddShort;
