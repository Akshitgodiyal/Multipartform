import React, { useState } from "react";
import { Table, Checkbox, Button, Badge } from "@mantine/core";
import CustomTable, { TableCAt } from "./table";

const DataResults = () => {
  // Table data
  const data = [
    { payer: "Aetna", records: 98, uniqueNPIs: 44, cost: 196 },
    { payer: "BCBS", records: 98, uniqueNPIs: 44, cost: 90 },
    { payer: "Cigna", records: 98, uniqueNPIs: 44, cost: 176 },
    { payer: "UHC", records: 98, uniqueNPIs: 44, cost: 204 },
  ];

  // State for selected rows
  const [selected, setSelected] = useState([true, false, false, false]);

  // Calculate total cost
  const totalCost = data
    .filter((_, index) => selected[index])
    .reduce((sum, row) => sum + row.cost, 0);

  // Handle row selection
  const handleRowSelection = (index) => {
    setSelected((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };
  const tags = [
    { key: "CPT", value: "0001F, 0001A" },
    { key: "NPI", value: "Lorem Ipsum" },
    { key: "Provider Type", value: "Lorem Ipsum" },
    { key: "Provider Org", value: "Lorem Ipsum" },
    { key: "Payer", value: "Lorem Ipsum" },
  ];
  return (
    <div className="p-6 bg-gray-50 ">
      {/* Search Tags */}
      <div className="flex justify-between gap-2 mb-4">
        <div className="w-[70%] space-x-3">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              color="#D9D9D9"
              className="text-[12px] flex items-center"
            >
              <span className="font-medium text-[#488AC8]">{tag.key} </span>
              <span className="font-medium text-[#D8D9DB]"> |</span>
              <span className="ml-1 text-[#666666]">{tag.value}</span>
            </Badge>
          ))}
        </div>

        <Button
          className="text-[14px]"
          color="#488AC8"
          radius="lg"
          leftSection={
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4709 2.06126C16.5701 2.16084 16.6259 2.29571 16.6259 2.43632C16.6259 2.57693 16.5701 2.7118 16.4709 2.81138L15.3627 3.92063L13.2377 1.79563L14.3459 0.686381C14.4455 0.586787 14.5806 0.530838 14.7215 0.530838C14.8623 0.530838 14.9974 0.586787 15.0971 0.686381L16.4709 2.06019V2.06126ZM14.6115 4.67076L12.4865 2.54576L5.24769 9.78563C5.18921 9.8441 5.14519 9.9154 5.11913 9.99388L4.26382 12.5588C4.2483 12.6055 4.2461 12.6557 4.25745 12.7036C4.26881 12.7515 4.29327 12.7954 4.32811 12.8302C4.36294 12.8651 4.40678 12.8895 4.45472 12.9009C4.50266 12.9122 4.55281 12.91 4.59957 12.8945L7.16444 12.0392C7.24282 12.0134 7.31412 11.9698 7.37269 11.9117L14.6115 4.67076Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.0625 14.3438C1.0625 14.7664 1.23041 15.1718 1.5293 15.4707C1.82818 15.7696 2.23356 15.9375 2.65625 15.9375H14.3438C14.7664 15.9375 15.1718 15.7696 15.4707 15.4707C15.7696 15.1718 15.9375 14.7664 15.9375 14.3438V7.96875C15.9375 7.82785 15.8815 7.69273 15.7819 7.5931C15.6823 7.49347 15.5471 7.4375 15.4062 7.4375C15.2654 7.4375 15.1302 7.49347 15.0306 7.5931C14.931 7.69273 14.875 7.82785 14.875 7.96875V14.3438C14.875 14.4846 14.819 14.6198 14.7194 14.7194C14.6198 14.819 14.4846 14.875 14.3438 14.875H2.65625C2.51535 14.875 2.38023 14.819 2.2806 14.7194C2.18097 14.6198 2.125 14.4846 2.125 14.3438V2.65625C2.125 2.51535 2.18097 2.38023 2.2806 2.2806C2.38023 2.18097 2.51535 2.125 2.65625 2.125H9.5625C9.7034 2.125 9.83852 2.06903 9.93815 1.9694C10.0378 1.86977 10.0938 1.73465 10.0938 1.59375C10.0938 1.45285 10.0378 1.31773 9.93815 1.2181C9.83852 1.11847 9.7034 1.0625 9.5625 1.0625H2.65625C2.23356 1.0625 1.82818 1.23041 1.5293 1.5293C1.23041 1.82818 1.0625 2.23356 1.0625 2.65625V14.3438Z"
                fill="white"
              />
            </svg>
          }
        >
          Modify Search
        </Button>
      </div>

      <div className="flex justify-between gap-5 ">
        <div className="h-[321px] bg-white w-[760px] rounded-md border border-[#DCDCDC]">
            <div className="font-semibold text-base px-5 py-4 text-[#000000]">
            Your Custom Data Results
            </div>
          <CustomTable />
        </div>
        <div className="h-[321px] shadow-lg shadow-[#00000026] w-[318px] rounded-md">
          <div className="flex flex-col justify-center p-5">
            <div className="font-semibold text-center my-4 text-[22px]">
              Amount To pay
            </div>
            <div className="flex flex-col justify-center w-full my-4 ">
              <div className="m-auto">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M74.1668 37.0834C74.1668 57.5626 57.5626 74.1668 37.0834 74.1668C16.6042 74.1668 0 57.5626 0 37.0834C0 16.6042 16.6042 0 37.0834 0C57.5626 0 74.1668 16.6042 74.1668 37.0834Z"
                    fill="#7CC65B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M51.8276 25.2858L41.391 35.7347L30.9545 46.1836L22.3376 37.5913L17.9874 38.9415L30.9605 51.884L56.179 26.636L51.8276 25.2858Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="font-bold text-[30px] text-center ">$286</div>
              <div className=" text-15px] text-center text-[#9CA3B3] ">
                + Tax{" "}
              </div>
            </div>
            <div className="font-semibold w-full text-center my-4 text-[22px]">
              <Button fullWidth color="#488AC8">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>


   
    </div>
  );
};

export default DataResults;
