import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");
canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

// PC用
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

// スマホ用
canvas.addEventListener("touchdown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touchup", () => {
  context.closePath();
  isDrag = false;
});

// 全消しボタンの挙動
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// 書いてようかどうか判断するためのフラグ
let isDrag = false;

// 描画するメソッド
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}
