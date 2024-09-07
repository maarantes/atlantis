import Cliente from "./modelos/cliente";
import Endereco from "./modelos/endereco";
import Telefone from "./modelos/telefone";
import { cadastrarCliente, adicionarDependente } from "./clienteCRUD";

// Cliente Dom Pedro II

let enderecoPedro = new Endereco();
enderecoPedro.rua = "Rua Legal";
enderecoPedro.bairro = "Copacabana";
enderecoPedro.cidade = "Rio de Janeiro";
enderecoPedro.estado = "Rio de Janeiro";
enderecoPedro.pais = "Brasil";
enderecoPedro.codigoPostal = "22220-000";

let telefonePedro1 = new Telefone();
telefonePedro1.ddd = "21";
telefonePedro1.numero = "12500800";

let telefonePedro2 = new Telefone();
telefonePedro2.ddd = "21";
telefonePedro2.numero = "99887766";

// Cadastrar Pedro

let pedro = cadastrarCliente(
    "Pedro",
    "Dom Pedro II",
    new Date(1825, 11, 2),
    enderecoPedro,
    [telefonePedro1, telefonePedro2]
);

// Dependente Princesa Isabel

let isabel = new Cliente();
isabel.nome = "Isabel";
isabel.nomeSocial = "Princesa Isabel";
isabel.dataCadastro = new Date(1921, 10, 14);
isabel.dataNascimento = new Date(1846, 6, 29);
isabel.endereco = enderecoPedro;
isabel.telefones = [telefonePedro1, telefonePedro2];

adicionarDependente(pedro.nome, isabel);
