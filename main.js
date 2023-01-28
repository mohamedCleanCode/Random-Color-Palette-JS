const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");
const maxPaletteBox = 16;

const generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBox; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    let color = document.createElement("li");
    color.className = "color";
    color.innerHTML = `
                <div class="back-color" style="background-color: ${randomHex}"></div>
            <div class="hex-color">${randomHex}</div>`;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

const copyColor = (color, randomHex) => {
  navigator.clipboard.writeText(randomHex).then(() => {
    color.querySelector(".hex-color").innerHTML = "Copied";
    setTimeout(() => {
      color.querySelector(".hex-color").innerHTML = randomHex;
    }, 1000);
  });
};
generatePalette();

refreshBtn.addEventListener("click", generatePalette);
