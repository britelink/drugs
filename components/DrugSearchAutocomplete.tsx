"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Autosuggest, {
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";
import { Drug } from "@/typing";
import Link from "next/link";

const DrugSearchAutocomplete: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Drug[]>([]);
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const apiKey = "secret_699038a1-a1de-4f70-8e63-308f2c8caf48";
  // Define the API endpoint
  const apiUrl = "https://www.britelink.io/api/v1/drug_names";

  // Function to fetch drug suggestions
  // Function to fetch drug suggestions
  const fetchSuggestions = async (inputValue: string) => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        params: { q: inputValue, f: true },
      });

      const suggestions: Drug[] = response.data.map((result: any) => ({
        id: result.id,
        tradeName: result.tradeName,
        genericName: result.genericName,
        registrationNo: result.registrationNo,
        dateRegistered: result.dateRegistered,
        // Add other fields as needed
      }));

      setSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Autosuggest functions
  const getSuggestionValue = (suggestion: Drug) => suggestion.tradeName;
  const renderSuggestion = (suggestion: Drug) => (
    <div>{suggestion.tradeName}</div>
  );

  const onSuggestionsFetchRequested = ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    fetchSuggestions(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    _: React.FormEvent,
    { suggestion }: { suggestion: Drug }
  ) => {
    setSelectedDrug(suggestion);
  };

  const inputProps = {
    placeholder: "Enter drug name...",
    value,
    onChange: (_: React.FormEvent, { newValue }: { newValue: string }) => {
      setValue(newValue);
      setSelectedDrug(null); // Clear selected drug when input changes
    },
    className:
      "w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 shadow-md",
  };

  return (
    <div>
      <Autosuggest
        className="relative w-64 mx-auto bg-gray-400 p-2"
        suggestions={suggestions.slice(0, 5)}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={(suggestion: any, i: number) => (
          <div
            className={`p-2 mt-2 cursor-pointer rounded-md bg-gray-100 
           hover:bg-blue-100
            `}
          >
            {suggestion.tradeName}
          </div>
        )}
        inputProps={inputProps}
      />
      {selectedDrug && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="text-lg font-semibold">Overview</h2>

          <p>Brand Name: {selectedDrug.tradeName}</p>
          <p className="pb-2">Generic Name: {selectedDrug.genericName}</p>
          <Link
            href={`/${selectedDrug.id}`}
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            More Details
          </Link>
        </div>
      )}
    </div>
  );
};

export default DrugSearchAutocomplete;
