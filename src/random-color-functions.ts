import {random} from "./random.ts";

const colors = (r: number, g: number, b: number) => {
    return {
        fillColor: `rgb(${r.toString()}, ${g.toString()}, ${b.toString()})`,
        strokeColor: `rgb(${(255 - r).toString()}, ${(255 - g).toString()}, ${(255 - b).toString()})`
    };
}
export const randomColorFunctions = [// Red, white and blue
    () => {
        let fillColor;
        const strokeColor = "";
        switch (random(1, 3)) {
            case 1:
                fillColor = "#ff0000";
                break;
            case 2:
                fillColor = "#ffffff";
                break;
            default:
                fillColor = "#0000ff";
        }
        return {
            fillColor, strokeColor
        };
    }, // Random color
    () => {
        return colors(random(0, 255), random(0, 255), random(0, 255));
    }, // Black and white
    () => {
        let fillColor = "";
        let strokeColor = "";
        switch (random(1, 2)) {
            case 1:
                fillColor = "#000000";
                strokeColor = "#fff";
                break;
            case 2:
                fillColor = "#ffffff";
                strokeColor = "#000";
                break;
        }
        return {
            fillColor, strokeColor
        };
    }, // Black and white with opacity
    () => {
        let fillColor = "";
        let strokeColor = "";
        switch (random(1, 2)) {
            case 1:
                fillColor = "#00000088";
                strokeColor = "#fff";
                break;
            case 2:
                fillColor = "#ffffff88";
                strokeColor = "#000";
                break;
        }
        return {
            fillColor, strokeColor
        };
    }, // Shades of blue
    () => {
        return colors(0, 0, random(0, 255));
    }, // Shades of red
    () => {
        return colors(random(0, 255), 0, 0);
    }, // Shades of green
    () => {
        return colors(0, random(0, 255), 0);
    }, // Shades of purple
    () => {
        const n = random(0, 255);
        return colors(n, 0, n);
    }, // Shades of yellow
    () => {
        const n = random(0, 255);
        return colors(n, n, 0);
    }, // Shades of silver
    () => {
        const n = random(192, 240);
        return colors(n - 32, n - 32, n + 32);
    }, // Shades of red alt
    () => {
        const n = random(192, 240);
        return colors(n, 0, 0);
    }, // Shades of blue alt
    () => {
        const n = random(192, 240);
        return colors(0, 0, n);
    }, // Shades of green alt
    () => {
        const n = random(192, 240);
        return colors(0, n, 0);
    }, // Shades of purple alt
    () => {
        const n = random(192, 240);
        return colors(n, 0, n);
    }, // Shades of yellow alt
    () => {
        const n = random(192, 256);
        return colors(n, n, 0);
    },

]
