import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { UserDetailsMapper } from "../../Shared";
import "./style.css";
import { ElMultiAddBox } from "../../../component";
import { useFetch } from "../../../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserForm = () => {
  const [step, setStep] = useState(1);
  const [companyList, setCompanyList] = useState([]);
  const { loading, error, data, fetchData } = useFetch();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const steps = [
    {
      label: "Candidate Details",
      fields: [
        "firstName",
        "lastName",
        "dob",
        "fatherName",
        "motherName",
        "adharNumber",
        "panNumber",
        "email",
        "altEmail",
        "phoneNumber",
        "address",
      ],
    },
    {
      label: "Education Details",
      fields: [
        "education.schoolName",
        "education.schoolLocation",
        "education.schoolYearOfPassing",
        "education.collegeName",
        "education.collegeLocation",
        "education.collegeStream",
        "education.collegeFieldOfStudy",
        "education.institutionName",
        "education.institutionLocation",
        "education.degree",
        "education.discipline",
        "education.institutionYearOfPassing",
        "referalCode",
      ],
    },
  ];

  console.log(loading, data, error);

  return (
    <>
      <section className="user-registration">
        <div className="form-container">
          <h2 className="form-header">{steps[step - 1].label}</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              dob: "",
              fatherName: "",
              motherName: "",
              adharNumber: "",
              panNumber: "",
              email: "",
              altEmail: "",
              phoneNumber: "",
              address: "",
              education: {
                schoolName: "",
                schoolLocation: "",
                schoolYearOfPassing: "",
                collegeName: "",
                collegeLocation: "",
                collegeStream: "",
                collegeFieldOfStudy: "",
                institutionName: "",
                institutionLocation: "",
                degree: "",
                discipline: "",
                institutionYearOfPassing: "",
              },
              referalCode: "",
              workExperience: [],
            }}
            validationSchema={Yup.object({
              // Validation schema remains the same
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // Handle form submission here
              values.workExperience = companyList;

              await fetchData(
                `${import.meta.env.VITE_REACT_APP_DATA_API}/userDetails`,
                "POST",
                values
              );

              if (error) {
                toast.error("Form Sumission Failed");
              }
              if (data) {
                resetForm();
                setCompanyList([]);
                setSubmitting(false);
                toast.success("Form Submitted");
              }
              // Clear the form
            }}
          >
            <Form>
              {/* Render fields for the current step */}
              {steps[step - 1].fields.map((fieldName) => {
                let formatedLabel = fieldName.split(".");
                if (formatedLabel.length > 1) {
                  formatedLabel = formatedLabel[1].toUpperCase();
                }
                return (
                  <div key={fieldName} className="form-group">
                    <label htmlFor={fieldName}>
                      {UserDetailsMapper[fieldName]}
                    </label>
                    <Field name={fieldName} type="text" />

                    <ErrorMessage
                      name={fieldName}
                      component="div"
                      className="error-message"
                    />
                  </div>
                );
              })}
              {step > 1 && (
                <div className="form-group">
                  {" "}
                  <ElMultiAddBox
                    companyList={companyList}
                    setCompanyList={setCompanyList}
                  />
                </div>
              )}
              {/* Render navigation buttons */}
              <div className="form-navigation">
                {step > 1 && (
                  <button type="button" className="button" onClick={prevStep}>
                    Previous
                  </button>
                )}
                {step < steps.length && (
                  <button type="button" className="button" onClick={nextStep}>
                    Next
                  </button>
                )}

                {step === steps.length && (
                  <button type="submit" className="button">
                    Submit
                  </button>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
