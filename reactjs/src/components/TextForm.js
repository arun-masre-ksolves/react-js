import React from 'react';

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label">textarea</label>
        <textarea className="form-control my-3" id="mybox" rows="10"></textarea>
        <button className='btn btn-primary'>Convert to Uppercase</button>
        </div>
      </div>
  );
}
