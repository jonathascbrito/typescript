var SpaceCraft = /** @class */ (function () {
    //forma reduzida para criar um atributo diretamente no construtor
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    //o método não tem a necessidade de ser informada a palavra function
    SpaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpaceCraft;
}());
var ship = new SpaceCraft('hyperdrive');
ship.jumpIntoHyperspace();
