function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let tab2 = document.getElementById('seltab2')
    let tab3 = document.getElementById('seltab3')
    let tab4 = document.getElementById('seltab4')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        tab2.innerHTML = ''
        tab3.innerHTML = ''
        tab4.innerHTML = ''
        let c = 1
        let d = 1
        let e = 1
        while (c <= 100) {
            let item = document.createElement('option')
            let item3 = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)

            item3.text = `${n} x ${c} = ${n*c}`
            item3.value = `tab3${c}`
            tab3.appendChild(item3)
            c++
        }
        while (d >= 1 && d <= 100) {
            d+=n
            let item2 = document.createElement('option')
            item2.text = `${d} - ${n} = ${d-n}`
            item2.value = `tab2${d}`
            tab2.appendChild(item2)
            d-=n
            d++
        }
        while (e >= 1 && e <= n*100) {
            e+=n
            e--
            let item4 = document.createElement('option')
            item4.text = `${e} / ${n} = ${e/n}`
            item4.value = `tab4${e}`
            tab4.appendChild(item4)
            e++
        }
    } 
}