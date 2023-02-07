import { decode } from "https://deno.land/x/pngs@0.1.1/mod.ts";

import { mainloop, Path2D, WindowCanvas } from "../ext/canvas.ts";
import { applyDark, applyMicaAlt } from "../ext/styles/mod.ts";

const win = new WindowCanvas({
  title: "Avocado",
  width: 500,
  height: 500,
  resizable: false,
  transparent: true,
  floating: true,
});

const img = await fetch(
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Avocado/3D/avocado_3d.png",
);
win.window.setIcon(decode(new Uint8Array(await img.arrayBuffer())));

applyMicaAlt(win.window);
applyDark(win.window);

win.ctx.scale(15, 15);
win.onDraw = (ctx) => {

  // from https://github.com/microsoft/fluentui-emoji/blob/main/assets/Avocado/Flat/avocado_flat.svg
  ctx.fillStyle = "#44911B";
  ctx.fill(
    new Path2D(
      "M25.5799 20.33C25.7399 18.44 25.2499 16.61 26.5899 15.27L27.4199 14.44C29.7799 12.08 29.7799 8.24002 27.4199 5.88002L25.5599 4.02002L24.2199 5.36002C22.7299 5.40002 21.2499 5.99002 20.1099 7.13002L19.8999 7.33002C18.5599 8.67002 16.7899 9.49002 14.9099 9.65002C12.4099 9.86002 10.0699 10.95 8.28994 12.73C5.31994 15.7 4.50994 20.01 5.86994 23.71L5.18994 24.39L7.73994 26.94C11.8199 31.02 18.4299 31.02 22.5099 26.94C24.2799 25.17 25.3699 22.83 25.5799 20.33Z",
    ),
  );
  ctx.fillStyle = "#008463";
  ctx.fill(
    new Path2D(
      "M20.66 2C18.82 2 17.08 2.72 15.78 4.02L15.6 4.21C14.65 5.16 13.38 5.75 12.03 5.87C9.44 6.09 7.01 7.22 5.18 9.05C3.13 11.1 2 13.83 2 16.72C2 19.62 3.13 22.34 5.18 24.39C7.23 26.44 9.95 27.57 12.85 27.57C15.75 27.57 18.47 26.44 20.52 24.39C22.35 22.56 23.49 20.12 23.71 17.54C23.82 16.19 24.41 14.93 25.37 13.97L25.56 13.78C26.86 12.48 27.58 10.74 27.58 8.9C27.58 7.06 26.86 5.32 25.56 4.02C24.24 2.72 22.51 2 20.66 2Z",
    ),
  );
  ctx.fillStyle = "#C3EF3C";
  ctx.fill(
    new Path2D(
      "M24.3201 12.93L24.5101 12.74C26.6301 10.62 26.6301 7.17997 24.5101 5.05997C22.3901 2.93997 18.9501 2.93997 16.8301 5.05997L16.6401 5.24997C15.4401 6.44997 13.8501 7.18997 12.1601 7.32997C9.9101 7.51997 7.8101 8.49997 6.2201 10.09C2.5601 13.75 2.5601 19.68 6.2201 23.34C9.8801 27 15.8101 27 19.4701 23.34C21.0601 21.75 22.0401 19.65 22.2301 17.4C22.3801 15.72 23.1201 14.13 24.3201 12.93Z",
    ),
  );
  ctx.fillStyle = "#6D4534";
  ctx.fill(
    new Path2D(
      "M13.2899 20.69C15.6979 20.69 17.6499 18.7379 17.6499 16.33C17.6499 13.922 15.6979 11.97 13.2899 11.97C10.882 11.97 8.92993 13.922 8.92993 16.33C8.92993 18.7379 10.882 20.69 13.2899 20.69Z",
    ),
  );
};

await mainloop(() => {
  win.draw();
});
