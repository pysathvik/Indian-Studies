"use client"

import { useEffect, useState, useRef } from "react"
import { GlassCard } from "@/components/glass-card"

const stats = [
  {
    value: 3,
    suffix: "rd",
    label: "Largest CO2 Emitter",
    description: "India ranks third globally in total emissions",
  },
  {
    value: 450,
    suffix: "GW",
    label: "Renewable Target by 2030",
    description: "Ambitious clean energy capacity goal",
  },
  {
    value: 1.4,
    suffix: "B",
    label: "Population Affected",
    description: "Largest population facing climate impacts",
  },
  {
    value: 2070,
    suffix: "",
    label: "Net Zero Target",
    description: "India's commitment to carbon neutrality",
  },
]

function AnimatedNumber({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number
  suffix: string
  inView: boolean 
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current * 10) / 10)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, inView])

  const formatValue = (val: number) => {
    if (value >= 100) return Math.round(val)
    if (value >= 10) return val.toFixed(0)
    return val.toFixed(1)
  }

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
      {formatValue(displayValue)}
      <span className="text-primary">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <GlassCard 
              key={index} 
              className="text-center py-8"
              glow
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {stat.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
