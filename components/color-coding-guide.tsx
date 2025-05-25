export function ColorCodingGuide() {
  const colorCodes = [
    {
      color: "Red",
      bgColor: "bg-red-500",
      textColor: "text-red-800",
      bgLight: "bg-red-50",
      border: "border-red-200",
      areas: "Bathrooms, toilets, urinals, high-risk areas",
      description:
        "Used for high-risk areas such as toilets, urinals, and bathroom surfaces to prevent cross-contamination.",
    },
    {
      color: "Blue",
      bgColor: "bg-blue-500",
      textColor: "text-blue-800",
      bgLight: "bg-blue-50",
      border: "border-blue-200",
      areas: "General cleaning, low-risk areas",
      description: "Used for general-purpose cleaning in low-risk areas such as offices, hallways, and common areas.",
    },
    {
      color: "Green",
      bgColor: "bg-green-500",
      textColor: "text-green-800",
      bgLight: "bg-green-50",
      border: "border-green-200",
      areas: "Food preparation, kitchens, cafeterias",
      description: "Used for food preparation areas, kitchens, and cafeterias to maintain food safety standards.",
    },
    {
      color: "Yellow",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-800",
      bgLight: "bg-yellow-50",
      border: "border-yellow-200",
      areas: "Sinks, basins, non-food areas",
      description: "Used for cleaning sinks, basins, and other surfaces in non-food preparation areas.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {colorCodes.map((item) => (
          <div key={item.color} className={`rounded-lg border ${item.border} ${item.bgLight} p-6`}>
            <div className="mb-4 h-16 w-16 rounded-full bg-white p-4">
              <div className={`h-full w-full rounded-full ${item.bgColor}`}></div>
            </div>
            <h3 className={`mb-2 text-lg font-bold ${item.textColor}`}>{item.color}</h3>
            <p className={`text-sm font-medium mb-2 ${item.textColor}`}>{item.areas}</p>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 text-lg font-bold text-gray-900">Why Color Coding Matters</h3>
        <p className="text-gray-700 mb-4">
          Color coding is a critical practice in professional cleaning that helps prevent cross-contamination between
          different areas. By assigning specific colors to different cleaning zones, you can ensure that cleaning tools
          used in high-risk areas (like bathrooms) are never used in sensitive areas (like kitchens).
        </p>
        <p className="text-gray-700">
          This system is recommended by health and safety organizations worldwide and is essential for maintaining
          proper hygiene standards in commercial, healthcare, and food service environments.
        </p>
      </div>
    </div>
  )
}
