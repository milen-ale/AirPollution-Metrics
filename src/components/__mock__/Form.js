/* eslint-disable */
import React from 'react';


const Form = () => (
  <div className="form-container">
  
    <div className="text-center py-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.target[0].value, e.target[1].value);
          clear(e.target[0].value = '', e.target[1].value = '');
        }}
      >
        <label htmlFor="latitude">
          <p className="text">Latitude</p>
          <input
            className=""
            name="lat"
            id="latitude"
            type="number"
            placeholder="Enter a Latitude..."
            onChange={(e) => e.target.value}
            required
          />
          <br />
        </label>
        <label htmlFor="longitude">
          <p className="text">Longitude</p>
          <input
            className=""
            name="long"
            id="longitude"
            type="number"
            placeholder="Enter a Longitude..."
            onChange={(e) => e.target.value}
            required
          />
          <br />
        </label>
        <input
          className="search-btn"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  </div>
);

export default Form;
