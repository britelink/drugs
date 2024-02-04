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
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {drugs.map((drug: any) => (
          <Link
            href={`/${drug.id}`}
            key={drug.id}
            className="bg-white/20 border border-gray-200 border-opacity-50 rounded-lg
            shadow-md p-4 transform transition-all hover:scale-105 hover:border-blue-500
            hover:bg-blue-50/20 hover:shadow-lg duration-300 ease-in-out backdrop-filter
            backdrop-blur-xl backdrop-brightness-110"
          >
            <h3 className="text-xl font-semibold mb-2 line-clamp-1">
              {drug.tradeName}
            </h3>
            <p className="text-gray-600">{drug.strength}</p>
          </Link>
          // <Link
          //   href={`/${drug.id}`}
          //   key={drug.id}
          //   style={{
          //     backdropFilter: "blur(10px)",
          //     backgroundColor: "rgba(255, 255, 255, 0.2)",
          //     border: "1px solid rgba(255, 255, 255, 0.18)",
          //     borderRadius: "12px",
          //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          //     padding: "16px",
          //     transition: "all 0.3s ease-in-out",
          //     transform: "scale(1)",
          //     ":hover": {
          //       transform: "scale(1.05)",
          //       boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          //       borderColor: "rgba(30, 136, 229, 0.5)",
          //       backgroundColor: "rgba(255, 255, 255, 0.3)",
          //     },
          //   }}
          // >
          //   <h3 className="text-xl font-semibold mb-2">{drug.tradeName}</h3>
          //   <p className="text-gray-600">{drug.strength}</p>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default DrugList;
