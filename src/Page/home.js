import React from 'react';
import StepForm from '../components/form/form';
import { Button, TextInput } from '@mantine/core';
import MultiStepForm from '../components/form/form';

const HomePage = () => {
  return (
    <main className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
      <p className="text-gray-700">
        This is the homepage. You can customize this content to your liking.
      </p>
   
      <div className="p-4 ">
      {/* <TextInput label="Your name" placeholder="Enter your name" className="mb-4" />
      <Button className="bg-blue-500 hover:bg-blue-600">Submit</Button> */}
   <MultiStepForm />
    
    </div>

    </main>
  );
};

export default HomePage;
