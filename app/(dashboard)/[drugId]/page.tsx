"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DrugPage = ({ params }: { params: { drugId: string } }) => {
  const apiKey = "secret_699038a1-a1de-4f70-8e63-308f2c8caf48";
  // Define the API endpoint
  const apiUrl = `https://www.britelink.io/api/v1/drugs/${params.drugId}`;

  const [drugDetails, setDrugDetails] = useState<any>(null); // Replace 'any' with the correct type for your drug data

  useEffect(() => {
    if (params.drugId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          });

          // Set the drug details from the API response
          setDrugDetails(response.data);
        } catch (error) {
          console.error("Error fetching drug details:", error);
        }
      };

      fetchData();
    }
  }, [params.drugId]);
  const renderDescriptionWithStyles = (description: any) => {
    return { __html: description };
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Drug Details </h1>
      {drugDetails ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Trade Name:</h2>
          <p className="text-gray-800">{drugDetails.tradeName}</p>

          <h2 className="text-xl font-semibold mb-2">Generic Name:</h2>
          <p className="text-gray-800">{drugDetails.genericName}</p>

          <h2 className="text-xl font-semibold mb-2">Registration Number:</h2>
          <p className="text-gray-800">{drugDetails.registrationNo}</p>

          <h2 className="text-xl font-semibold mb-2">Date Registered:</h2>
          <p className="text-gray-800">
            {drugDetails.dateRegistered
              ? new Date(drugDetails.dateRegistered).toLocaleDateString()
              : "N/A"}
          </p>

          <h2 className="text-xl font-semibold mb-2">Description:</h2>
          <div
            className="text-gray-800"
            dangerouslySetInnerHTML={renderDescriptionWithStyles(
              drugDetails.description
            )}
          ></div>

          {/* Add more drug details here */}
        </div>
      ) : (
        <p>Loading drug details...</p>
      )}
    </div>
  );
};

export default DrugPage;
