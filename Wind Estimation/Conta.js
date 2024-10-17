
function calcular() {

    let area = Number(document.getElementById('area').value)              // calcular com a foto
    let massa = Number(document.getElementById('massa').value)

    let bCoef = massa / area

    let arDensidade = Number(document.getElementById('densidade').value)
    let velocidade = Number(document.getElementById('velocidade').value)        //no log velocidade pico + a velocidade do ar
    let acele= Number(document.getElementById('aceleracao').value)

    let result1 = (velocidade) ** 2
    let result2 = (0.5 * arDensidade * result1) / bCoef
    let result3 = acele - result2

    let mCoef = result3 / velocidade

    document.getElementById('resultado').innerHTML = 'EK3_DRAG_BCOEF: ' + bCoef.toFixed(2) + ' EK3_DRAG_MCOEF: ' + mCoef.toFixed(2)

}