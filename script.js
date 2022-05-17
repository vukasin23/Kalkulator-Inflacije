function inflationCalculator()
{
    let inflationRate = document.querySelector('#inflationRate');
    inflationRate = parseFloat(inflationRate.value) ;
    

    let money = document.getElementById('money');
    money = parseFloat(money.value);
    

    let years = document.getElementById('years');
    years = parseFloat(years.value);
    

    let worth = money +(money *(inflationRate/100));

    for(let i=1 ;i<years;i++)
    {
        worth+=worth *(inflationRate/100);
    }
    worth = worth.toFixed(2);
    console.log(worth);
    let noviH = document.createElement('h3');
    noviH.innerText=`Inflacija iznosi ${worth}`;
    let div = document.querySelector('.container');
    div.appendChild(noviH);
}
