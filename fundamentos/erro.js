function tratarErroELancar(error) {
    throw new Error ('Ocorreu um erro no processamento, nossa equipe de suporte já foi avisada')
    throw 10
    throw true
    throw 'mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)