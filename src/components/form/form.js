import { useState } from "react";
import { Stepper, Button } from "@mantine/core";
import Firstpart from "./firstpart";
import DataResults from "./secondpart";
import PaymentForm from "./thirdpart";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    cptCodes: [],
    npi: "",
    providerType: "",
    providerOrg: "",
    county: "",
    state: "",
    zipCode: "",
    macLocality: "",
    payer: "",
  });



  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="p-4 w-full mx-auto">
      <div className="w-[80%] mx-auto">
        {/* Custom Stepper */}
        <div className="custom-stepper-container">
          <Stepper
            active={activeStep}
            onStepClick={setActiveStep}
            classNames={{
              root: "custom-stepper-root",
              stepIcon: "custom-step-icon",
              stepBody: "custom-step-body",
              step: "custom-step",
            }}
          >
            <Stepper.Step
              icon={
                <div
                  style={{
                    color: activeStep === 0 ? "white" : "gray",
                    backgroundColor: activeStep === 0 ? "#488AC8" : "lightgray",
                    padding: "8px 12px",
                    borderRadius: "8px",
                  }}
                >
                  Search Info
                </div>
              }
              completedIcon={null} // Remove the default tick icon
            >
              <Firstpart setFormData={setFormData}  activeStep={activeStep} setActiveStep={setActiveStep}  formData={formData}  />
            </Stepper.Step>
            <Stepper.Step
              icon={
                <div
                  style={{
                    color: activeStep === 1 ? "white" : "gray",
                    backgroundColor: activeStep === 1 ? "#488AC8" : "lightgray",
                    padding: "8px 12px",
                    borderRadius: "8px",
                  }}
                >
                  Choose Data
                </div>
              }
              completedIcon={null} // Remove the default tick icon
            >
              <DataResults />
            </Stepper.Step>
            <Stepper.Step
              icon={
                <div
                  style={{
                    color: activeStep === 2 ? "white" : "gray",
                    backgroundColor: activeStep === 2 ? "#488AC8" : "lightgray",
                    padding: "8px 12px",
                    borderRadius: "8px",
                  }}
                >
                  Make Payment
                </div>
              }
              completedIcon={null} // Remove the default tick icon
            >
            <PaymentForm />
            </Stepper.Step>
          </Stepper>
        </div>

       
      </div>
    </div>
  );
};

export default MultiStepForm;
