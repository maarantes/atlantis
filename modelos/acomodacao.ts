import { NomeAcomodacao } from "../enumeracoes/nomeAcomodacao"
import Cliente from "./cliente";

export default class Acomodacao {
    private nomeAcomodacao: NomeAcomodacao;
    private camaSolteiro: number;
    private camaCasal: number;
    private suite: number;
    private climatizacao: boolean;
    private garagem: number;
    public ocupadoPor: { titular: Cliente; totalPessoas: number } | null = null;

    constructor(nomeAcomodacao: NomeAcomodacao, camaSolteiro: number, camaCasal: number,
                suite: number, climatizacao: boolean, garagem: number) {
        this.nomeAcomodacao = nomeAcomodacao;
        this.camaSolteiro = camaSolteiro;
        this.camaCasal = camaCasal;
        this.suite = suite;
        this.climatizacao = climatizacao;
        this.garagem = garagem;
    }

    public get NomeAcomodacao() { return this.nomeAcomodacao; }
    public get CamaSolteiro() { return this.camaSolteiro; }
    public get CamaCasal() { return this.camaCasal; }
    public get Suite() { return this.suite; }
    public get Climatizacao() { return this.climatizacao; }
    public get Garagem() { return this.garagem; }
}
