import React, { useState, useEffect } from "react";
import { Button, MultiSelect, Select, TextInput } from "@mantine/core";
import { Tooltip } from "react-tooltip";
import "./style.css";
import axios from "axios";
import useSWR from "swr";
import formService from "../../api/formService";
import { BiBorderBottom } from "react-icons/bi";
// Create a fetcher function
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Firstpart({ activeStep, formData, setFormData, setActiveStep }) {
  const nextStep = () => setActiveStep((current) => Math.min(current + 1, 2));
  const prevStep = () => setActiveStep((current) => Math.max(current - 1, 0));
  const [cptRecords, setCptRecords] = useState([{lable:"tets",value:"test"}]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [zips, setZipCodes] = useState([]);
  const [payers, setPayers] = useState([]);
  const [queryData, setQueryData] = useState("");
  const [providerType, setProviderType] = useState([]);
  const [providerOrg, setProviderOrg] = useState([]);
  const [macLocality, setMacLocality] = useState([]);
  const [npiData,setNpiData] = useState([])
  //  const { data, error, isLoading } = useSWR(formService.getAllTreatments(), fetcher);
  const getData = () => {
    formService
      .getAllTreatments()
      .then((response) => {
        const treatments = response.data.data.map((item) => {
          const { treatmentCode, treatmentDescription } = item;
          return {
            value: treatmentCode,
            label: `${treatmentCode}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${treatmentDescription}`,
          };
        });
        setCptRecords(treatments);
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error if the request fails
      });

    formService
      .getOrganizerNames()
      .then((response) => {
        setProviderOrg(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error if the request fails
      });

    formService
      .getAllCountries()
      .then((response) => {
        const countries = response.data.data.map((item) => {
          const { county_id, county_name } = item;
          return {
            value: String(county_id),
            label: county_name,
          };
        });
        setCountries(countries);
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error if the request fails
      });

    formService
      .getAllStates()
      .then((response) => {
        const states = response.data.data.map((item) => {
          const { state_id, state_name } = item;
          return {
            value: String(state_id),
            label: state_name,
          };
        });
        setStates(states);
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error if the request fails
      });

    formService
      .getAllPayers()
      .then((response) => {
        const payers = response.data.data.map((item) => {
          const { payer_id, payer_name } = item;
          return {
            value: String(payer_id),
            label: payer_name,
          };
        });
        setPayers(payers);
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error if the request fails
      });

    formService
      .getAllZipCodes()
      .then((response) => {
        const zips = response.data.data.map((item) => {
          const { zip_code_id, zip_code_name } = item;
          return {
            value: String(zip_code_name),
            label: zip_code_name,
          };
        });
        setZipCodes(zips);
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error if the request fails
      });

    // formService
    //   .getAllProviderTypes()
    //   .then((response) => {
    //     const zips = response.data.data.map((item) => {
    //       const { zip_code_id, zip_code_name } = item;
    //       return {
    //         value: String(zip_code_id),
    //         label: zip_code_name,
    //       };
    //     });
    //     setZipCodes(zips);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error); // Log the error if the request fails
    //   });

    // formService
    //   .getAllMacLocality()
    //   .then((response) => {
    //     const zips = response.data.data.map((item) => {
    //       const { zip_code_id, zip_code_name } = item;
    //       return {
    //         value: String(zip_code_id),
    //         label: zip_code_name,
    //       };
    //     });
    //     setZipCodes(zips);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error); // Log the error if the request fails
    //   });
  };

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = Object.entries(queryData)
        .filter(([_, value]) => value) // Exclude empty fields
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");
      formService
        .getNpiRecords(`?${queryParams}`)
        .then((response) => {
          console.log("response >>", response.data.data);
          const npis = response.data.data.map((item) => {
            const { npi_name, organization_name } = item;
            return {
              value: npi_name,
              label: organization_name
            };
          });
          setNpiData(npis);
        })
        .catch((error) => {
          console.error("Error:", error); // Log the error if the request fails
        });
    };

    fetchData();
  }, [queryData]);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const queryUrlForNpi = (key, value) => {
    setQueryData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const tooltipContent = npiData
  .map((item) => `${item.label}: ${item.value}`)
  .join("<br />");

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
            style={{
              option: {
                BorderBottom: "1px solid gray",
              },
            }}
            data={cptRecords} // Replace with actual CPT codes
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
          <div>
            <TextInput
              className="form-input-title"
              label="NPI"
              value={npiData[0]?.label}
              data-tooltip-id={'npiTooltip'}
              data-tooltip-html={tooltipContent} 
              // onChange={(e) => handleChange("npi", e.target.value)}
              data-tip
              data-for="npiTooltip"
            />
             <Tooltip id={'npiTooltip'} style={{background:"#2d2d2d"}} className="custom-tooltip" />
          </div>
          {/* <div>
            <input
             className="form-input-title"
              // placeholder="Enter NPI"
              value={npiData.npi || ""}
              onChange={(e) => handleChange("npi", e.target.value)}
              data-tooltip-id={'npiTooltip'}
              data-tooltip-content={`All Values: ${npiData.join(", ")}`}
            />
            <Tooltip id={'npiTooltip'} />
          </div> */}
          <Select
            className="form-input-title"
            label="Provider Type"
            placeholder="Select"
            data={[
              "provider-1",
              "provider-2",
              "provider-3",
              "provider-4",
              "provider-5",
              "provider-6",
              "provider-7",
              "provider-8",
            ]}
            value={formData.provider_type || ""}
            onChange={(value) => queryUrlForNpi("provider_type", value)}
          />
          <Select
            className="form-input-title"
            label="Provider Org"
            placeholder="Select"
            data={providerOrg}
            value={formData.provider_org || ""}
            onChange={(value) => queryUrlForNpi("provider_org", value)}
          />
          <Select
            className="form-input-title"
            label="Country"
            placeholder="Select"
            data={countries}
            value={formData.county_id || ""}
            onChange={(value) => queryUrlForNpi("county_id", value)}
          />
          <Select
            className="form-input-title"
            label="State"
            placeholder="Select"
            data={states}
            value={formData.state_id || ""}
            onChange={(value) => queryUrlForNpi("state_id", value)}
          />
          <Select
            className="form-input-title"
            label="Zipcode"
            placeholder="Select"
            data={zips}
            value={formData.zip_code_name || ""}
            onChange={(value) => queryUrlForNpi("zip_code_name", value)}
          />
          <Select
            className="form-input-title"
            label="Mac Locality"
            placeholder="Select"
            data={["Locality 1", "Locality 2"]}
            value={formData.macLocality || ""}
            onChange={(value) => queryUrlForNpi("macLocality", value)}
          />
        </div>
      </div>

      {/* Payer Details Section */}
      <div style={{ marginBottom: "30px", width: "255px" }}>
        <div className="form-title">Payer Details</div>
        <hr className="mt-2 mb-4  text-[#E6E6E6]" />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
        >
          <Select
            className="form-input-title"
            label="Payer"
            placeholder="Select"
            data={payers}
            value={formData.payer || ""}
            onChange={(value) => handleChange("payer", value)}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 mx-auto" style={{ width: "700px" }}>
        <div className="flex gap-5 justify-end">
          {activeStep < 1 && (
            <Button
              color="#488AC8"
              onClick={nextStep}
              disabled={formData.cptCodes.length === 0}
            >
              GET PRICE
            </Button>
          )}
          <Button color="#666666" variant="default" onClick={prevStep}>
            RESET ALL
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Firstpart;
