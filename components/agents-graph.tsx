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
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)'  // Even more subtle
      ctx.lineWidth = 0.5  // Thinner lines
      
      positions.forEach((pos1, i) => {
        positions.forEach((pos2, j) => {
          if (i < j && Math.random() > 0.9) {  // Even fewer connections
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
            ctx.arc(particleX, particleY, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(16, 185, 129, 0.4)'  // More subtle particles
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
  
  // Use all agents with predefined scattered positions
  const agentPositions = [
    { x: 15, y: 20 },   // Top left
    { x: 85, y: 15 },   // Top right
    { x: 30, y: 35 },   // Upper left
    { x: 70, y: 30 },   // Upper right
    { x: 10, y: 50 },   // Middle left
    { x: 90, y: 55 },   // Middle right
    { x: 25, y: 65 },   // Lower left
    { x: 75, y: 70 },   // Lower right
    { x: 20, y: 85 },   // Bottom left
    { x: 80, y: 80 },   // Bottom right
    { x: 50, y: 10 },   // Top center
    { x: 50, y: 90 },   // Bottom center
    { x: 40, y: 50 },   // Center left
    { x: 60, y: 45 },   // Center right
    { x: 35, y: 15 },   // Scattered
    { x: 65, y: 85 },   // Scattered
    { x: 45, y: 75 },   // Scattered
  ]
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-40">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Agent nodes with scattered positions */}
      <div className="absolute inset-0">
        {agents.map((agent, index) => {
          const position = agentPositions[index] || { x: 50, y: 50 }
          const x = position.x
          const y = position.y
          
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
                {/* Glowing effect - more subtle */}
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity" />
                
                {/* Agent image with opacity */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-1 ring-green-400/20 group-hover:ring-green-400/40 transition-all duration-300 opacity-60 group-hover:opacity-80">
                  <Image
                    src={`/agents/${agent.image}`}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Agent name tooltip - more subtle */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-gray-900/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm">
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