import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

// Função de impressão do cliente e dependentes
function imprimirCliente(cliente: Cliente) {
    console.log("\n---------- Cliente ----------\n")
    console.log(`Nome: ${cliente.nome}`);
    console.log(`Nome Social: ${cliente.nomeSocial}`);
    console.log(`Data de Cadastro: ${cliente.dataCadastro}`);
    console.log(`Data de Nascimento: ${cliente.dataNascimento}`);
    console.log(`Endereço: ${cliente.endereco.rua}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade}, ${cliente.endereco.estado}, ${cliente.endereco.pais}, ${cliente.endereco.codigoPostal}`);
    console.log("Telefones:");
    cliente.telefones.forEach(tel => {
        console.log(`- (${tel.ddd}) ${tel.numero}`);
    });

    console.log("\n---------- Dependentes ----------\n");
    cliente.dependentes.forEach(dep => {
        console.log(`Nome: ${dep.nome}`);
        console.log(`Nome Social: ${dep.nomeSocial}`);
        console.log(`Data de Cadastro: ${dep.dataCadastro}`);
        console.log(`Data de Nascimento: ${dep.dataNascimento}`);
        console.log("Telefones:");
        dep.telefones.forEach(tel => {
            console.log(`- (${tel.ddd}) ${tel.numero}`);
        });
        console.log("Endereço:");
        console.log(`${dep.endereco.rua}, ${dep.endereco.bairro}, ${dep.endereco.cidade}, ${dep.endereco.estado}, ${dep.endereco.pais}, ${dep.endereco.codigoPostal}`);
        console.log("\n");
    });
}

// Criação do cliente
let cliente = new Cliente()
cliente.nome = "Pedro de Alcântara João Carlos Leopoldo Salvador"
cliente.nomeSocial = "Dom Pedro II"
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

let endereco = new Endereco()
endereco.rua = "Rua Legal"
endereco.bairro = "Copacabana"
endereco.cidade = "Rio de Janeiro"
endereco.estado = "Rio de Janeiro"
endereco.pais = "Brasil"
endereco.codigoPostal = "22220-000"
cliente.endereco = endereco

let telefone1 = new Telefone()
telefone1.ddd = "21"
telefone1.numero = "12500800"
cliente.telefones.push(telefone1)

let telefone2 = new Telefone()
telefone2.ddd = "21"
telefone2.numero = "99887766"
cliente.telefones.push(telefone2)


// Criação do dependente
let dependente = new Cliente()
dependente.nome = "Isabel Cristina Leopoldina Augusta Micaela"
dependente.nomeSocial = "Princesa Isabel"
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.telefones = (cliente.telefones.map(telefone => telefone.clonar()) as Telefone[])
dependente.titular = cliente
cliente.dependentes.push(dependente)

// Chama a função para imprimir o cliente e dependente
imprimirCliente(cliente);