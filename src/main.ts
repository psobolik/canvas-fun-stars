import './style.css'
import {random} from "./random.ts";
import {randomColorFunctions} from "./random-color-functions.ts";

const WIDTH = 800;
const HEIGHT = 800;
const MARGIN = 80;
const MAX_ROT = Math.PI * 4;


const canvas = document.querySelector<HTMLCanvasElement>('#canvas');
if (!canvas) throw ("No canvas");

canvas.setAttribute('width', WIDTH.toString());
canvas.setAttribute('height', HEIGHT.toString());

const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
if (!ctx) throw ("Failed to get context");

let colorFunctionIndex = -1;
const reset = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    colorFunctionIndex = ++colorFunctionIndex % randomColorFunctions.length;
}

canvas.addEventListener("click", reset);
document.addEventListener("keypress", (ev) => {
    if (ev.key == " ") reset();
});
reset();

setInterval(() => {
    const scale = Math.random() * 3;
    const rotate = random(0, MAX_ROT);
    const x = random(MARGIN, (WIDTH / scale) - MARGIN)
    const y = random(MARGIN, (HEIGHT / scale) - MARGIN);
    const colors = randomColorFunctions[colorFunctionIndex]();

    ctx.save();
    ctx.fillStyle = colors.fillColor;
    ctx.strokeStyle = colors.strokeColor;
    ctx.scale(scale, scale);
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.fill(starPath);
    ctx.stroke(starPath);
    ctx.restore();
}, 5)

const starPath = new Path2D(`M0,-45 
    L10.485,-13.905
    L42.797,-13.905
    L16.245,5.265
    L26.450,36.405
    L0,17.1
    L-26.450,36.405
    L-16.245,5.265
    L-42.797,-13.905
    L-10.485,-13.905 Z`);
