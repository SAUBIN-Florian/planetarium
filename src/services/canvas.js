const initCanvas = (canvasName, videoName) => {
  const canvas = document.querySelector(canvasName);
  const ctx = canvas.getContext("2d");

  let posX = 50;

  canvas.addEventListener("mousemove", e => {
    posX = e.offsetX;
  })

  function draw(){
    ctx.save();
    ctx.beginPath();
    ctx.rect(posX - 140, 0, 280, canvas.height);
    ctx.clip();

    ctx.drawImage(document.querySelector(videoName), 0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  function resizeCanvasToDisplaySize(canvas) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
 
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
 
    return false;
 }

  function animate(){
    resizeCanvasToDisplaySize(canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();

    requestAnimationFrame(animate);
  }

  animate();
}

export { initCanvas };