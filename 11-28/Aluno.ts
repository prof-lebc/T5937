export class Aluno{
    private nome: string
    private idade: number
    private nacionalidade: string
    private casa: string | null
    private classeMagica: string

    constructor(nome:string, idade: number, nacionalidade:string, classeMagica: string){
        this.nome = nome
        this.idade = idade
        this.classeMagica = classeMagica
        this.nacionalidade = nacionalidade
        this.casa = this.sorteiaCasa()
    }

    private sorteiaCasa(){
        const casas = ['Grifinoria', 'Lufa-lufa', 'Corvinal', 'Sonserina']

        return casas[Math.floor(Math.random() * casas.length)]
    }
    
    public exibirInformacoes(): void{
        console.log(`
Nome: ${this.nome}
Idade: ${this.idade}
Nacionalidade: ${this.nacionalidade}
Casa: ${this.casa}
Classe Magica: ${this.classeMagica}
________________________________________
        `)
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        if (idade > 0) {
            this.idade = idade;
        } else {
            console.log("Idade inválida.");
        }
    }

    public getNacionalidade(): string {
        return this.nacionalidade;
    }

    public setNacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade;
    }


    public getCasa(): string | null {
        return this.casa;
    }

    public setCasa(casa: string | null): void {
        this.casa = casa;
    }

    public getClasseMagica(): string {
        return this.classeMagica;
    }

    public setClasseMagica(classeMagica: string): void {
        this.classeMagica = classeMagica;
    }

}