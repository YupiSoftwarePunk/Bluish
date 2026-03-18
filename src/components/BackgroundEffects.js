export function backgroundeffect() {
    if (document.querySelector('#theatron-canvas')) {
        return;
    }

const canvas = document.createElement('canvas');
    canvas.id = 'theatron-canvas';
    canvas.className = 'fixed inset-0 z-[3] pointer-events-none opacity-60';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width, height;
    const lines = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize(); 

    class StringLine {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 200;
            this.length = Math.random() * 400 + 200; 
            this.speed = Math.random() * 1.5 + 0.5;  
            this.opacity = Math.random() * 0.4 + 0.1;
            this.tilt = (Math.random() - 0.5) * 30; 
        }
        draw() {
            this.y -= this.speed;
            if (this.y < -this.length) this.reset();

            ctx.beginPath();
            const gradient = ctx.createLinearGradient(
                this.x, this.y, 
                this.x + this.tilt, this.y + this.length
            );
            gradient.addColorStop(0, 'rgba(34, 211, 238, 0)');
            gradient.addColorStop(0.5, `rgba(34, 211, 238, ${this.opacity})`);
            gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.2;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.tilt, this.y + this.length);
            ctx.stroke();
        }
    }

    for (let i = 0; i < 20; i++) {
        lines.push(new StringLine());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        lines.forEach(line => line.draw());
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    animate();
}