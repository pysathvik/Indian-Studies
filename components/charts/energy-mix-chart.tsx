"use client"

import { useTheme } from "next-themes"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useEffect, useState } from "react"

const currentData = [
  { name: "Coal", value: 55, color: "#6b7280" },
  { name: "Natural Gas", value: 6, color: "#78716c" },
  { name: "Nuclear", value: 3, color: "#8b5cf6" },
  { name: "Hydro", value: 12, color: "#3b82f6" },
  { name: "Solar", value: 15, color: "#f59e0b" },
  { name: "Wind", value: 8, color: "#22c55e" },
  { name: "Other Renewables", value: 1, color: "#06b6d4" },
]

const futureData = [
  { name: "Coal", value: 30, color: "#6b7280" },
  { name: "Natural Gas", value: 8, color: "#78716c" },
  { name: "Nuclear", value: 5, color: "#8b5cf6" },
  { name: "Hydro", value: 12, color: "#3b82f6" },
  { name: "Solar", value: 28, color: "#f59e0b" },
  { name: "Wind", value: 12, color: "#22c55e" },
  { name: "Other Renewables", value: 5, color: "#06b6d4" },
]

export function EnergyMixChart() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[400px] flex items-center justify-center text-muted-foreground">Loading chart...</div>
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Energy Generation Mix Comparison</h3>
        <p className="text-sm text-muted-foreground">Current (2024) vs Projected (2030) power generation sources</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Mix */}
        <div>
          <h4 className="text-center font-medium text-foreground mb-4">Current (2024)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={currentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${value}%`}
                labelLine={false}
              >
                {currentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  border: '1px solid',
                  borderColor: isDark ? '#374151' : '#e5e7eb',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`${value}%`, '']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Future Mix */}
        <div>
          <h4 className="text-center font-medium text-foreground mb-4">Projected (2030)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={futureData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${value}%`}
                labelLine={false}
              >
                {futureData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  border: '1px solid',
                  borderColor: isDark ? '#374151' : '#e5e7eb',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`${value}%`, '']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 rounded-lg bg-primary/5">
          <p className="text-2xl font-bold text-primary">50%</p>
          <p className="text-xs text-muted-foreground">Renewable Target 2030</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-amber-500/5">
          <p className="text-2xl font-bold text-amber-500">2x</p>
          <p className="text-xs text-muted-foreground">Solar Capacity Growth</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-red-500/5">
          <p className="text-2xl font-bold text-red-500">-45%</p>
          <p className="text-xs text-muted-foreground">Coal Share Reduction</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-green-500/5">
          <p className="text-2xl font-bold text-green-500">+50%</p>
          <p className="text-xs text-muted-foreground">Wind Capacity Growth</p>
        </div>
      </div>
    </div>
  )
}
