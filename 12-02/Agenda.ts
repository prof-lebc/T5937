import { Contato } from "./Contato";

export class Agenda {
    private contatos: Array<Contato>

    constructor() {
        this.contatos = []
    }

    public adicionarContato(novoContato: Contato) {
        this.contatos.push(novoContato)
    }

    public removerContato(nome: string): boolean {
        let encontrou: boolean = false
        for (let contato of this.contatos) {
            if (nome === contato.getNome()) {
                this.contatos.splice(this.contatos.indexOf(contato), 1)
                encontrou = true
            }
        }
        return encontrou
    }

    public listarContatos(): void {
        for (let i = 0; i < this.contatos.length; i++) {
            console.log(i + 1, ')', this.contatos[i].mostrarContato())
        }
    }

    public buscarContato(nome: string): void {
        let encontrou: boolean = false
        for (let contato of this.contatos) {
            if (nome === contato.getNome()) {
                console.log(contato.mostrarContato())
                encontrou = true
            }
        }
        if (!encontrou) {
            console.log('Contato inexistente.')
        }
    }

    public editarContato(nome: string, contatoNovo: Contato): boolean {
        let encontrou: boolean = false
        for (let i in this.contatos) {
            if (this.contatos[i].getNome() === nome) {
                this.contatos[i] = contatoNovo
                encontrou: true
            }
        }
        return encontrou
    }

}