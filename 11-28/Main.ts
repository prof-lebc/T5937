import { Aluno } from "./Aluno";
const ask = require('readline-sync')
let alunos: Array<Aluno> = []
const classesMagicas: string[] = [
    "Feitiçaria e Encantamentos",
    "Poções",
    "Transfiguração",
    "Defesa Contra as Artes das Trevas",
    "Herbologia",
    "Astronomia",
    "História da Magia",
    "Cuidado de Criaturas Mágicas",
    "Voo",
    "Magia Experimental",
    "Divinação",
    "Runas Antigas"
]

function main() {

    let sustentaMenu: boolean = true

    while (sustentaMenu) {
        console.clear()
        console.log(`
Bem vindo a Hogwarts.

[1] Cadastrar aluno
[2] Ver alunos cadastrados
[3] Editar aluno
[4] Deletar aluno
[0] Sair
        `)

        let opcaoUsuario = Number(ask.question("Escolha uma opcao: "))
        switch (opcaoUsuario) {
            case 1:
                cadastrarAluno()
                break
            case 2:
                verAlunos()
                break
            case 3:
                editarAluno()
                break
            case 4:
                deletarAluno()
                break
            case 0:
                sustentaMenu = false
                break
            default:
                ask.question("Opcao invalida, tecle ENTER para continuar...")
                break
        }

    }
}

function cadastrarAluno() {
    console.clear()


    let nome = ask.question("Nome: ")
    let idade = Number(ask.question("Idade: "))
    let nacionalidade = ask.question("Nacionalidade: ")

    console.clear()
    let sustentaMenuClasse = true
    let classeMagica: string = ''

    while (sustentaMenuClasse) {
        console.log("Escolha a classe magica do aluno: ")
        let enumeracao = 1
        for (let classe of classesMagicas) {
            console.log(`${enumeracao} - ${classe}`)
            enumeracao++
        }
        let classeUsuario = Number(ask.question("Escolha uma opcao: "))

        switch (classeUsuario) {
            case 1:
                classeMagica = "Feitiçaria e Encantamentos";
                sustentaMenuClasse = false;
                break;
            case 2:
                classeMagica = "Poções";
                sustentaMenuClasse = false;
                break;
            case 3:
                classeMagica = "Transfiguração";
                sustentaMenuClasse = false;
                break;
            case 4:
                classeMagica = "Defesa Contra as Artes das Trevas";
                sustentaMenuClasse = false;
                break;
            case 5:
                classeMagica = "Herbologia";
                sustentaMenuClasse = false;
                break;
            case 6:
                classeMagica = "Astronomia";
                sustentaMenuClasse = false;
                break;
            case 7:
                classeMagica = "História da Magia";
                sustentaMenuClasse = false;
                break;
            case 8:
                classeMagica = "Cuidado de Criaturas Mágicas";
                sustentaMenuClasse = false;
                break;
            case 9:
                classeMagica = "Voo";
                sustentaMenuClasse = false;
                break;
            case 10:
                classeMagica = "Magia Experimental";
                sustentaMenuClasse = false;
                break;
            case 11:
                classeMagica = "Divinação";
                sustentaMenuClasse = false;
                break;
            case 12:
                classeMagica = "Runas Antigas";
                sustentaMenuClasse = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }

    }
    let alunoNovo = new Aluno(nome, idade, nacionalidade, classeMagica)
    alunos.push(alunoNovo)
}

function verAlunos() {
    console.clear()
    console.log("ALUNOS CADASTRADOS")

    for (let i = 0; i < alunos.length; i++) {
        console.log(i + 1)
        alunos[i].exibirInformacoes()
    }
    console.log('')
    ask.question('Tecle ENTER para continuar...')
}

function editarAluno() {
    let sustentaEdicao: boolean = true
    while (sustentaEdicao) {
        console.clear()
        for (let i = 0; i < alunos.length; i++) {
            console.log(`${i + 1} - ${alunos[i].getNome()}`)
        }
        let opcaoUsuario = Number(ask.question('Qual aluno deseja editar? '))
        if (opcaoUsuario < 1 || opcaoUsuario > alunos.length) {
            ask.question('Opcao invalida, tecle ENTER para continuar...')
        } else {
            let idadeNova = Number(ask.question('Digite a nova idade: '))
            alunos[opcaoUsuario - 1].setIdade(idadeNova)


            let sustentaMenuClasse: boolean = true
            let classeMagica: string = ''
            while (sustentaMenuClasse) {
                console.log("Escolha a classe magica do aluno: ")
                let enumeracao = 1
                for (let classe of classesMagicas) {
                    console.log(`${enumeracao} - ${classe}`)
                    enumeracao++
                }
                let classeUsuario = Number(ask.question("Escolha uma opcao: "))

                switch (classeUsuario) {
                    case 1:
                        classeMagica = "Feitiçaria e Encantamentos";
                        sustentaMenuClasse = false;
                        break;
                    case 2:
                        classeMagica = "Poções";
                        sustentaMenuClasse = false;
                        break;
                    case 3:
                        classeMagica = "Transfiguração";
                        sustentaMenuClasse = false;
                        break;
                    case 4:
                        classeMagica = "Defesa Contra as Artes das Trevas";
                        sustentaMenuClasse = false;
                        break;
                    case 5:
                        classeMagica = "Herbologia";
                        sustentaMenuClasse = false;
                        break;
                    case 6:
                        classeMagica = "Astronomia";
                        sustentaMenuClasse = false;
                        break;
                    case 7:
                        classeMagica = "História da Magia";
                        sustentaMenuClasse = false;
                        break;
                    case 8:
                        classeMagica = "Cuidado de Criaturas Mágicas";
                        sustentaMenuClasse = false;
                        break;
                    case 9:
                        classeMagica = "Voo";
                        sustentaMenuClasse = false;
                        break;
                    case 10:
                        classeMagica = "Magia Experimental";
                        sustentaMenuClasse = false;
                        break;
                    case 11:
                        classeMagica = "Divinação";
                        sustentaMenuClasse = false;
                        break;
                    case 12:
                        classeMagica = "Runas Antigas";
                        sustentaMenuClasse = false;
                        break;
                    default:
                        console.log("Opção inválida. Tente novamente.");
                        break;
                }

            }
            alunos[opcaoUsuario - 1].setClasseMagica(classeMagica)
            sustentaEdicao = false
        }
    }
}

function deletarAluno(){
    console.clear()
    verAlunos()
    let opcaoUsuario = ask.question('Digite o nome completo do aluno que quer deletar: ')
    for(let aluno of alunos){
        if(opcaoUsuario === aluno.getNome()){
            alunos.splice(alunos.indexOf(aluno), 1)
        }
    }
}





main()