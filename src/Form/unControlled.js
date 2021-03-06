import React, { useRef, useState } from 'react';
const UnControlled = () => {
  //it like a useState only its preserve the value. NO RENDER
  const yName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(yName.current.value);
    const yourName = yName.current.value;
    setShow(yourName);
    if (yourName == '') {
      alert('Please fill correct data');
    }
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Good Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            ref={yName}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <p>{show ? `Your are wright this ${show}` : ''}</p>
    </div>
  );
};
export default UnControlled;
