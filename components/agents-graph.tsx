'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { agents } from '@/data/agents'

export function AgentsGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Animation
    let animationId: number
    let time = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections between agents
      const agentElements = container.querySelectorAll('.agent-node')
      const positions: { x: number; y: number }[] = []
      
      agentElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        positions.push({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        })
      })
      
      // Draw animated connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)'
      ctx.lineWidth = 1
      
      positions.forEach((pos1, i) => {
        positions.forEach((pos2, j) => {
          if (i < j && Math.random() > 0.85) {  // Less connections for cleaner look
            ctx.beginPath()
            ctx.moveTo(pos1.x, pos1.y)
            
            // Add slight curve to the line
            const midX = (pos1.x + pos2.x) / 2
            const midY = (pos1.y + pos2.y) / 2
            const offset = Math.sin(time * 0.0002 + i + j) * 20  // Much slower
            
            ctx.quadraticCurveTo(
              midX + offset,
              midY - offset,
              pos2.x,
              pos2.y
            )
            ctx.stroke()
            
            // Animate particles along the connection
            const t = (Math.sin(time * 0.0005 + i * j) + 1) / 2  // Much slower
            const particleX = pos1.x * (1 - t) + pos2.x * t
            const particleY = pos1.y * (1 - t) + pos2.y * t
            
            ctx.beginPath()
            ctx.arc(particleX, particleY, 2, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(16, 185, 129, 0.8)'
            ctx.fill()
          }
        })
      })
      
      time += 16
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  // Use all agents
  const selectedAgents = agents
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Agent nodes positioned around the hero */}
      <div className="absolute inset-0">
        {selectedAgents.map((agent, index) => {
          const angle = (index / selectedAgents.length) * Math.PI * 2 - Math.PI / 2 // Start from top
          const radius = 40 // percentage - slightly larger radius
          const x = 50 + Math.cos(angle) * radius
          const y = 50 + Math.sin(angle) * radius
          
          return (
            <div
              key={agent.id}
              className="agent-node absolute transform -translate-x-1/2 -translate-y-1/2 animate-float"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${index * 0.3}s`,  // Faster stagger for more agents
              }}
            >
              <div className="relative group">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                
                {/* Agent image */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-green-400/30 group-hover:ring-green-400 transition-all duration-300">
                  <Image
                    src={`/agents/${agent.image}`}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Agent name tooltip */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {agent.name}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}