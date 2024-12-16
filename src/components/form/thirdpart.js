import React, { useState } from "react";
import { TextInput, Select, Button } from "@mantine/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import formService from "../../api/formService";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    nameOnCard: "",
    country: "",
    zip: "",
  });
  const cardStyle = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
      border: "1px solid grey"
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
    complete: {
      color: "#4caf50", // Green color for valid inputs
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: formData.nameOnCard,
        email: formData.email,
        address: {
          country: formData.country,
          postal_code: formData.zip,
        },
      },
    });

    if (error) {
      console.error("Payment error:", error.message);
    } else {
      handlePayment(paymentMethod);
      // Send paymentMethod.id to your backend
    }
  };
  const handlePayment = async (paymentMethod) => {
   
      const response = await formService.makePayment(paymentMethod);
      
    const client_secret = response.data.client_secret;
 
    // Confirm the PaymentIntent using the client_secret
    console.log('client_secret',client_secret)
    if(client_secret){
      const { paymentIntent, confirmError } = await stripe.confirmCardPayment(client_secret);
      if (confirmError) {
        console.log(confirmError.message); // Handle confirmation error
      } else {
        if (paymentIntent.status === 'succeeded') {
          // Handle successful payment (e.g., show success message, redirect)
          window.location.href = '/thankyou';
        }
      }
    }
    
  };

  const handleChange = (e) => {
  console.log('chnaged > ',e)
  if(e.target){
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }else{
    setFormData({ ...formData, ['country']: e });
  }
    
  };
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

      <form className="space-y-4" onSubmit={(e)=>handleSubmit(e)}>
        <TextInput
          label="Customer Name"
          placeholder="Enter your name"
          required
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Card information
          </label>
          {/* <div className="grid grid-cols-12 gap-2">
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
          </div> */}
          <CardElement options={{style: cardStyle, hidePostalCode: true }} required/>
        </div>

        <TextInput
          label="Name on card"
          placeholder="Enter name on card"
          required
          name="nameOnCard"
          value={formData.nameOnCard}
          onChange={handleChange}
        />

        <div className="grid grid-cols-12 gap-2">
          <Select
            className="col-span-8"
            label="Country or region"
            placeholder="Select country"
            name="country"
            value={formData.country}
            onChange={(e)=>handleChange(e)}
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
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          fullWidth
          color="#488AC8"
          type="submit"
          disabled={!stripe}
          className="w-full py-3 text-lg font-semibold  text-white rounded-lg"
          leftIcon={
            <span role="img" aria-label="Pay">
              💳
            </span>
          }
        >
          Pay
        </Button>
      </form>
      {/* <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form> */}
    </div>
  );
};

export default PaymentForm;
