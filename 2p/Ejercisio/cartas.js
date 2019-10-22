class Card {
    constructor() {

    }
    printCard(n) {
        let arrCartas = []
        if (n >= 0 && n <= 13) {
            arrCartas.push('Trebol')
        } else if (n >= 14 && n <= 26) {
            arrCartas.push('Diamantes')
        } else if (n >= 27 && n <= 39) {
            arrCartas.push('Corazones')
        } else if (n >= 40) {
            arrCartas.push('Picas')
        }
        switch (n % 13) {
            case 0:
                arrCartas.push(13)
                break
            case 1:
                arrCartas.push('as')
                break

            case 2:
                arrCartas.push(2)
                break
            case 3:
                arrCartas.push(3)
                break
            case 4:
                arrCartas.push(4)
                break
            case 5:
                arrCartas.push(5)
                break
            case 6:
                arrCartas.push(6)
                break
            case 7:
                arrCartas.push(7)
                break
            case 8:
                arrCartas.push(8)
                break
            case 9:
                arrCartas.push(9)
                break
            case 10:
                arrCartas.push(10)
                break
            case 11:
                arrCartas.push(11)
                break
            case 12:
                arrCartas.push(12)
                break

            default:
                throw new Error
        }
        
        return  arrCartas
    }
    printNumber(carta, numero) {
        let sum = 0
        switch (carta) {
            case 'Trebol':
                sum = 0
                break
            case 'Diamantes':
                sum = 13
                break
            case 'Corazones':
                sum = 26
                break
            case 'Picas':
                sum = 39
                break
            default:
                throw new Error

        }
        return sum + numero;
    }
    threeOfAKind() {
        return ((54912) / (fact(52) / (fact(47) * fact(5)))) * 100 + '%'

        function fact(z) {
            if (z <= 1) {
                return 1
            } else {

                return z * fact(--z)
            }
        }
    }
}
let c1 = new Card()
console.log(c1.printCard(24))
console.log(c1.printNumber('Diamantes', 11))
console.log(c1.threeOfAKind())
