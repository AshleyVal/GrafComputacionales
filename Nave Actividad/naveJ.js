function naveJ() {
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 20;
    this.rotation = 0;
    this.showFlame = false;
}

naveJ.prototype.draw = function (context) {
    var nave = new Image();
    nave.src = "NaveE.png";

    var fuego = new Image();
    fuego.src = "Fuego.png";

    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    context.drawImage(nave, -nave.width / 2, -nave.height / 2);

    if (this.showFlame) {

        context.drawImage(fuego, -fuego.width / 2 + 3, -fuego.height / 2);

    }
    context.restore();
};
