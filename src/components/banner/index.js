import React from 'react'

const Banner = ({step}) => {
    console.log()
    const steps = {
        0: {
          title: 'Find Contracted Rates',
          img: '/banner1.png', // Use relative path for images in the public folder
          description:
            'You can select any/all the following fields to define search criteria',
        },
        1: {
          title: 'Result & Pricing Options',
          img: '/banner2.png',
          description: '',
        },
        2: {
          title: 'Make Payment',
          img: '/banner3.png',
          description: '',
        },
      };
      
      function StepComponent({ step }) {
        const { title, img, description } = steps[step] || {
          title: 'Unknown Step',
          img: '/default-banner.png', // Optional: Provide a default image
          description: 'No details available for this step.',
        };
      
        return (
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px', // Optional: Adjust height based on design
              width: '100%', // Optional: Full width of container
            }}
          >
            <h2 className="font-roboto font-semibold text-[36px] leading-[42.19px] text-[#ffffff]">
              {title}
            </h2>
            <p className="font-roboto font-semibold text-[17px] leading-[42.19px] text-[#ffffff]">{description}</p>
          </div>
        );
      }
      
  return (
    <div className='h-[200px]'>
        <div className='imageBanner'>
            <div className='contentTile'>
{<StepComponent step={step} />}
            </div>
        </div>
      
    </div>
  )
}

export default Banner
