const fontSize = 20;

class Matrix {

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        const fps = 30;
        this.nextFrame = 1000 / fps;

        this.lastTime = 0;
        this.timer = 0;
    }

    setMatrix = (timeStamp) => {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.nextFrame) {
            this.ctx.fillStyle = 'rgba(137, 196, 244, 0.09)';
            this.ctx.textAlign = 'center';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = 'black';
            this.ctx.font = fontSize + 'px monospace';
            this.effect.symbols.forEach(symbol => symbol.draw(this.ctx));
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }
        requestAnimationFrame(this.setMatrix);
    };

    render() {
        this.effect = new Effect(this.canvas.width, this.canvas.height);

        this.setMatrix(0);

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.effect.resize(this.canvas.width, this.canvas.height);
        });
    }
}

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        // this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.characters = '01';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.text = '';
    }

    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
           this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.columns = this.canvasWidth / fontSize;
        this.symbols = [];
        this.#initialize();
    }

    #initialize() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, fontSize, this.canvasHeight);
        }
    }

    resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / fontSize;
        this.symbols = [];
        this.#initialize();
    }
}

export default function renderMatrixEffect() {
    return new Matrix().render();
}
