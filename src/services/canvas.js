const initCanvas = (canvasName, videoName) => {
  const canvas = document.querySelector(canvasName);
  const ctx = canvas.getContext("2d");

  let posX = 300;

  canvas.addEventListener("mousemove", e => {
    posX = e.offsetX;
  })

  function draw(){
    ctx.save();
    ctx.beginPath();
    ctx.rect(posX - 175, 0, 350, 750);
    ctx.clip();

    ctx.drawImage(document.querySelector(videoName), 0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();

    requestAnimationFrame(animate);
  }

  animate();
}

export { initCanvas };