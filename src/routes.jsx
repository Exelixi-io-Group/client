import { Route, Routes } from "react-router-dom";
import { LandingLayout } from "./container/Landing/layout";
import { Home } from "./container/Landing/Home";
import { AboutUs } from "./container/Landing/AboutUs";
import { Contact } from "./container/Landing/Contact";

export const LandingRoute = () => {
  return (
    <LandingLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </LandingLayout>
  );
};
