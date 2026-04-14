// 0 funzione genere coppie numeri casuali
// 1 funzione visualizza matrice
// 2 funzione  controllo celle 
// 3 funzione nascondi 
// 4 funzione confronta celle
// shuffle
//let = myTimeOut = setTimeout (, 5000 )

function creaNumeri(n) {
    let matrice = []
    let conta = -1

    for (let i = 0; i < n; i++) {
         matrice[i] = []

        for (let j = 0; j < n; j++) {
            if ( j  % 2 == 0) {
                conta++
            }    
            matrice [i][j] = conta 
         
        }   
    }

    return matrice;
}

function mescola (matrice) {
      let r
      let c
      let x
    for ( let i = 0; i < matrice.length; i ++) {
        for ( let j = 0; j < matrice.length; j++) {
            r = Math.trunc (Math.random ( ) * matrice.length)            
            c = Math.trunc (Math.random ( ) * matrice.length)
            x = matrice [r][c]
            matrice [r][c] = matrice [i][j]
            matrice [i][j] = x

        }
    }
}

function main () {
    let n = 6
    let x = creaNumeri(n)
    mescola (x)
    console.log( x )    
    //apri tabella

    let t = document.getElementById("target")
    let tab = document.createElement("table")
      
    let prima = null
    let seconda = null
    let blocca = false

    for (let i = 0; i < x.length; i++) {
        let riga = document.createElement("tr")

        for (let j = 0; j < x.length; j++) {
            let el = document.createElement("td")
            
            el.coperto = true
            el.innerHTML = "" 
            el.style.backgroundColor = "#a0264e" 

            el.onclick = function () {
                if (!(blocca || !el.coperto)) {
                el.innerHTML = x[i][j]
                el.coperto = false
                el.style.backgroundColor = "#f7a4b7"

                if (!prima) {
                    prima = el
                } if (!seconda && el !== prima) {
                    seconda = el
                    blocca = true
                    if (prima.innerHTML == seconda.innerHTML) {
                          prima.style.backgroundColor = "#b6e2a1" 
                          seconda.style.backgroundColor = "#b6e2a1"
                          prima = null
                          seconda = null
                          blocca = false

                    } else  {
                        setTimeout(() => {
                            prima.innerHTML = ""
                            seconda.innerHTML = ""
                            prima.coperto = true
                            seconda.coperto = true
                            prima.style.backgroundColor = "#a0264e"
                            seconda.style.backgroundColor = "#a0264e"
                            prima = null
                            seconda = null
                            blocca = false
                        }, 1000)
                    }
                }
            }
            }

            riga.appendChild(el)
        }
        tab.appendChild(riga)
    }
    t.appendChild(tab)

}