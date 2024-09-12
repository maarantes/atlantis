import Documento from "./modelos/documento";
import { TipoDocumento } from "./enumeracoes/tipoDocumento";

import { clientes } from './clienteCRUD';
const prompt = require('prompt-sync')({sigint: true});

export function adicionarDocumento(nomeCliente: string) {
    let cliente = clientes.find(c => c.nome === nomeCliente);

    if (cliente) {
        const tipoDoc = parseInt(prompt("Escolha o tipo de documento (1: CPF | 2: RG | 3: Passaporte): "));
        let tipo: TipoDocumento;
        switch (tipoDoc) {
            case 1:
                tipo = TipoDocumento.CPF;
                break;
            case 2:
                tipo = TipoDocumento.RG;
                break;
            case 3:
                tipo = TipoDocumento.Passaporte;
                break;
            default:
                console.log("\nTipo de documento inválido.");
                return;
        }

        const numero = prompt("Digite o número do documento: ");
        const dataExpedicaoStr = prompt("Digite a data de expedição (AAAA-MM-DD): ");
        const dataExpedicao = new Date(dataExpedicaoStr);

        const documento = new Documento(numero, tipo, dataExpedicao);
        cliente.documentos.push(documento);

        console.log(`\nDocumento ${tipo} adicionado com sucesso para ${cliente.nome}!`);
    } else {
        console.log("\nCliente não encontrado.");
    }
}

export function listarDocumentos(nomeCliente: string) {
    let cliente = clientes.find(c => c.nome === nomeCliente);

    if (cliente) {
        if (cliente.documentos.length > 0) {
            console.log(`\nDocumentos de ${cliente.nome}:`);
            cliente.documentos.forEach(doc => {
                console.log(`Tipo: ${doc.tipo} | Número: ${doc.numero} | Data de Expedição: ${doc.dataExpedicao.toLocaleDateString()}`);
            });
        } else {
            console.log(`\n${cliente.nome} não possui documentos cadastrados.`);
        }
    } else {
        console.log("\nCliente não encontrado.");
    }
}

export function atualizarDocumento(nomeCliente: string) {
    let cliente = clientes.find(c => c.nome === nomeCliente);

    if (cliente) {
        listarDocumentos(nomeCliente);
        console.log("");
        const numeroDoc = prompt("Digite o número do documento que deseja atualizar: ");
        let documento = cliente.documentos.find(d => d.numero === numeroDoc);

        if (documento) {
            const novoNumero = prompt("Novo número do documento (ENTER para pular): ");
            const novaDataExpedicaoStr = prompt("Nova data de expedição (AAAA-MM-DD) (ENTER para pular): ");
            const novaDataExpedicao = novaDataExpedicaoStr ? new Date(novaDataExpedicaoStr) : documento.dataExpedicao;

            if (novoNumero) documento.numero = novoNumero;
            documento.dataExpedicao = novaDataExpedicao;

            console.log(`\nDocumento atualizado com sucesso!`);
        } else {
            console.log("\nDocumento não encontrado.");
        }
    } else {
        console.log("\nCliente não encontrado.");
    }
}

export function deletarDocumento(nomeCliente: string) {
    let cliente = clientes.find(c => c.nome === nomeCliente);

    if (cliente) {
        listarDocumentos(nomeCliente);
        console.log("");
        const numeroDoc = prompt("Digite o número do documento que deseja deletar: ");
        const documentoIndex = cliente.documentos.findIndex(d => d.numero === numeroDoc);

        if (documentoIndex !== -1) {
            cliente.documentos.splice(documentoIndex, 1);
            console.log(`\nDocumento removido com sucesso!`);
        } else {
            console.log("\nDocumento não encontrado.");
        }
    } else {
        console.log("\nCliente não encontrado.");
    }
}
