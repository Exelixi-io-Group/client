import { useState } from "react";
import "./style.css";
import PropTypes from 'prop-types';



export const ElMultiAddBox = ({setCompanyList,companyList}) => {
  const [companyDetails, setCompanyDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = () => {
    // Check if any of the required fields are empty
    if (
      !companyDetails.company_name ||
      !companyDetails.designation ||
      !companyDetails.duration
    ) {
      // If any of the required fields are empty, return early
      return;
    }

    // Check if the companyList has fewer than 3 items
    if (companyList?.length < 3) {
      setCompanyList((prev) => [...prev, companyDetails]);
      setCompanyDetails({
        company_name: "",
        designation: "",
        duration: "",
      });
    }
  };

  const renderChip = companyList?.map((item, id) => {
    return (
      <span className="el-chip" key={id}>
        {item?.company_name} - {item?.duration}
      </span>
    );
  });

  return (
    <>
      <div className="el-chip-container">{renderChip}</div>
      <div className="el-multi-add-box">
        <div className="el-multi-add-inputs">
          <label htmlFor="company_name">Company Name</label>
          <input
            onChange={handleChange}
            name="company_name"
            type="text"
            value={companyDetails.company_name}
            placeholder="Enter your Company Name"
          />
          <label htmlFor="designation">Designation</label>
          <input
            onChange={handleChange}
            name="designation"
            type="text"
            value={companyDetails.designation}
            placeholder="Enter your Designation"
          />
          <label htmlFor="duration">Duration</label>
          <input
            onChange={handleChange}
            name="duration"
            type="text"
            value={companyDetails.duration}
            placeholder="Enter Duration"
          />
        </div>
        <div onClick={handleClick} className="add-circle">
          +
        </div>
      </div>
    </>
  );
};

ElMultiAddBox.propTypes={
    setCompanyList:PropTypes.func,
    companyList:PropTypes.array
} 