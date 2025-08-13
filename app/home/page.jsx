'use client';
import React, { useState } from 'react';
import Body from '../landingpage/components/Body';
import Start from '../landingpage/components/Start';
import NewsletterForm from '../landingpage/components/Newsletterform';
import Endcontact from '../landingpage/components/Endcontact';
import NavbarWithScroll from '../landingpage/Pages/Navbarscroll';
import Image from 'next/image';
import Waitlist from '../landingpage/components/Waitlist';

const Page = () => {
  return (
    <div>
      <div
        className="relative w-full h-[600px] sm:h-[800px] overflow-hidden bg-cover bg-center sm:bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('/balll.webp')`,
        }}
      >        
        <NavbarWithScroll />
        <div className="absolute inset-0 bg-black/60 z-20" />
        <div className="relative z-30 flex flex-col justify-center items-start h-full px-10 sm:px-20 text-white py-50">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The spotlight for tomorrow&apos;s
          </p>

          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            sports talent
          </p>

          <p className="text-white text-base sm:text-lg mt-4 max-w-2xl font-light">
            Bridging the gap between grassroots talents and the professional game.
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
        <Waitlist/>
        <Start />
        <Endcontact />
      </div>
    </div>
  );
};

export default Page;
