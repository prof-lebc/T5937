import { Agenda } from "./Agenda";
import { Contato } from "./Contato";
const ask = require('readline-sync');

function main() {
    let agenda = new Agenda()

    let sustentaMenu = true;
    while (sustentaMenu) {
        console.log("Escolha uma opção:");
        console.log("1 - Adicionar contato");
        console.log("2 - Remover contato");
        console.log("3 - Listar todos os contatos");
        console.log("4 - Buscar contato");
        console.log("5 - Editar contato");
        console.log("6 - Sair");

        const opcao = ask.question("Digite a opção desejada: ");

        switch (opcao) {
            case "1":
                console.clear()
                console.log('ADICIONANDO CONTATO')
                let nome = ask.question('Nome: ')
                let telefone = ask.question('Telefone: ')
                let email = ask.question('E-mail: ')

                let contatoNovo = new Contato(nome, telefone, email)
                
                agenda.adicionarContato(contatoNovo)
                break;
            case "2":
                console.clear()
                console.log('DELETAR CONTATO')
                let nomeDelete = ask.question('Digite o nome do contato que deseja deletar')
                let deletado: boolean = agenda.removerContato(nomeDelete)
                if(deletado){
                    console.log('Contato deletado com sucesso.')
                } else {
                    console.log('Contato nao encontrado')
                }
                ask.question('Tecle ENTER para continuar...')
                break;
            case "3":
                console.clear()
                agenda.listarContatos()
                ask.question('Tecle ENTER para continuar...')
                break;
            case "4":
                console.clear()
                console.log('BUSCAR CONTATO')
                let nomeBuscar = ask.question('Nome: ')
                agenda.buscarContato(nomeBuscar)
                ask.question('Tecle ENTER para continuar...')
                break;
            case "5":
                console.clear()
                console.log('EDITAR CONTATO')
                let nomeEditar = ask.question('Nome: ')
                console.clear()
                agenda.buscarContato(nomeEditar)
                let nomeNovo = ask.question('Novo nome: ')
                let telefoneNovo = ask.question(' Novo telefone: ')
                let emailNovo = ask.question('Novo E-mail: ')
                let contatoEditado = new Contato(nomeNovo, telefoneNovo, emailNovo)
                agenda.editarContato(nomeEditar, contatoEditado)
                break;
            case "6":
                sustentaMenu = false;
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

main()