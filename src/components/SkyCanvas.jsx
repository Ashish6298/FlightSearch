import { useEffect, useRef } from "react";

export default function SkyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Plane class
    class Plane {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.size = Math.random() * 15 + 10;
        this.speedX = Math.random() * 3 - 1.5; // Increased speed range for visibility
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.4;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.size, this.y + this.size * 0.3);
        ctx.lineTo(this.x - this.size * 0.5, this.y);
        ctx.lineTo(this.x - this.size, this.y - this.size * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Wrap around edges
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height * 0.5) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height * 0.5;
      }
    }

    // Initialize planes
    const planes = Array.from({ length: 10 }, () => new Plane());

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      planes.forEach((plane) => {
        plane.update();
        plane.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
}