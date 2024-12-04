import React from "react";
import { Button, MultiSelect, Select, TextInput } from "@mantine/core";
import "./style.css";

function Firstpart({ activeStep, formData, setFormData, setActiveStep }) {
  const nextStep = () => setActiveStep((current) => Math.min(current + 1, 2));
  const prevStep = () => setActiveStep((current) => Math.max(current - 1, 0));

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* CPT Details Section */}
      <div style={{ marginBottom: "30px" }}>
        <div className="form-title ">CPT Details</div>
        <hr className="mt-2 mb-4  text-[#E6E6E6]" />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          <MultiSelect
            className="form-input-title"
            label="CPT Code"
            placeholder="Select"
            required
            data={["Code 1", "Code 2", "Code 3"]} // Replace with actual CPT codes
            value={formData.cptCodes || []} // Ensure formData.cptCodes is always an array
            onChange={(value) => handleChange("cptCodes", value)} // Update state
          />
        </div>
      </div>

      {/* Provider Details Section */}
      <div style={{ marginBottom: "30px" }}>
        <div className="form-title">Provider Details</div>
        <hr className="mt-2 mb-4  text-[#E6E6E6]" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TextInput
            className="form-input-title"
            label="NPI"
            placeholder="Enter NPI"
            value={formData.npi || ""}
            onChange={(e) => handleChange("npi", e.target.value)}
          />
          <Select
            className="form-input-title"
            label="Provider Type"
            placeholder="Select"
            data={["Type 1", "Type 2"]}
            value={formData.providerType || ""}
            onChange={(value) => handleChange("providerType", value)}
          />
          <Select
            className="form-input-title"
            label="Provider Org"
            placeholder="Select"
            data={["Org 1", "Org 2"]}
            value={formData.providerOrg || ""}
            onChange={(value) => handleChange("providerOrg", value)}
          />
          <TextInput
            className="form-input-title"
            label="County"
            placeholder="Enter County"
            value={formData.county || ""}
            onChange={(e) => handleChange("county", e.target.value)}
          />
          <Select
            className="form-input-title"
            label="State"
            placeholder="Select"
            data={["State 1", "State 2"]}
            value={formData.state || ""}
            onChange={(value) => handleChange("state", value)}
          />
          <TextInput
            className="form-input-title"
            label="Zip Code"
            placeholder="Enter Zip Code"
            value={formData.zipCode || ""}
            onChange={(e) => handleChange("zipCode", e.target.value)}
          />
          <Select
            className="form-input-title"
            label="Mac Locality"
            placeholder="Select"
            data={["Locality 1", "Locality 2"]}
            value={formData.macLocality || ""}
            onChange={(value) => handleChange("macLocality", value)}
          />
        </div>
      </div>

      {/* Payer Details Section */}
      <div style={{ marginBottom: "30px" }}>
        <div className="form-title">Payer Details</div>
        <hr className="mt-2 mb-4  text-[#E6E6E6]" />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          <Select
            className="form-input-title"
            label="Payer"
            placeholder="Select"
            data={["Payer 1", "Payer 2"]}
            value={formData.payer || ""}
            onChange={(value) => handleChange("payer", value)}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 mx-auto" style={{ width: "700px" }}>
        <div className="flex gap-5 justify-end">
          {activeStep < 1 && (
            <Button color="#488AC8" onClick={nextStep}>
              Get Price
            </Button>
          )}
          <Button color="#666666" variant="default" onClick={prevStep}>
            Reset All
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Firstpart;
