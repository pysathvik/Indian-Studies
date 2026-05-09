"use client"

import { useTheme } from "next-themes"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useEffect, useState } from "react"

const data = [
  { decade: "1900s", anomaly: -0.1 },
  { decade: "1910s", anomaly: -0.05 },
  { decade: "1920s", anomaly: 0.0 },
  { decade: "1930s", anomaly: 0.05 },
  { decade: "1940s", anomaly: 0.1 },
  { decade: "1950s", anomaly: 0.15 },
  { decade: "1960s", anomaly: 0.1 },
  { decade: "1970s", anomaly: 0.15 },
  { decade: "1980s", anomaly: 0.25 },
  { decade: "1990s", anomaly: 0.35 },
  { decade: "2000s", anomaly: 0.5 },
  { decade: "2010s", anomaly: 0.65 },
  { decade: "2020s", anomaly: 0.75 },
]

export function TemperatureChart() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px] flex items-center justify-center text-muted-foreground">Loading chart...</div>
  }

  const isDark = resolvedTheme === "dark"
  
  const colors = {
    area: isDark ? "#ef4444" : "#dc2626",
    areaFill: isDark ? "rgba(239, 68, 68, 0.2)" : "rgba(220, 38, 38, 0.2)",
    grid: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    text: isDark ? "#a1a1aa" : "#71717a",
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Temperature Anomaly in India</h3>
        <p className="text-sm text-muted-foreground">Deviation from 1901-1930 baseline (°C)</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
          <XAxis 
            dataKey="decade" 
            stroke={colors.text}
            tick={{ fill: colors.text, fontSize: 12 }}
          />
          <YAxis 
            stroke={colors.text}
            tick={{ fill: colors.text }}
            domain={[-0.2, 1]}
            tickFormatter={(value) => `${value > 0 ? '+' : ''}${value}°C`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: '1px solid',
              borderColor: isDark ? '#374151' : '#e5e7eb',
              borderRadius: '8px',
            }}
            formatter={(value: number) => [`${value > 0 ? '+' : ''}${value}°C`, 'Temperature Anomaly']}
          />
          <Area
            type="monotone"
            dataKey="anomaly"
            stroke={colors.area}
            strokeWidth={2}
            fill={colors.areaFill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
