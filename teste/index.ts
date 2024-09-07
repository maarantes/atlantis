import { cadastrarCliente, atualizarCliente, deletarCliente, lerCliente, adicionarDependente, listarDependentes, listarTitular, atualizarDependentes, deletarDependente } from '../clienteCRUD';
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

import "../ClientePreCadastrado"

const prompt = require('prompt-sync')({sigint: true});

console.log("\n----- Seja bem-vindo ao Hotel Atlantis! -----");

function menu() {
    console.log("\n----- CRUD Clientes -----\n");
    console.log("1. [CREATE] Cadastrar Cliente");
    console.log("2. [READ] Listar Informações de um Cliente");
    console.log("3. [UPDATE] Atualizar Cliente");
    console.log("4. [DELETE] Deletar Cliente e seus Dependentes");
    console.log("\n----- CRUD Dependentes -----\n");
    console.log("5. [CREATE] Adicionar Dependente a um Cliente");
    console.log("6. [READ] Listar Dependentes de um Titular");
    console.log("7. [READ] Listar Titular de um Dependente");
    console.log("8. [UPDATE] Atualizar Dependentes de um Cliente");
    console.log("9. [DELETE] Deletar Dependente de um cliente");
    console.log("0. Sair");
}

function cadastrarNovoCliente() {
    console.log("\n")
    const nome = prompt("Nome: ");
    const nomeSocial = prompt("Nome Social: ");
    const dataNascimentoStr = prompt("Data de Nascimento (AAAA-MM-DD): ");
    const dataNascimento = new Date(dataNascimentoStr);

    console.log("\n--- Cadastro de Endereço ---")
    const rua = prompt("Rua: ");
    const bairro = prompt("Bairro: ");
    const cidade = prompt("Cidade: ");
    const estado = prompt("Estado: ");
    const pais = prompt("País: ");
    const codigoPostal = prompt("Código Postal: ");

    let endereco = new Endereco();
    endereco.rua = rua;
    endereco.bairro = bairro;
    endereco.cidade = cidade;
    endereco.estado = estado;
    endereco.pais = pais;
    endereco.codigoPostal = codigoPostal;

    console.log("\n--- Cadastro de Telefones ---")

    let telefones: Telefone[] = [];
    let maisTelefones = true;
    while (maisTelefones) {
        const ddd = prompt("DDD: ");
        const numero = prompt("Número: ");
        let telefone = new Telefone();
        telefone.ddd = ddd;
        telefone.numero = numero;
        telefones.push(telefone);
        maisTelefones = prompt("Deseja adicionar mais um telefone? (s/n): ") === 's';
    }

    cadastrarCliente(nome, nomeSocial, dataNascimento, endereco, telefones);
    console.log("\nCliente cadastrado com sucesso!");
}

function AtualizacaoCliente() {
    console.log("\n")
    const nomeCliente = prompt("Digite o nome do cliente que deseja atualizar: ");
    const novoNome = prompt("Novo nome (ENTER para pular): ");
    const novoNomeSocial = prompt("Novo nome social (ENTER para pular): ");
    const novaDataNascimentoStr = prompt("Nova data de nascimento (AAAA-MM-DD) (ENTER para pular): ");
    const novaDataNascimento = novaDataNascimentoStr ? new Date(novaDataNascimentoStr) : undefined;

    atualizarCliente(nomeCliente, { nome: novoNome || undefined, nomeSocial: novoNomeSocial || undefined, dataNascimento: novaDataNascimento });
    console.log("\nCliente atualizado com sucesso!");
}

function deletarClienteExistente() {
    console.log("\n")
    const nomeCliente = prompt("Digite o nome do cliente que deseja deletar: ");
    deletarCliente(nomeCliente);
}

function adicionarDependenteCliente() {
    console.log("\n")
    const nomeTitular = prompt("Digite o nome do titular: ");
    const nomeDependente = prompt("Nome do dependente: ");
    const nomeSocialDependente = prompt("Nome social do dependente: ");
    const dataNascimentoStr = prompt("Data de nascimento do dependente (AAAA-MM-DD): ");
    const dataNascimento = new Date(dataNascimentoStr);

    let dependente = new Cliente();
    dependente.nome = nomeDependente;
    dependente.nomeSocial = nomeSocialDependente;
    dependente.dataCadastro = new Date();
    dependente.dataNascimento = dataNascimento;

    adicionarDependente(nomeTitular, dependente);
}

// Loop do menu
let opcao = -1;
while (opcao !== 0) {
    menu();
    
    console.log("\n")
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            cadastrarNovoCliente();
            break;
        case 2:
            console.log("\n")
            const nomeCliente = prompt("Digite o nome do cliente: ");
            lerCliente(nomeCliente);
            break;
        case 3:
            AtualizacaoCliente();  // Atualize o nome aqui
            break;
        case 4:
            deletarClienteExistente();
            break;
        case 5:
            adicionarDependenteCliente();
            break;
        case 6:
            console.log("\n")
            const nomeTitularListarDep = prompt("Digite o nome do titular: ");
            listarDependentes(nomeTitularListarDep);
            break;
        case 7:
            console.log("\n")
            const nomeDependente = prompt("Digite o nome do dependente: ");
            listarTitular(nomeDependente);
            break;
        case 8:
            console.log("\n")
            const nomeTitularAtualizarDep = prompt("Digite o nome do titular para atualizar os dependentes: ");
            atualizarDependentes(nomeTitularAtualizarDep);
            break;
        case 9:
            console.log("\n")
            const nomeTitularDeletarDep = prompt("Digite o nome do titular: ");
            const nomeDependenteDeletar = prompt("Digite o nome do dependente a ser deletado: ");
            deletarDependente(nomeTitularDeletarDep, nomeDependenteDeletar);
            break;
        case 0:
            console.log("\nDesligando Software...");
            break;
        default:
            console.log("\nOpção inválida.");
    }
}
