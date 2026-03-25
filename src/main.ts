import './style.css'
import {random} from "./random.ts";
import {randomColorFunctions} from "./random-color-functions.ts";


const STAR_PATH = new Path2D(`M0,-45 
    L10.485,-13.905
    L42.797,-13.905
    L16.245,5.265
    L26.450,36.405
    L0,17.1
    L-26.450,36.405
    L-16.245,5.265
    L-42.797,-13.905
    L-10.485,-13.905 Z`);

const MARGIN = 80;
const LIMIT = MARGIN * 2;
const MAX_ROT = Math.PI * 4;

const HEADER = document.querySelector<HTMLElement>('header');
const TOP_MARGIN = HEADER ? HEADER.clientHeight : 0;
const FOOTER = document.querySelector<HTMLElement>('footer');
const BOTTOM_MARGIN = FOOTER ? FOOTER.clientHeight : 0;

const canvas = document.querySelector<HTMLCanvasElement>('#canvas');
if (!canvas) throw ("No canvas");

const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
if (!ctx) throw ("Failed to get context");

let colorFunctionIndex = -1;
const reset = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    colorFunctionIndex = ++colorFunctionIndex % randomColorFunctions.length;
}
const resize = () => {
    ctx.canvas.width = window.innerWidth - MARGIN;
    ctx.canvas.height = window.innerHeight - TOP_MARGIN - BOTTOM_MARGIN - MARGIN;
}

const draw = () => {
    const scale = Math.random() * 3;
    const rotate = random(0, MAX_ROT);
    const x = random(LIMIT / scale, (ctx.canvas.width - LIMIT) / scale)
    const y = random(LIMIT / scale, (ctx.canvas.height - LIMIT) / scale);
    const colors = randomColorFunctions[colorFunctionIndex]();

    ctx.save();
    ctx.fillStyle = colors.fillColor;
    ctx.strokeStyle = colors.strokeColor;
    ctx.scale(scale, scale);
    ctx.translate(x, y);
    ctx.rotate(rotate);
    ctx.fill(STAR_PATH);
    ctx.stroke(STAR_PATH);
    ctx.restore();
}

canvas.addEventListener("click", reset);
document.addEventListener("keypress", (ev) => {
    if (ev.key == " ") reset();
});
window.addEventListener("resize", resize);

reset();
resize();
setInterval(draw, 5);