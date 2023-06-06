class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = this.getRandomNumber();
    this.top = 0;
    this.width = 100;
    this.height = 150;
    this.element = this.createObstacleElement();
    this.gameScreen.appendChild(this.element);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 300 + 70);
  }

  createObstacleElement() {
    const element = document.createElement("img");
    element.src = "./images/redCar.png";
    element.style.position = "absolute";
    element.style.width = `${this.width}px`;
    element.style.height = `${this.height}px`;
    element.style.left = `${this.left}px`;
    element.style.top = `${this.top}px`;
    return element;
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}
