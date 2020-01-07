class SpaceCraft {

    //forma reduzida para criar um atributo diretamente no construtor
    constructor (public propulsor: string){}
    
    //o método não tem a necessidade de ser informada a palavra function
    jumpIntoHyperspace(){
    
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

    let ship = new SpaceCraft('hyperdrive')
    ship.jumpIntoHyperspace()


}