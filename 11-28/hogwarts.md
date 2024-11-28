# 🧙‍♂️ **Exercício: Sistema de Cadastro e Edição de Alunos de Hogwarts** 🧙‍♀️

Bem-vindo ao mundo mágico de **Hogwarts**! Neste exercício, você vai criar um sistema para cadastrar, editar, listar e deletar alunos de nossa querida escola de magia! O sistema será implementado em **TypeScript** e irá funcionar com a criação de uma classe `Aluno`, além de uma interface para interagir com o usuário. Prepare-se para criar funcionalidades fantásticas! 💫

## **Requisitos do Exercício** 📜

### **1. Classe `Aluno`** 🦸‍♂️

A classe `Aluno` deve possuir os seguintes atributos e métodos:

- **Atributos**:
  - `nome: string` – O nome do aluno.
  - `idade: number` – A idade do aluno.
  - `nacionalidade: string` – A nacionalidade do aluno.
  - `casa: string | null` – A casa de Hogwarts para a qual o aluno foi selecionado (iniciado como `null`).

- **Métodos**:
  - `sortearCasa()` – Um método que sorteia uma casa aleatória entre as quatro casas de Hogwarts: **Grifinória**, **Sonserina**, **Lufa-Lufa** ou **Corvinal**. O sorteio deve ser feito de forma aleatória e atribuído ao atributo `casa`.

### **2. Arquivo `Main.ts`** ⚡

- O código deve estar **estruturado em funções**.
- **Função Principal**: A função `Main()` deve ser o ponto de entrada do sistema e deve gerenciar o fluxo principal de ações do usuário.
- **Array de Alunos**: Todos os **objetos `Aluno`** criados durante a execução do programa devem ser armazenados dentro de um **array de alunos** na função `Main()`. Este array deve ser utilizado para acessar, editar, listar e deletar os alunos cadastrados.

O sistema deve permitir as seguintes operações:

- **Cadastrar novo aluno** 🎓
- **Ver alunos cadastrados** 📝
- **Editar dados de um aluno** ✏️
- **Deletar um aluno** 🧨

### **Fluxo do Sistema** 🌟

1. **Cadastrar Aluno**:
   - O usuário poderá cadastrar um novo aluno com nome, idade e nacionalidade.
   - Após o cadastro, o aluno será sorteado para uma casa de Hogwarts, caso ainda não tenha sido atribuído.

2. **Ver Alunos**:
   - O sistema deve exibir a lista de alunos cadastrados, mostrando nome, idade, nacionalidade e a casa de Hogwarts do aluno.

3. **Editar Aluno**:
   - O usuário poderá editar os dados de um aluno específico (nome, idade, nacionalidade ou casa).

4. **Deletar Aluno**:
   - O usuário poderá excluir um aluno da lista.

### **Requisitos Adicionais** ✨

- Todos os **dados** (nome, idade, nacionalidade, casa) devem ser mantidos na memória do sistema enquanto o programa estiver rodando.
- As funções devem ser simples, bem organizadas e fáceis de entender.
- Lembre-se de usar **boas práticas de programação** e manter o código modularizado.

### **Observações Importantes** 🧙‍♂️

- O sistema deve ser interativo através do console, utilizando prompts e console.logs para interação com o usuário.
- **Todas as funções** (como cadastrar, editar, deletar, etc.) devem ser implementadas de forma modular e o fluxo principal deve estar centralizado na função `Main()`.
- **Boa sorte, bruxo(a)!** ✨⚡

Vamos ver como você se sai nesse desafio mágico! ✨
