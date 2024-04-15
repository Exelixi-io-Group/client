import PropTypes from "prop-types";
import "./style.css"; // Styles for the circle component

export const ELCircle = ({ value = 0, labelText = "Total users" }) => {
  return (
    <>
      <div>
        <div className="el-circle">
          <div className="el-circle-inner">
            <span className="el-circle-value">{value}</span>
          </div>
        </div>
        <p className="el-circle-label">
          {labelText} : {value}
        </p>
      </div>
    </>
  );
};

ELCircle.propTypes = {
  value: PropTypes.number.isRequired,
  labelText: PropTypes.string,
};
