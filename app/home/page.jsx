'use client';
import React, { useState } from 'react';
import Body from '../landingpage/components/Body';
import Start from '../landingpage/components/Start';
import Endcontact from '../landingpage/components/Endcontact';
import NavbarWithScroll from '../landingpage/Pages/Navbarscroll';
import Waitlist from '../landingpage/components/Waitlist';

const Page = () => {
  return (
    <div>
      <div
        className="relative w-full min-h-screen overflow-hidden bg-cover bg-center sm:bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('/image 5.png')`,
        }}
      >        
        <NavbarWithScroll />
        
        <div className="relative z-30 flex flex-col justify-center items-start h-full px-10 sm:px-20 text-white py-50 sm:py-100">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Talent, The world's stage
          </p>

          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            sports talent
          </p>

          <p className="text-white text-base sm:text-lg mt-4 max-w-2xl font-light">
           From local leagues to professional contracts - our platform scales talent identification across every level of sport
          </p>

          <a href="/mission">
            <div className="bg-teal-800 p-4 rounded-lg mt-5 hover:cursor-pointer text-sm sm:text-lg py-2 sm:py-2 text-white font-semibold hover:bg-transparent border border-teal-800 transition hover:scale-105 active:scale-95">
              Discover more
            </div>
          </a>
        </div>
      </div>
      <div>
        <Body />
         <Start />
        <Waitlist/>
       
        <Endcontact />
      </div>
    </div>
  );
};

export default Page;
