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

const data = [
  { name: "Energy & Power", value: 44, color: "#6b7280" },
  { name: "Industry", value: 22, color: "#f59e0b" },
  { name: "Agriculture", value: 14, color: "#22c55e" },
  { name: "Transport", value: 13, color: "#3b82f6" },
  { name: "Buildings", value: 5, color: "#8b5cf6" },
  { name: "Waste", value: 2, color: "#ef4444" },
]

export function SectorEmissionsChart() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px] flex items-center justify-center text-muted-foreground">Loading chart...</div>
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Emissions by Sector</h3>
        <p className="text-sm text-muted-foreground">Share of India&apos;s total CO2 emissions by sector</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            label={({ value }) => `${value}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
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
          <Legend 
            layout="vertical" 
            align="right" 
            verticalAlign="middle"
            wrapperStyle={{ paddingLeft: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
