import { useState, useEffect } from "react";
import { Stepper, Button, rem } from "@mantine/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Firstpart from "./firstpart";
import DataResults from "./secondpart";
import PaymentForm from "./thirdpart";
import classes from "./form.module.css";
const MultiStepForm = ({ activeStepTrace }) => {
  const stripePromise = loadStripe(
    "pk_test_51QVUpMKuhfXM3L5cR8GqC4TVoAOdhQqYQ7ffBeTp9KCZKvG7i8itVZruK4JxQxFQ2eGeMRAEcLIYmdT2Cu6lS1Bp00dq1S4diy"
  );

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
  const appearance = {
    theme: 'flat',
    variables: {
      fontFamily: '"Gill Sans", sans-serif',
      fontLineHeight: '1.5',
      borderRadius: '10px',
      colorBackground: '#F6F8FA',
      accessibleColorOnColorPrimary: '#262626',
    },
    rules: {
      '.Block': {
        backgroundColor: 'var(--colorBackground)',
        boxShadow: 'none',
        padding: '12px',
      },
      '.Input': {
        padding: '12px',
      },
      '.Input:disabled, .Input--invalid:disabled': {
        color: 'lightgray',
      },
      '.Tab': {
        padding: '10px 12px 8px 12px',
        border: 'none',
      },
      '.Tab:hover': {
        border: 'none',
        boxShadow:
          '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
      },
      '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
        border: 'none',
        backgroundColor: '#fff',
        boxShadow:
          '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
      },
      '.Label': {
        fontWeight: '500',
      },
    },
  };
  function NumberCircle({
    number,
    bgColor = "grey",
    textColor = "black",
    size = "31px",
  }) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: "50%",
          width: size,
          fontSize: "20px",
          height: size,
          fontWeight: "700",
        }}
      >
        {number}
      </div>
    );
  }

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };
  const setStepTrace = (step) => {
    setActiveStep(step);
    activeStepTrace(step);
  };
  return (
    <div className="p-4 w-full mx-auto">
      <div className="w-[80%] mx-auto">
        {/* Custom Stepper */}
        <div className="custom-stepper-container">
          <Stepper
            active={activeStep}
            onStepClick={setStepTrace}
            radius="lg"
            size="sm"
            allowNextStepsSelect={formData.cptCodes.length !== 0}
            // iconSize={20}
            styles={{
              separator: {
                display: "none",
              },
            }}
            classNames={{
              root: "custom-stepper-root",
              separator: classes.separator,
              //  stepBody:classes.stepBody,
              //  step:classes.step
            }}
          >
            <Stepper.Step
              label="SEARCH INFO"
              icon={
                <NumberCircle
                  number={1}
                  bgColor={activeStep !== 0 ? "#488AC8" : "#fff"}
                  textColor={activeStep !== 0 ? "#FFFFFF" : "#488AC8"}
                />
              }
              style={{
                color: activeStep === 0 ? "#fff" : "#69738B",
                backgroundColor: activeStep === 0 ? "#488AC8" : "#fff",
                padding: "5px 40px",
                height: "50px",
                //alignContent:"flex-end",
                border: "1px solid #f1f1f1",
                borderRadius: "0px",
                width: "236px",
              }}
              completedIcon={
                <NumberCircle
                  number={1}
                  bgColor={"#E6E6E6"}
                  textColor={"#69738B"}
                />
              } // Remove the default tick icon
            >
              <Firstpart
                setFormData={setFormData}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                formData={formData}
              />
            </Stepper.Step>
            <Stepper.Step
              label="CHOOSE DATA"
              className="search-step-box"
              icon={
                <NumberCircle
                  number={2}
                  bgColor={activeStep !== 1 ? "#E6E6E6" : "#fff"}
                  textColor={activeStep !== 1 ? "#69738B" : "#488AC8"}
                />
              }
              style={{
                color: activeStep === 1 ? "#fff" : "gray",
                backgroundColor: activeStep === 1 ? "#488AC8" : "#fff",
                padding: "5px 40px",
                height: "50px",
                border: "1px solid #f1f1f1",
                borderRadius: "0px",
                width: "236px",
              }}
              completedIcon={
                <NumberCircle
                  number={2}
                  bgColor={"#E6E6E6"}
                  textColor={"#69738B"}
                />
              } // Remove the default tick icon
            >
              <DataResults  
                activeStep={activeStep}
                setActiveStep={setActiveStep} />
            </Stepper.Step>
            <Stepper.Step
            allowStepSelect={false}
              icon={
                <NumberCircle
                  number={3}
                  bgColor={activeStep !== 2 ? "#E6E6E6" : "#fff"}
                  textColor={activeStep !== 2 ? "#69738B" : "#488AC8"}
                />
              }
              style={{
                color: activeStep === 2 ? "#fff" : "gray",
                backgroundColor: activeStep === 2 ? "#488AC8" : "#fff",
                padding: "5px 40px",
                height: "50px",
                //alignContent:"flex-end",
                border: "1px solid #f1f1f1",
                borderRadius: "0px",
                width: "236px",
              }}
              label="MAKE PAYMENT"
              completedIcon={
                <NumberCircle
                  number={2}
                  bgColor={"#E6E6E6"}
                  textColor={"#69738B"}
                />
              } // Remove the default tick icon
            >
              <Elements stripe={stripePromise} options={{ appearance }}>
                <PaymentForm />
              </Elements>
            </Stepper.Step>
          </Stepper>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
