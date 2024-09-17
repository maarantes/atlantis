import DiretorSolteiroSimples from "./diretores/diretorSolteiroSimples";
import DiretorSolteiroMais from "./diretores/diretorSolteiroMais";
import DiretorCasalSimples from "./diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "./diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "./diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "./diretores/diretorFamiliaSuper";
import Acomodacao from "./modelos/acomodacao";
import Cliente from "./modelos/cliente";

const prompt = require('prompt-sync')({sigint: true});

let acomodacoes: Acomodacao[] = [];

export function criarAcomodacao() {
    console.log("Escolha o modelo de acomodação:");
    console.log("1 - Solteiro Simples");
    console.log("2 - Solteiro Mais");
    console.log("3 - Casal Simples");
    console.log("4 - Familia Simples");
    console.log("5 - Familia Mais");
    console.log("6 - Familia Super");

    const escolha = parseInt(prompt("Digite o número correspondente ao modelo: "));

    let acomodacao: Acomodacao;

    switch (escolha) {
        case 1:
            acomodacao = new DiretorSolteiroSimples().construir();
            break;
        case 2:
            acomodacao = new DiretorSolteiroMais().construir();
            break;
        case 3:
            acomodacao = new DiretorCasalSimples().construir();
            break;
        case 4:
            acomodacao = new DiretorFamiliaSimples().construir();
            break;
        case 5:
            acomodacao = new DiretorFamiliaMais().construir();
            break;
        case 6:
            acomodacao = new DiretorFamiliaSuper().construir();
            break;
        default:
            console.log("\nOpção inválida. A Acomodação não foi criada.");
            return;
    }

    acomodacoes.push(acomodacao);
    console.log(`Acomodação ${acomodacao.NomeAcomodacao} criada com sucesso!`);
}

export function associarAcomodacao(titular: Cliente, dependentes: Cliente[], indexAcomodacao: number) {
    if (indexAcomodacao < 0 || indexAcomodacao >= acomodacoes.length) {
        console.log("Índice de acomodação inválido!");
        return;
    }

    // Verifica se o cliente já está associado a outra acomodação
    const acomodacaoOcupada = acomodacoes.find(acomodacao => acomodacao.ocupadoPor?.titular.nome === titular.nome);

    if (acomodacaoOcupada) {
        console.log(`O titular ${titular.nome} já está associado à acomodação ${acomodacaoOcupada.NomeAcomodacao}.`);
        return;
    }

    const acomodacao = acomodacoes[indexAcomodacao];
    
    const capacidadeTotal = acomodacao.CamaSolteiro + (acomodacao.CamaCasal * 2);
    const totalPessoas = 1 + dependentes.length;

    if (totalPessoas <= capacidadeTotal) {
        acomodacao.ocupadoPor = { titular, totalPessoas };
        console.log(`Acomodação associada ao grupo de ${titular.nome} (${totalPessoas} pessoas)`);
    } else {
        console.log("Acomodação não tem espaço suficiente para todos.");
    }
}


export function listarAcomodacoes() {
    if (acomodacoes.length === 0) {
        console.log("Nenhuma acomodação disponível.");
    } else {
        console.log("\n----- Acomodações Disponíveis -----");
        acomodacoes.forEach((acomodacao, index) => {
            const status = acomodacao.ocupadoPor
                ? `Alugado por grupo de ${acomodacao.ocupadoPor.titular.nome} (${acomodacao.ocupadoPor.totalPessoas} pessoas)`
                : "Disponível";

            console.log(`${index + 1}. Nome: ${acomodacao.NomeAcomodacao} | Status: ${status}`);
        });
    }
}

export function criarAcomodacaoComRetorno(): Acomodacao {
    console.log("\nEscolha o modelo de acomodação:");
    console.log("1 - Solteiro Simples");
    console.log("2 - Solteiro Mais");
    console.log("3 - Casal Simples");
    console.log("4 - Familia Simples");
    console.log("5 - Familia Mais");
    console.log("6 - Familia Super");

    const escolha = parseInt(prompt("Digite o número correspondente ao modelo: "));
    let acomodacao: Acomodacao;

    switch (escolha) {
        case 1:
            acomodacao = new DiretorSolteiroSimples().construir();
            break;
        case 2:
            acomodacao = new DiretorSolteiroMais().construir();
            break;
        case 3:
            acomodacao = new DiretorCasalSimples().construir();
            break;
        case 4:
            acomodacao = new DiretorFamiliaSimples().construir();
            break;
        case 5:
            acomodacao = new DiretorFamiliaMais().construir();
            break;
        case 6:
            acomodacao = new DiretorFamiliaSuper().construir();
            break;
        default:
            console.log("Opção inválida. Acomodação não criada.");
            return null; // Se a opção for inválida, retorna null
    }

    return acomodacao; // Retorna a nova acomodação criada
}

export function atualizarAcomodacao(index: number) {
    if (index >= 0 && index < acomodacoes.length) {
        console.log("\n--- Atualizar Acomodação ---");
        console.log("Escolha um novo tipo de acomodação para substituir o atual:");

        const novaAcomodacao = criarAcomodacaoComRetorno(); // Chama a função que retorna a nova acomodação sem adicionar ao array
        acomodacoes[index] = novaAcomodacao; // Substitui a acomodação antiga pela nova

        console.log("Acomodação atualizada com sucesso!");
    } else {
        console.log("Acomodação não encontrada.");
    }
}

export function deletarAcomodacao(index: number) {
    if (index >= 0 && index < acomodacoes.length) {
        const acomodacao = acomodacoes[index];

        acomodacoes.splice(index, 1);
        console.log("Acomodação deletada com sucesso!");
    } else {
        console.log("Acomodação não encontrada.");
    }
}