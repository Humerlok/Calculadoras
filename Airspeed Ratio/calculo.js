function calcular(){

    let oldRatio = parseFloat(document.getElementById('oldRatio').value)
    let average = parseFloat(document.getElementById('average').value)
    let increase = parseFloat(document.getElementById('increase').value)


    let newRatio = oldRatio * ((average + increase)/average) ** 2

    document.getElementById('resultArea').innerHTML =  'new ratio: ' + String(newRatio.toFixed(2))

    console.log(oldRatio, average, increase)

}