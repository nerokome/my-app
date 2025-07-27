'use client';
import Star from "./landingpage/star";

export default function LandingLayout({ children }) {
  return (
    <>
      <Star>
        {children}
        </Star>
    </>
  );
}
