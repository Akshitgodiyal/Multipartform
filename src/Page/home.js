import React, { useState } from "react";
import StepForm from "../components/form/form";
import { Button, TextInput } from "@mantine/core";
import MultiStepForm from "../components/form/form";
import Banner from "../components/banner";
const HomePage = () => {
  const [currentStep,setCurrentStep] = useState(0)
  const activeStepTrace = (step) =>{
    setCurrentStep(step);
  }
  return (
    <>
     <Banner step={currentStep}/>
    <main className="container mx-auto py-8 px-4 h-max mb-10">
     
      <div className="p-4 ">
        {/* <TextInput label="Your name" placeholder="Enter your name" className="mb-4" />
      <Button className="bg-blue-500 hover:bg-blue-600">Submit</Button> */}
        <MultiStepForm activeStepTrace={activeStepTrace}/>
      </div>
    </main>
    </>
  );
};

export default HomePage;
