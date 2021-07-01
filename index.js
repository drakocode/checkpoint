function preparar(opcao,time){
    let defaultTime;
    let result;
    console.log('Seu prato é: '+opcao);
    switch (opcao) {
        case 'pipoca': defaultTime =10
        console.log(opcao+` sendo preparado...`)
            break;
        case 'macarrao': defaultTime =8;
        console.log(opcao+` sendo preparado...`)
            break;
        case 'carne': defaultTime =15;
        console.log(opcao+` sendo preparado...`)
            break;
        case 'feijao': defaultTime =12;
        console.log(opcao+` sendo preparado...`)
            break;
        case 'brigadeiro': defaultTime =8;
        console.log(opcao+` sendo preparado...`)
            break
        default: console.log('Prato inexistente');
    }
    if(time >= 2*defaultTime && time < 3* defaultTime) {
     result = 'Sua comida queimou';
    }
    else if (time >= 3* defaultTime) {
        result ='kabumm';
    }
    else if(time < defaultTime) {
        result ='Tempo insuficiente';
    } else {
        result = 'pronto'
    }
    if (time != undefined) {
        defaultTime = time;
    }
    setTimeout(_=>{
        console.log(result)
        console.log('Prato pronto, bom apetite!!!')
    },defaultTime*1000)
}

preparar(`macarrao`,5)