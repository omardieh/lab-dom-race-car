class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = this.createPlayerElement(imgSrc);
    this.gameScreen.appendChild(this.element);
  }

  createPlayerElement(imgSrc) {
    const element = document.createElement("img");
    element.src = imgSrc;
    element.style.position = "absolute";
    element.style.width = `${this.width}px`;
    element.style.height = `${this.height}px`;
    element.style.left = `${this.left}px`;
    element.style.top = `${this.top}px`;
    return element;
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    this.handleBoundary();
    this.updatePosition();
  }

  handleBoundary() {
    const minLeft = 10;
    const maxLeft = this.gameScreen.offsetWidth - this.width - 10;
    const minTop = 10;
    const maxTop = this.gameScreen.offsetHeight - this.height - 10;
    this.left = Math.max(minLeft, Math.min(maxLeft, this.left));
    this.top = Math.max(minTop, Math.min(maxTop, this.top));
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    );
  }
}
