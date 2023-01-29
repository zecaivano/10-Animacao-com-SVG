import { Cards } from "./Cards.js";
import { Icones } from "./Icones.js";
import { Footer } from "./Footer.js";

window.onload = () => {
    let animaCards = new Cards()
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))
    const icones = new Icones()
    icones.animeIcones()
    const footer = new Footer()
    footer.efeitoOnda()
}