import Cliente from "./modelos/cliente";
import Endereco from "./modelos/endereco";
import Telefone from "./modelos/telefone";

const prompt = require('prompt-sync')({sigint: true});

export let clientes: Cliente[] = [];

// CRUD Clientes

export function cadastrarCliente(nome: string, nomeSocial: string, dataNascimento: Date, endereco: Endereco, telefones: Telefone[]): Cliente {
    let cliente = new Cliente();
    cliente.nome = nome;
    cliente.nomeSocial = nomeSocial;
    cliente.dataCadastro = new Date();
    cliente.dataNascimento = dataNascimento;
    cliente.endereco = endereco;
    cliente.telefones = telefones;
    clientes.push(cliente);
    return cliente;
}

export function atualizarCliente(nomeCliente: string, novosDados: Partial<Cliente>) {
    let cliente = clientes.find(c => c.nome === nomeCliente);

    if (cliente) {
        if (novosDados.nome) cliente.nome = novosDados.nome;
        if (novosDados.nomeSocial) cliente.nomeSocial = novosDados.nomeSocial;
        if (novosDados.dataNascimento) cliente.dataNascimento = novosDados.dataNascimento;

        // Perguntar se deseja alterar o endereço
        const alterarEndereco = prompt("Deseja alterar o endereço? (s/n): ");
        if (alterarEndereco.toLowerCase() === 's') {
            const rua = prompt("Nova rua: ");
            const bairro = prompt("Novo bairro: ");
            const cidade = prompt("Nova cidade: ");
            const estado = prompt("Novo estado: ");
            const pais = prompt("Novo país: ");
            const codigoPostal = prompt("Novo código postal: ");

            cliente.endereco.rua = rua;
            cliente.endereco.bairro = bairro;
            cliente.endereco.cidade = cidade;
            cliente.endereco.estado = estado;
            cliente.endereco.pais = pais;
            cliente.endereco.codigoPostal = codigoPostal;
        }

        // Perguntar se deseja alterar os telefones
        const alterarTelefones = prompt("Deseja alterar os telefones? (s/n): ");
        if (alterarTelefones.toLowerCase() === 's') {
            // Limpar os telefones antigos
            cliente.telefones = [];

            let maisTelefones = true;
            while (maisTelefones) {
                const ddd = prompt("Novo DDD: ");
                const numero = prompt("Novo número: ");
                let telefone = new Telefone();
                telefone.ddd = ddd;
                telefone.numero = numero;
                cliente.telefones.push(telefone);

                maisTelefones = prompt("Deseja adicionar mais um telefone? (s/n): ") === 's';
            }
        }
    } else {
        console.log("\nCliente não encontrado.");
    }
}


export function deletarCliente(nomeCliente: string) {
    let clienteIndex = clientes.findIndex(c => c.nome === nomeCliente);

    if (clienteIndex !== -1) {
        const cliente = clientes[clienteIndex];

        // Remover o titular e seus dependentes
        clientes = clientes.filter(c => c !== cliente && c.titular !== cliente);
        
        console.log(`\nCliente ${cliente.nome} e seus dependentes foram deletados com sucesso!`);
    } else {
        console.log("\nCliente não encontrado.");
    }
}

export function lerCliente(nomeCliente: string) {
    let cliente = clientes.find(c => c.nome === nomeCliente);

    if (cliente) {
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`Data de Cadastro: ${cliente.dataCadastro}`);
        console.log(`Data de Nascimento: ${cliente.dataNascimento}`);

        // Exibir endereço em uma linha só
        console.log(`Endereço: ${cliente.endereco.rua}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade}, ${cliente.endereco.estado}, ${cliente.endereco.pais}, ${cliente.endereco.codigoPostal}`);

        // Exibir telefones
        if (cliente.telefones.length > 0) {
            console.log("Telefones:");
            cliente.telefones.forEach(tel => {
                console.log(`- (${tel.ddd}) ${tel.numero}`);
            });
        } else {
            console.log("\nNenhum telefone cadastrado.");
        }

        // Exibir dependentes
        if (cliente.dependentes.length > 0) {
            console.log("\nDependentes:");
            cliente.dependentes.forEach(dependente => {
                console.log(`- Nome: ${dependente.nome} | Nome Social: ${dependente.nomeSocial} | Data de Nascimento: ${dependente.dataNascimento}`);
            });
        } else {
            console.log("\nNenhum dependente cadastrado.");
        }

    } else {
        console.log("\nCliente não encontrado.");
    }
}

// CRUD Dependentes

export function adicionarDependente(titularNome: string, dependente: Cliente) {
    let titular = clientes.find(c => c.nome === titularNome);

    if (titular) {
        dependente.titular = titular;
        titular.dependentes.push(dependente);
        clientes.push(dependente);
        console.log("\nDependente adicionado com sucesso!");
    } else {
        console.log("\nTitular não encontrado.");
    }
}


export function listarDependentes(titularNome: string): Cliente[] {
    let titular = clientes.find(c => c.nome === titularNome);

    if (titular) {
        console.log(`\nDependentes de ${titular.nome}:`);
        titular.dependentes.forEach(dependente => {
            console.log(`- ${dependente.nome}`);
        });
        return titular.dependentes;
    } else {
        console.log("\nTitular não encontrado.");
        return [];
    }
}


export function listarTitular(dependenteNome: string) {
    let dependente = clientes.find(c => c.nome === dependenteNome);

    if (dependente && dependente.titular) {
        console.log(`\nO titular de ${dependente.nome} é ${dependente.titular.nome}`);
    } else {
        console.log(`\n${dependenteNome} não possui titular ou não foi encontrado.`);
    }
}

export function atualizarDependentes(titularNome: string) {
    let titular = clientes.find(c => c.nome === titularNome);

    if (titular) {
        // Remover todos os dependentes existentes
        titular.dependentes = [];

        let adicionarMais = true;

        while (adicionarMais) {
            const nomeDependente = prompt("Nome do novo dependente: ");
            const nomeSocialDependente = prompt("Nome social do dependente: ");
            const dataNascimentoStr = prompt("Data de nascimento do dependente (AAAA-MM-DD): ");
            const dataNascimento = new Date(dataNascimentoStr);

            let dependente = new Cliente();
            dependente.nome = nomeDependente;
            dependente.nomeSocial = nomeSocialDependente;
            dependente.dataCadastro = new Date();
            dependente.dataNascimento = dataNascimento;
            dependente.endereco = titular.endereco;  // Compartilhando o mesmo endereço do titular
            dependente.telefones = titular.telefones; // Compartilhando os mesmos telefones

            titular.dependentes.push(dependente);
            clientes.push(dependente);
            adicionarMais = prompt("Deseja adicionar mais dependentes? (s/n): ") === 's';
        }

        console.log("\nDependentes atualizados com sucesso!");
    } else {
        console.log("\nTitular não encontrado.");
    }
}

export function deletarDependente(titularNome: string, dependenteNome: string) {
    let titular = clientes.find(c => c.nome === titularNome);

    if (titular) {
        // Filtrar para remover o dependente específico
        let dependenteIndex = titular.dependentes.findIndex(dep => dep.nome === dependenteNome);

        if (dependenteIndex !== -1) {
            let dependenteRemovido = titular.dependentes.splice(dependenteIndex, 1)[0];
            // Remover o dependente da lista global de clientes
            clientes = clientes.filter(c => c !== dependenteRemovido);

            console.log(`\nDependente ${dependenteRemovido.nome} foi removido com sucesso!`);
        } else {
            console.log(`\nDependente ${dependenteNome} não encontrado.`);
        }
    } else {
        console.log("\nTitular não encontrado.");
    }
}
