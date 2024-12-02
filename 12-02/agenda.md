# Enunciado do Exercício: Sistema de Catálogo de Contatos

## Objetivo:
Você deverá criar um sistema de **Catálogo de Contatos**, onde cada contato será armazenado como um objeto e poderá ser manipulado de acordo com as opções do usuário. O sistema permitirá adicionar, editar, listar e remover contatos da lista.

## Requisitos:

### 1. Classes e Encapsulamento:
- Crie uma classe **`Contato`** que representa os dados de cada pessoa na agenda, com os seguintes atributos:
  - **Nome**: nome da pessoa (exemplo: "João Silva").
  - **Telefone**: um número de telefone (exemplo: "555-1234").
  - **Email**: um email (exemplo: "joao@exemplo.com").
  
- A classe **`Contato`** deve ter os seguintes métodos:
  - **Getters e Setters**:
    - `getNome()`: Retorna o nome do contato.
    - `setNome(nome: string)`: Altera o nome do contato.
    - `getTelefone()`: Retorna o telefone do contato.
    - `setTelefone(telefone: string)`: Altera o telefone do contato.
    - `getEmail()`: Retorna o email do contato.
    - `setEmail(email: string)`: Altera o email do contato.
  - **Métodos**:
    - `editarContato(nome: string, telefone: string, email: string)`: Permite editar as informações de um contato.
    - `mostrarContato()`: Exibe as informações do contato (nome, telefone e email).

### 2. Classe Agenda:
- Crie uma classe **`Agenda`** que representa o catálogo de contatos:
  - **Propriedades**:
    - `contatos: Contato[]`: lista de objetos `Contato` para armazenar todos os contatos.
  - **Métodos**:
    - `adicionarContato(contato: Contato)`: Adiciona um contato à lista.
    - `removerContato(nome: string)`: Remove um contato da lista com base no nome.
    - `listarContatos()`: Exibe todos os contatos armazenados na lista.
    - `buscarContato(nome: string)`: Busca e exibe os detalhes de um contato pelo nome.
    - `editarContato(nome: string, novoContato: Contato)`: Substitui um contato existente por outro.

### 3. Estrutura dos Arquivos:
- **`Contato.ts`**: Defina a classe `Contato`.
- **`Agenda.ts`**: Defina a classe `Agenda`.
- **`Main.ts`**: Defina o arquivo principal onde o menu será exibido, e as funções principais para executar o sistema.

### 4. Menu Interativo:
O arquivo **`Main.ts`** deve conter uma função `Main()` que simula um menu interativo usando a estrutura `while` e `switch case`, permitindo que o usuário escolha entre as seguintes opções:
  
- **1** - Adicionar contato.
- **2** - Remover contato.
- **3** - Listar todos os contatos.
- **4** - Buscar contato por nome.
- **5** - Editar contato.
- **6** - Sair.
  
O menu deve ser repetido até que o usuário escolha a opção de sair (opção 6). Use uma variável **`sustentaMenu`** (boolean) para controlar o loop.

#### Código do Menu:
```typescript
const ask = require('readline-sync');

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
      // Lógica para adicionar um contato
      break;
    case "2":
      // Lógica para remover um contato
      break;
    case "3":
      // Lógica para listar todos os contatos
      break;
    case "4":
      // Lógica para buscar um contato
      break;
    case "5":
      // Lógica para editar um contato
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
