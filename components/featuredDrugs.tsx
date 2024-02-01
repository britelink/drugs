"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Drugs from "./drugs";
import { Drug } from "@/typing";

const FeaturedDrugs = () => {
  const apiKey = "secret_699038a1-a1de-4f70-8e63-308f2c8caf48";
  const [drugs, setDrugs] = useState<Drug[]>([]);
  console.log(drugs);
  const fetchDrugs = async () => {
    try {
      const response = await axios.get(
        "https://www.britelink.io/api/v1/drugs",
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Update the state with the fetched data directly, not nested under response.data.data.drugs
      setDrugs((prevDrugs) => [...prevDrugs, ...response.data.drugs]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call the fetchDrugs function when the component mounts and update state when data is received
    async function fetchData() {
      await fetchDrugs();
    }
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <Drugs drugs={drugs} />;
};

export default FeaturedDrugs;
