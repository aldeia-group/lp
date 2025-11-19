"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let smoothMouseX = mouseX;
    let smoothMouseY = mouseY;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const gridSize = 80;
    const dotRadius = 1;
    let time = 0;

    // Grid points
    const gridPoints: { x: number; y: number }[] = [];
    for (let x = 0; x < window.innerWidth + gridSize; x += gridSize) {
      for (let y = 0; y < window.innerHeight + gridSize; y += gridSize) {
        gridPoints.push({ x, y });
      }
    }

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Smooth mouse movement
      smoothMouseX += (mouseX - smoothMouseX) * 0.08;
      smoothMouseY += (mouseY - smoothMouseY) * 0.08;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      time += 0.008;

      // Draw subtle connections between nearby dots (only near mouse)
      for (let i = 0; i < gridPoints.length; i++) {
        const point = gridPoints[i];
        const dx = smoothMouseX - point.x;
        const dy = smoothMouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - distance / 180);

        if (proximity > 0.3) {
          for (let j = i + 1; j < gridPoints.length; j++) {
            const other = gridPoints[j];
            const dist = Math.sqrt(
              Math.pow(point.x - other.x, 2) + Math.pow(point.y - other.y, 2)
            );

            if (dist < gridSize * 1.5 && dist > 0) {
              const odx = smoothMouseX - other.x;
              const ody = smoothMouseY - other.y;
              const oDistance = Math.sqrt(odx * odx + ody * ody);
              const oProximity = Math.max(0, 1 - oDistance / 180);

              if (oProximity > 0.3) {
                const lineOpacity = (proximity + oProximity) * 0.06;
                ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw grid dots
      for (let i = 0; i < gridPoints.length; i++) {
        const point = gridPoints[i];

        // Distance from mouse
        const dx = smoothMouseX - point.x;
        const dy = smoothMouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Subtle wave effect
        const wave = Math.sin(point.x * 0.004 + time) * Math.cos(point.y * 0.004 + time);

        // Mouse proximity effect
        const proximity = Math.max(0, 1 - distance / 180);

        // Combined opacity - very subtle
        const baseOpacity = 0.15 + Math.abs(wave) * 0.05;
        const mouseOpacity = proximity * 0.3;
        const opacity = Math.min(0.6, baseOpacity + mouseOpacity);

        // Dot size
        const size = dotRadius + proximity * 2;

        // Draw dot - monochromatic white
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}

