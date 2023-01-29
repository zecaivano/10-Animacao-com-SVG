export class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById("section-dicas")
        this.cardEsq = document.querySelector('.card-esq')
        this.cardDir = document.querySelector('.card-dir')
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculaScroll.bind(this))
    }
    calculaScroll() {
        const posicao =  this.posicaoSectionDicas.getBoundingClientRect()['y']
        console.log(posicao);
        if(posicao >= 25) {
            this.cardEsq.style.transform = 
            `translate(${((-posicao) + 70)/10}%)`
            this.cardDir.style.transform = 
            `translate(${((posicao) - 70)/10}%)`
        }
    }
}