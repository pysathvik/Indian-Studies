"use client"

import { useTheme } from "next-themes"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useEffect, useState } from "react"

const data = [
  { year: "2010", emissions: 1.71, perCapita: 1.4 },
  { year: "2012", emissions: 1.94, perCapita: 1.5 },
  { year: "2014", emissions: 2.12, perCapita: 1.6 },
  { year: "2016", emissions: 2.30, perCapita: 1.7 },
  { year: "2018", emissions: 2.48, perCapita: 1.8 },
  { year: "2020", emissions: 2.44, perCapita: 1.8 },
  { year: "2022", emissions: 2.71, perCapita: 1.9 },
  { year: "2024", emissions: 2.88, perCapita: 2.0 },
]

export function EmissionsChart() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[400px] flex items-center justify-center text-muted-foreground">Loading chart...</div>
  }

  const isDark = resolvedTheme === "dark"
  
  const colors = {
    emissions: isDark ? "#22c55e" : "#16a34a",
    perCapita: isDark ? "#3b82f6" : "#2563eb",
    grid: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    text: isDark ? "#a1a1aa" : "#71717a",
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">India&apos;s CO2 Emissions Trend (2010-2024)</h3>
        <p className="text-sm text-muted-foreground">Total emissions in billion tonnes and per capita emissions</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
          <XAxis 
            dataKey="year" 
            stroke={colors.text}
            tick={{ fill: colors.text }}
          />
          <YAxis 
            yAxisId="left"
            stroke={colors.text}
            tick={{ fill: colors.text }}
            label={{ 
              value: 'Billion Tonnes', 
              angle: -90, 
              position: 'insideLeft',
              fill: colors.text,
              style: { textAnchor: 'middle' }
            }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke={colors.text}
            tick={{ fill: colors.text }}
            label={{ 
              value: 'Per Capita (Tonnes)', 
              angle: 90, 
              position: 'insideRight',
              fill: colors.text,
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: '1px solid',
              borderColor: isDark ? '#374151' : '#e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: isDark ? '#f9fafb' : '#111827', fontWeight: 600 }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar
            yAxisId="left"
            dataKey="emissions"
            name="Total Emissions (Bt)"
            fill={colors.emissions}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="perCapita"
            name="Per Capita (t)"
            fill={colors.perCapita}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
