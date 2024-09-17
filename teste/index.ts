import { cadastrarCliente, atualizarCliente, deletarCliente, lerCliente, adicionarDependente, listarDependentes, listarTitular, atualizarDependentes, deletarDependente } from "../clienteCRUD";
import { adicionarDocumento, atualizarDocumento, deletarDocumento, listarDocumentos } from "../documentoCRUD";
import { criarAcomodacao, listarAcomodacoes, atualizarAcomodacao, deletarAcomodacao, associarAcomodacao } from "../acomodacaoCRUD"; // Importando funções do CRUD de acomodação
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Acomodacao from "../modelos/acomodacao";

import { clientes } from "../clienteCRUD";

import "../ClientePreCadastrado";

const prompt = require("prompt-sync")({sigint: true});

console.log("\n----- Seja bem-vindo ao Hotel Atlantis! -----");

function menuCliente() {
    console.log("\n----- CRUD Clientes -----\n");
    console.log("1. [CREATE] Cadastrar Cliente");
    console.log("2. [READ] Listar Informações de um Cliente");
    console.log("3. [UPDATE] Atualizar Cliente");
    console.log("4. [DELETE] Deletar Cliente e seus Dependentes");
    console.log("0. Voltar ao menu principal");
}

function menuDependente() {
    console.log("\n----- CRUD Dependentes -----\n");
    console.log("1. [CREATE] Adicionar Dependente a um Cliente");
    console.log("2. [READ] Listar Dependentes de um Titular");
    console.log("3. [READ] Listar Titular de um Dependente");
    console.log("4. [UPDATE] Atualizar Dependentes de um Cliente");
    console.log("5. [DELETE] Deletar Dependente de um cliente");
    console.log("0. Voltar ao menu principal");
}

function menuDocumento() {
    console.log("\n----- CRUD Documentos -----\n");
    console.log("1. [CREATE] Adicionar Documento a um Cliente");
    console.log("2. [READ] Listar Documentos de um Cliente");
    console.log("3. [UPDATE] Atualizar Documento de um Cliente");
    console.log("4. [DELETE] Deletar Documento de um Cliente");
    console.log("0. Voltar ao menu principal");
}

function menuAcomodacao() {
    console.log("\n----- CRUD Acomodações -----\n");
    console.log("1. [CREATE] Criar Acomodação");
    console.log("2. [READ] Listar Acomodações");
    console.log("3. [UPDATE] Atualizar Acomodação");
    console.log("4. [DELETE] Deletar Acomodação");
    console.log("5. [ASSOCIATE] Associar Acomodação a Cliente e Dependentes");
    console.log("0. Voltar ao menu principal");
}

function cadastrarNovoCliente() {
    console.log("");
    const nome = prompt("Nome: ");
    const nomeSocial = prompt("Nome Social: ");
    const dataNascimentoStr = prompt("Data de Nascimento (AAAA-MM-DD): ");
    const dataNascimento = new Date(dataNascimentoStr);

    console.log("\n--- Cadastro de Endereço ---");
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

    console.log("\n--- Cadastro de Telefones ---");

    let telefones: Telefone[] = [];
    let maisTelefones = true;
    while (maisTelefones) {
        const ddd = prompt("DDD: ");
        const numero = prompt("Número: ");
        let telefone = new Telefone();
        telefone.ddd = ddd;
        telefone.numero = numero;
        telefones.push(telefone);
        maisTelefones = prompt("Deseja adicionar mais um telefone? (S/N): ") === "S";
    }

    cadastrarCliente(nome, nomeSocial, dataNascimento, endereco, telefones);
    console.log("\nCliente cadastrado com sucesso!");
}

function AtualizacaoCliente() {
    console.log("");
    const nomeCliente = prompt("Digite o nome do cliente que deseja atualizar: ");
    const novoNome = prompt("Novo nome (ENTER para pular): ");
    const novoNomeSocial = prompt("Novo nome social (ENTER para pular): ");
    const novaDataNascimentoStr = prompt("Nova data de nascimento (AAAA-MM-DD) (ENTER para pular): ");
    const novaDataNascimento = novaDataNascimentoStr ? new Date(novaDataNascimentoStr) : undefined;

    atualizarCliente(nomeCliente, { nome: novoNome || undefined, nomeSocial: novoNomeSocial || undefined, dataNascimento: novaDataNascimento });
    console.log("\nCliente atualizado com sucesso!");
}

function deletarClienteExistente() {
    console.log("");
    const nomeCliente = prompt("Digite o nome do cliente que deseja deletar: ");
    deletarCliente(nomeCliente);
}

function adicionarDependenteCliente() {
    console.log("");
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

function menuPrincipal() {
    console.log("\n----- Menu Principal -----\n");
    console.log("1. Acessar CRUD de Clientes");
    console.log("2. Acessar CRUD de Dependentes");
    console.log("3. Acessar CRUD de Documentos");
    console.log("4. Acessar CRUD de Acomodações");
    console.log("0. Sair");
}

// Loop do menu principal
let opcaoPrincipal = -1;
while (opcaoPrincipal !== 0) {
    menuPrincipal();
    console.log("");
    opcaoPrincipal = parseInt(prompt("Escolha uma opção: "));

    switch (opcaoPrincipal) {
        case 1:
            let opcaoCliente = -1;
            while (opcaoCliente !== 0) {
                menuCliente();
                console.log("");
                opcaoCliente = parseInt(prompt("Escolha uma opção: "));
                switch (opcaoCliente) {
                    case 1:
                        cadastrarNovoCliente();
                        break;
                    case 2:
                        console.log("");
                        const nomeCliente = prompt("Digite o nome do cliente: ");
                        lerCliente(nomeCliente);
                        break;
                    case 3:
                        AtualizacaoCliente();
                        break;
                    case 4:
                        deletarClienteExistente();
                        break;
                    case 0:
                        break;
                    default:
                        console.log("\nOpção inválida.");
                }
            }
            break;
        case 2:
            let opcaoDependente = -1;
            while (opcaoDependente !== 0) {
                menuDependente();
                console.log("");
                opcaoDependente = parseInt(prompt("Escolha uma opção: "));
                switch (opcaoDependente) {
                    case 1:
                        adicionarDependenteCliente();
                        break;
                    case 2:
                        console.log("");
                        const nomeTitularListarDep = prompt("Digite o nome do titular: ");
                        listarDependentes(nomeTitularListarDep);
                        break;
                    case 3:
                        console.log("");
                        const nomeDependente = prompt("Digite o nome do dependente: ");
                        listarTitular(nomeDependente);
                        break;
                    case 4:
                        console.log("");
                        const nomeTitularAtualizarDep = prompt("Digite o nome do titular para atualizar os dependentes: ");
                        atualizarDependentes(nomeTitularAtualizarDep);
                        break;
                    case 5:
                        console.log("");
                        const nomeTitularDeletarDep = prompt("Digite o nome do titular: ");
                        const nomeDependenteDeletar = prompt("Digite o nome do dependente a ser deletado: ");
                        deletarDependente(nomeTitularDeletarDep, nomeDependenteDeletar);
                        break;
                    case 0:
                        break;
                    default:
                        console.log("\nOpção inválida.");
                }
            }
            break;
        case 3:
            let opcaoDocumento = -1;
            while (opcaoDocumento !== 0) {
                menuDocumento();
                console.log("");
                opcaoDocumento = parseInt(prompt("Escolha uma opção: "));
                switch (opcaoDocumento) {
                    case 1:
                        console.log("");
                        const nomeTitularDoc = prompt("Digite o nome do titular ou dependente para adicionar o documento: ");
                        adicionarDocumento(nomeTitularDoc);
                        break;
                    case 2:
                        console.log("");
                        const nomeTitularListarDoc = prompt("Digite o nome do titular ou dependente para listar os documentos: ");
                        listarDocumentos(nomeTitularListarDoc);
                        break;
                    case 3:
                        console.log("");
                        const nomeTitularAtualizarDoc = prompt("Digite o nome do titular ou dependente para atualizar o documento: ");
                        atualizarDocumento(nomeTitularAtualizarDoc);
                        break;
                    case 4:
                        console.log("");
                        const nomeTitularDeletarDoc = prompt("Digite o nome do titular ou dependente para deletar o documento: ");
                        deletarDocumento(nomeTitularDeletarDoc);
                        break;
                    case 0:
                        break;
                    default:
                        console.log("\nOpção inválida.");
                }
            }
            break;
        case 4:
            let opcaoAcomodacao = -1;
            while (opcaoAcomodacao !== 0) {
                menuAcomodacao();
                console.log("");
                opcaoAcomodacao = parseInt(prompt("Escolha uma opção: "));
                switch (opcaoAcomodacao) {
                    case 1:
                        console.log("\nCriando uma nova acomodação...");
                        criarAcomodacao();
                        break;
                    case 2:
                        listarAcomodacoes();
                        break;
                    case 3:
                        case 3:
                            const indexAcomodacao = parseInt(prompt("Digite o índice da acomodação para atualizar: ")) - 1;
                            atualizarAcomodacao(indexAcomodacao);
                            break;
                    case 4:
                        const indexDelAcomodacao = parseInt(prompt("Digite o índice da acomodação para deletar: ")) - 1;
                        deletarAcomodacao(indexDelAcomodacao);
                        break;
                    case 5:
                        const titularNome = prompt("Digite o nome do titular: ");
                        const indexAssocAcomodacao = parseInt(prompt("Digite o índice da acomodação para associar: ")) - 1;
                        const titular = clientes.find(c => c.nome === titularNome);

                        if (titular) {
                            const dependentes = listarDependentes(titularNome);
                            associarAcomodacao(titular, dependentes, indexAssocAcomodacao);
                        } else {
                            console.log("Titular não encontrado.");
                        }
                        break;
                    case 0:
                        break;
                    default:
                        console.log("\nOpção inválida.");
                }
            }
            break;
        case 0:
            console.log("\nDesligando Software...");
            break;
        default:
            console.log("\nOpção inválida.");
    }
}
