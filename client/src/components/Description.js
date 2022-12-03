import React from 'react'
import { useNavigate } from 'react-router-dom';

const Description = ({ form }) => {
    let navigate = useNavigate()

  return (
    <div className="description">
      <h3>Business Name: {form.businessName}</h3>
      <h3>High Needs: {form.highNeeds ? 'Yes' : 'No'}</h3>
      <h3>Hours: {form.hours}</h3>
      <button className="btn" onClick={() => navigate(`/form/${form.id}`)}>
            {" "}
            See Full Form {" "}
          </button>
    </div>
  )
}

export default Description
