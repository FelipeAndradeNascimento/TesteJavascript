
var campoResposta = document.getElementById("txtResposta");
var campoPergunta = document.getElementById("txtPergunta");

var fnResultado = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
    var p=a[i].split('=', 2);
    if (p.length == 1)
    b[p[0]] = "";
    else
    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'));

var objTrem = {
    AB : 5,
    BC : 4,
    CD : 8,
    DC : 8,
    DE : 6,
    AD : 5,
    CE : 2,
    EB : 3,
    AE : 7,
    somaDoisPercursos : function(origem, destino){
        return origem + destino;
    },
    menorPercurso : function(rotas){
        var menorValor = rotas[0];
        for (var i=0; i<rotas.length; i++)
        {
            if (menorValor > rotas[i])
                menorValor = rotas[i];
        }
        return menorValor;
    }
};

    //questao 1
if (fnResultado.id == 1){
    campoResposta.value = objTrem.somaDoisPercursos(objTrem.AB, objTrem.BC);
	campoPergunta.value = "A distância da rota A-B-C ?";
}

    //questao 2
if (fnResultado.id == 2){
    campoResposta.value = objTrem.somaDoisPercursos(objTrem.AD,0);
	campoPergunta.value = "A distância da rota A-D ?";
}

    //questao 3
if (fnResultado.id == 3){
    campoResposta.value = objTrem.somaDoisPercursos(objTrem.AD, objTrem.DC);
	campoPergunta.value = "A distância da rota A-D-C ?";
}

    //questao 4
if (fnResultado.id == 4){
    campoResposta.value = objTrem.AE + objTrem.EB + objTrem.BC + objTrem.CD;
	campoPergunta.value = "A distância da rota A-E-B-C-D ?";
}

    //questao 5
if (fnResultado.id == 5){
    campoResposta.value = "Não é uma rota valida";
	campoPergunta.value = "A distância da rota A-E-D ?";
}

    //questao 6
if (fnResultado.id == 6){
    var arrSomaRotas_6 = [
        objTrem.somaDoisPercursos(objTrem.CD, objTrem.DC),
        objTrem.CE + objTrem.EB + objTrem.BC
    ];
    campoResposta.value = arrSomaRotas_6.length;
	campoPergunta.value = "O número de viagens começando em C e terminando em C com no máximo 3 paradas. "
	campoPergunta.value = campoPergunta.value + "Baseado no contexto apresentado, serão 2 rotas possíveis: C-D-C (2 paradas) e C-E-B-C (3 paradas) ?";
}

if (fnResultado.id == 7){
    var arrSomaRotas_7 = [
        objTrem.somaDoisPercursos(objTrem.AB, objTrem.BC),
        objTrem.somaDoisPercursos(objTrem.AD, objTrem.DC),
        objTrem.AD + objTrem.DE + objTrem.EB + objTrem.BC
    ];
    campoResposta.value = arrSomaRotas_7.length;
	campoPergunta.value = "O numero de viagens começando em A e terminando em C com exatamente 4 paradas. " 
	campoPergunta.value = campoPergunta.value + "Baseado no contexto apresentado, serão 3 rotas possíveis: A para C (via B,C,D); A para C (via D,C,D); e A para C (via D,E,B)";
}

    //questao 8
if (fnResultado.id == 8){
    var arrSomaRotas_8 = [
        objTrem.somaDoisPercursos(objTrem.AB, objTrem.BC),
        objTrem.somaDoisPercursos(objTrem.AD, objTrem.DC),
        objTrem.AE + objTrem.EB + objTrem.BC
    ];
    campoResposta.value = objTrem.menorPercurso(arrSomaRotas_8);
	campoPergunta.value = "O tamanho da menor viagem (em termos de distância) de A para C ?";
}

    //questao 9
if (fnResultado.id == 9){
    var arrSomaRotas_9 = [
        objTrem.BC + objTrem.CE + objTrem.EB,
        objTrem.BC + objTrem.CD + objTrem.DE + objTrem.EB,
        objTrem.BC + objTrem.CD + objTrem.DC + objTrem.CE + objTrem.EB
    ];
    campoResposta.value = objTrem.menorPercurso(arrSomaRotas_9);
	campoPergunta.value = "O tamanho da menor viagem (em termos de distância) de B para B ?";
}

if (fnResultado.id == 10)
{
    var arrSomaRotas_10 = [
        objTrem.CD + objTrem.DC,
        objTrem.CE + objTrem.EB + objTrem.BC,
        objTrem.CE + objTrem.EB + objTrem.BC + objTrem.CD + objTrem.DC,
        objTrem.CD + objTrem.DC + objTrem.CE + objTrem.EB + objTrem.BC,
        objTrem.CD + objTrem.DE + objTrem.BC + objTrem.EB + objTrem.BC,
        objTrem.CE + objTrem.EB + objTrem.BC + objTrem.CE + objTrem.EB + objTrem.BC,
        objTrem.CE + objTrem.EB + objTrem.BC + objTrem.CE + objTrem.EB + objTrem.BC + objTrem.CE + objTrem.EB + objTrem.BC
    ];
    var somaRotas = 0;
    var qtd = 0;
    for(var i=0; i < arrSomaRotas_10.length; i++){
        somaRotas = somaRotas + arrSomaRotas_10[i];
        if(somaRotas < 30){
            qtd++;
            somaRotas = 0;
        }
    }
    campoResposta.value = qtd;
	campoPergunta.value = "O numero de viagens começando em C e terminando em C com distância menor que 30. ";
	campoPergunta.value = campoPergunta.value + "Baseado no contexto apresentado, serão as rotas seguintes: CDC, CEBC, CEBCDC, CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC? ";
}