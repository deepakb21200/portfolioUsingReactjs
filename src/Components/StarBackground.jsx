// import { useEffect, useState } from "react";

// function StarBackground() {
//         const [stars, setStars] = useState([]);

//     useEffect(() => {
//       generateStars();

//       const handleResize = () => generateStars();
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const generateStars = () => {
//       const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
//       const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
//         id: i,
//         size: Math.random() * 3 + 1,           // random size 1px - 4px
//         x: Math.random() * 100,               // random x position
//         y: Math.random() * 100,               // random y position
//         duration: Math.random() * 4 + 2,      // random pulse duration
//         delay: Math.random() * 2,             // random animation delay
//         color: "red",                         // all stars blue
//       }));
//       setStars(newStars);
//     };
//    return (
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden  ">
//         {stars.map((star) => (
//           <div
//             key={star.id}
//             className="star animate-pulse-subtle"
//             style={{
//               width: `${star.size}px`,
//               height: `${star.size}px`,
//               left: `${star.x}%`,
//               top: `${star.y}%`,
//               backgroundColor: star.color,
//               animationDuration: `${star.duration}s`,
//               animationDelay: `${star.delay}s`,
//             }}
//           />
//         ))}
//       </div>
//     );
// }

// export default StarBackground










// CosmicBackground.jsx
import { useEffect, useRef } from "react";

const PALETTE = [
  [120, 180, 255], [180, 130, 255], [80, 220, 200],
  [200, 160, 255], [100, 200, 255],
];
const COUNT = 110, CONN_DIST = 120, MOUSE_DIST = 140, MOUSE_FORCE = 0.18;

function rand(a, b) { return a + Math.random() * (b - a); }

 function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles, animId;
    const mouse = { x: -999, y: -999 };

    class Particle {
      constructor() { this.reset(true); }
      reset(init) {
        this.x = rand(0, W); this.y = init ? rand(0, H) : (Math.random() < 0.5 ? -5 : H + 5);
        this.vx = rand(-0.35, 0.35); this.vy = rand(-0.35, 0.35);
        this.baseSize = rand(1.2, 3.2); this.size = this.baseSize;
        const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        [this.r, this.g, this.b] = c;
        this.alpha = rand(0.4, 0.95);
        this.pulse = rand(0, Math.PI * 2);
        this.pulseSpeed = rand(0.012, 0.028);
        this.twinkle = 1;
      }
      update() {
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST && dist > 1) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          this.vx += (dx / dist) * force * MOUSE_FORCE;
          this.vy += (dy / dist) * force * MOUSE_FORCE;
        }
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 1.8) { this.vx *= 0.92; this.vy *= 0.92; }
        this.vx *= 0.995; this.vy *= 0.995;
        this.x += this.vx; this.y += this.vy;
        this.pulse += this.pulseSpeed;
        this.size = this.baseSize + Math.sin(this.pulse) * 0.5;
        this.twinkle = 0.6 + Math.abs(Math.sin(this.pulse * 0.7)) * 0.4;
        if (this.x < -10 || this.x > W + 10 || this.y < -10 || this.y > H + 10) this.reset(false);
      }
      draw() {
        const a = this.alpha * this.twinkle;
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${a * 0.12})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${a})`;
        ctx.shadowColor = `rgba(${this.r},${this.g},${this.b},0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = Array.from({ length: COUNT }, () => new Particle());
    };

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p = particles[i], q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < CONN_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${Math.round((p.r+q.r)/2)},${Math.round((p.g+q.g)/2)},${Math.round((p.b+q.b)/2)},${(1-d/CONN_DIST)*0.5})`;
            ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
        const p = particles[i], d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (d < MOUSE_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(160,120,255,${(1-d/MOUSE_DIST)*0.7})`;
          ctx.lineWidth = 0.8; ctx.stroke();
        }
      }
    };

    const loop = () => {
      ctx.fillStyle = "#020510";
      ctx.fillRect(0, 0, W, H);
      // nebula glows
      [[W*0.2,H*0.3,180,60,40,120],[W*0.75,H*0.65,150,30,80,120],[W*0.5,H*0.5,200,50,20,100]]
        .forEach(([cx,cy,r,cr,cg,cb]) => {
          const g = ctx.createRadialGradient(cx,cy,0,cx,cy,r);
          g.addColorStop(0,`rgba(${cr},${cg},${cb},0.07)`);
          g.addColorStop(1,`rgba(${cr},${cg},${cb},0)`);
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();
        });
      connect();
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    };

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -999; mouse.y = -999; };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    resize(); loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}





export default CosmicBackground