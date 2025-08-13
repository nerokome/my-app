'use client';
import NavbarWithScroll from "./landingpage/Pages/Navbarscroll";
import Star from "./landingpage/star";

export default function LandingLayout({ children }) {
  return (
    
    <>
     <div className="p-6">
      <NavbarWithScroll/>
    </div>
    </>
  );
}
