import React, { useState } from "react";
import NGOMuskanQR from "../images/NGOMuskanQR.jpg";
import PageLayout from "../components/PageLayout";

function DonationPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Display copy success for 2 seconds
      })
      .catch(() => {
        console.error("Failed to copy text to clipboard");
      });
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 font-montserrat text-slate-900">Make a Donation</h1>

        {/* QR Code Image */}
        <div className="mb-8">
          <img
            src={NGOMuskanQR}
            alt="QR Code for Donation"
            className="w-full max-w-sm h-auto mx-auto rounded-lg"
          />
        </div>

        {/* Donation Details */}
        <section className="flex flex-col gap-4 mb-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center font-roboto text-slate-900">UPI Details</h2>
          <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 cursor-pointer" onClick={() => handleCopy("9870221738")}>
            <span>Phone Number:</span>
            <span className="text-gray-700 font-roboto">
              {copied ? "Copied!" : "9870221738"}
            </span>
            {copied && <span className="text-green-500 ml-2">✓</span>}
          </div>
          <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 cursor-pointer" onClick={() => handleCopy("your_upi_id")}>
            <span>UPI ID:</span>
            <span className="text-gray-700 font-roboto">
              {copied ? "Copied!" : "your_upi_id"}
            </span>
            {copied && <span className="text-green-500 ml-2">✓</span>}
          </div>
        </section>

        {/* Informational Section */}
        <section className="mb-8 w-full max-w-md font-montserrat text-slate-900">
          <h2 className="text-xl font-semibold text-center mb-4">Your Impact</h2>
          <p className="text-center text-gray-700 font-roboto">
            Your generous donations help us provide essential services to those
            in need. Each contribution makes a significant difference in
            someone's life. Thank you for your support ♥
          </p>
        </section>

        {/* Call to Action Removed */}
        
        {/* Payment Security Assurance */}
        <p className="text-center mt-8 text-sm text-gray-500 font-roboto">
          Your donations are secure. We use industry-standard security measures
          to protect your information.
        </p>
      </div>
    </PageLayout>
  );
}

export default DonationPage;
