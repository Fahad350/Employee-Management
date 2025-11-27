import React, { useState } from "react";

const sampleAssets = [
  {
    id: 1,
    assetName: "Dell Latitude 5420",
    category: "Laptop",
    assignedDate: "2025-01-10",
    status: "In Use",
    serial: "DL-5420-9988",
    description: "Primary work laptop with 16GB RAM / 512GB SSD.",
  },
  {
    id: 2,
    assetName: "Samsung A32",
    category: "Mobile",
    assignedDate: "2025-02-01",
    status: "In Repair",
    serial: "SM-A32-4432",
    description: "Official work mobile device.",
  },
  {
    id: 3,
    assetName: "Logitech MX Master 3",
    category: "Mouse",
    assignedDate: "2024-12-20",
    status: "In Use",
    serial: "LG-MX3-2200",
    description: "Wireless ergonomic mouse.",
  },
];

export default function Assets() {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [search, setSearch] = useState("");

  const filteredAssets = sampleAssets.filter((asset) =>
    asset.assetName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-2">My Assets</h1>
      <p className="text-gray-600 mb-6">All company assets assigned to you.</p>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-blue-500"
          placeholder="Search Assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Assets boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAssets.map((asset) => (
          <div
            key={asset.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedAsset(asset)}
          >
            <h2 className="text-lg font-semibold">{asset.assetName}</h2>
            <p className="text-sm text-gray-600">{asset.category}</p>

            {/* Status badge */}
            <span
              className={`inline-block px-3 py-1 mt-3 text-xs rounded-full ${
                asset.status === "In Use"
                  ? "bg-green-100 text-green-700"
                  : asset.status === "In Repair"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {asset.status}
            </span>

            <p className="text-sm text-gray-600 mt-3">
              Assigned: {asset.assignedDate}
            </p>
          </div>
        ))}
      </div>

      {/* Model For Asset Details */}
      {selectedAsset && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelectedAsset(null)}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold">{selectedAsset.assetName}</h2>
            <p className="text-gray-500 mb-4">{selectedAsset.category}</p>

            <div className="space-y-3">
              <p>
                <span className="font-semibold">Serial:</span>{" "}
                {selectedAsset.serial}
              </p>
              <p>
                <span className="font-semibold">Assigned Date:</span>{" "}
                {selectedAsset.assignedDate}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectedAsset.status}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {selectedAsset.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedAsset(null)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
