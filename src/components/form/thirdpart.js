import React from "react";
import { TextInput, Select, Button } from "@mantine/core";

const PaymentForm = () => {
  return (
    <div className="w-[600px] mx-auto p-6 border rounded-lg shadow-md bg-white space-y-4">
      {/* Apple Pay Button */}
      <button className="w-full py-3 bg-black text-white text-lg font-semibold rounded-lg">
      Pay
      </button>
      
      {/* Or Separator */}
      <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
        <span className="flex-grow border-t"></span>
        <span>Or pay with card</span>
        <span className="flex-grow border-t"></span>
      </div>

      {/* Form Fields */}
      <form className="space-y-4">
        <TextInput 
          label="Customer Name" 
          placeholder="Enter your name" 
          required 
        />
        <TextInput 
          label="Email" 
          placeholder="Enter your email" 
          type="email" 
          required 
        />
        
        {/* Card Information */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Card information
          </label>
          <div className="grid grid-cols-12 gap-2">
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="col-span-8 p-2 border rounded-lg text-gray-700"
              required
            />
            <input
              type="text"
              placeholder="MM / YY"
              className="col-span-2 p-2 border rounded-lg text-gray-700"
              required
            />
            <input
              type="text"
              placeholder="CVC"
              className="col-span-2 p-2 border rounded-lg text-gray-700"
              required
            />
          </div>
        </div>

        <TextInput 
          label="Name on card" 
          placeholder="Enter name on card" 
          required 
        />

        {/* Country and ZIP */}
        <div className="grid grid-cols-12 gap-2">
          <Select
            className="col-span-8"
            label="Country or region"
            placeholder="Select country"
            data={[
              { value: "US", label: "United States" },
              { value: "IN", label: "India" },
              { value: "UK", label: "United Kingdom" },
            ]}
            required
          />
          <TextInput
            className="col-span-4"
            label="ZIP"
            placeholder="ZIP code"
            required
          />
        </div>

        {/* Pay Button */}
        <Button fullWidth color="#488AC8"
          className="w-full py-3 text-lg font-semibold  text-white rounded-lg"
          leftIcon={<span role="img" aria-label="Pay">💳</span>}
        >
          Pay
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
