import React, { useState } from "react";

function Questions({ ques }) {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      <button onClick={() => setisopen(!isopen)}> {isopen ? "-" : "+"}</button>
      {ques?.title}
      <br />
      <div className="answer">{isopen && ques?.info}</div>
    </>
  );
}

export default Questions;
