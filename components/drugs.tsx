"use client";
import { Drugs } from "@/typing";
import Link from "next/link";
import React from "react";

const DrugList = ({ drugs }: Drugs) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Featured Drugs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {drugs.map((drug: any) => (
          <Link
            href={`/${drug.id}`}
            key={drug.id}
            className="bg-white border rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2 line-clamp-1">
              {drug.tradeName}
            </h3>
            <p className="text-gray-600">{drug.strength}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DrugList;
