"use client"

import { useTheme } from "next-themes"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useEffect, useState } from "react"

const data = [
  { year: "2020", current: 2.8, stated: 2.8, netzero: 2.8 },
  { year: "2025", current: 3.2, stated: 3.0, netzero: 2.9 },
  { year: "2030", current: 3.8, stated: 3.3, netzero: 2.7 },
  { year: "2035", current: 4.5, stated: 3.5, netzero: 2.3 },
  { year: "2040", current: 5.2, stated: 3.4, netzero: 1.8 },
  { year: "2045", current: 6.0, stated: 3.2, netzero: 1.2 },
  { year: "2050", current: 6.8, stated: 2.8, netzero: 0.5 },
]

export function ProjectionsChart() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[400px] flex items-center justify-center text-muted-foreground">Loading chart...</div>
  }

  const isDark = resolvedTheme === "dark"
  
  // Use computed colors for Recharts (CSS variables don't work)
  const colors = {
    current: isDark ? "#ef4444" : "#dc2626",
    stated: isDark ? "#f59e0b" : "#d97706",
    netzero: isDark ? "#22c55e" : "#16a34a",
    grid: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    text: isDark ? "#a1a1aa" : "#71717a",
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">CO2 Emissions Projections (Billion Tonnes)</h3>
        <p className="text-sm text-muted-foreground">Three scenarios showing different emission trajectories through 2050</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
          <XAxis 
            dataKey="year" 
            stroke={colors.text}
            tick={{ fill: colors.text }}
          />
          <YAxis 
            stroke={colors.text}
            tick={{ fill: colors.text }}
            label={{ 
              value: 'Billion Tonnes CO2', 
              angle: -90, 
              position: 'insideLeft',
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
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="current"
            name="Business as Usual"
            stroke={colors.current}
            strokeWidth={3}
            dot={{ r: 4, fill: colors.current }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="stated"
            name="Stated Policies"
            stroke={colors.stated}
            strokeWidth={3}
            dot={{ r: 4, fill: colors.stated }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="netzero"
            name="Net Zero Pathway"
            stroke={colors.netzero}
            strokeWidth={3}
            dot={{ r: 4, fill: colors.netzero }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
