"use client"

import { useTheme } from "next-themes"
import {
  ComposedChart,
  Bar,
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
  { year: "2014", solar: 3, wind: 22, total: 32, target: 50 },
  { year: "2015", solar: 5, wind: 24, total: 36, target: 60 },
  { year: "2016", solar: 9, wind: 28, total: 46, target: 80 },
  { year: "2017", solar: 18, wind: 32, total: 60, target: 100 },
  { year: "2018", solar: 26, wind: 35, total: 73, target: 120 },
  { year: "2019", solar: 33, wind: 37, total: 84, target: 140 },
  { year: "2020", solar: 39, wind: 39, total: 93, target: 160 },
  { year: "2021", solar: 49, wind: 40, total: 104, target: 180 },
  { year: "2022", solar: 62, wind: 42, total: 120, target: 200 },
  { year: "2023", solar: 73, wind: 44, total: 133, target: 220 },
  { year: "2024", solar: 85, wind: 46, total: 150, target: 240 },
]

export function RenewableGrowthChart() {
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
    solar: isDark ? "#f59e0b" : "#d97706",
    wind: isDark ? "#22c55e" : "#16a34a",
    total: isDark ? "#3b82f6" : "#2563eb",
    target: isDark ? "#a855f7" : "#9333ea",
    grid: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    text: isDark ? "#a1a1aa" : "#71717a",
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Renewable Energy Capacity Growth</h3>
        <p className="text-sm text-muted-foreground">Solar, wind, and total renewable capacity in GW (2014-2024)</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              value: 'Capacity (GW)', 
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
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar
            dataKey="solar"
            name="Solar"
            stackId="a"
            fill={colors.solar}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="wind"
            name="Wind"
            stackId="a"
            fill={colors.wind}
            radius={[4, 4, 0, 0]}
          />
          <Line
            type="monotone"
            dataKey="total"
            name="Total Renewable"
            stroke={colors.total}
            strokeWidth={3}
            dot={{ r: 4, fill: colors.total }}
          />
          <Line
            type="monotone"
            dataKey="target"
            name="Target Trajectory"
            stroke={colors.target}
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 rounded-lg bg-amber-500/10">
          <p className="text-xl font-bold text-amber-500">85 GW</p>
          <p className="text-xs text-muted-foreground">Solar Capacity</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-green-500/10">
          <p className="text-xl font-bold text-green-500">46 GW</p>
          <p className="text-xs text-muted-foreground">Wind Capacity</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-blue-500/10">
          <p className="text-xl font-bold text-blue-500">150+ GW</p>
          <p className="text-xs text-muted-foreground">Total Renewable</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-purple-500/10">
          <p className="text-xl font-bold text-purple-500">500 GW</p>
          <p className="text-xs text-muted-foreground">2030 Target</p>
        </div>
      </div>
    </div>
  )
}
