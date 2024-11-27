Enunciado do Exercício 🎮⚔️
Neste exercício, você irá criar um sistema de combate entre personagens utilizando TypeScript. Vamos praticar conceitos de interfaces, classes e interação entre objetos. Siga os passos abaixo para completar o exercício:

1. Criação da Interface Personagem 🧑‍🦰🧙‍♂️
Crie uma interface chamada Personagem com os seguintes atributos:

nome: string — o nome do personagem.
vida: number — a quantidade de vida do personagem.
forca: number — a força de ataque do personagem.
defesa: number — a defesa do personagem.
A interface também deve declarar dois métodos:

atacar(inimigo: Personagem): void — Este método representa o ataque de um personagem a outro.
perderVida(dano: number): void — Este método permite que o personagem perca vida após sofrer um ataque.

2. Criação das Classes de Personagens ⚔️
Agora, crie duas classes de personagens que implementam a interface Personagem. As classes devem ser diferentes, representando personagens com características distintas:

Classe Guerreiro 🛡️: Um personagem com força e defesa balanceadas. Ele deve ser capaz de atacar e perder vida, como definido na interface.

Classe Mago 🔮: Um personagem com alta força de ataque e baixa defesa. Ele também deve seguir a estrutura da interface e ser capaz de atacar e perder vida.

3. Criação do Arquivo Main.ts 📝
No arquivo Main.ts, você vai orquestrar o combate entre os dois personagens. O arquivo deve:

Criar instâncias de dois personagens diferentes (um guerreiro e um mago).
Criar um loop de combate em que os personagens atacam alternadamente um ao outro até que um dos personagens perca toda a vida.
Quando o combate acabar, o programa deve imprimir uma mensagem dizendo qual personagem morreu (ou seja, o que ficou com vida igual ou inferior a 0).

Objetivo do Exercício 🎯
Trabalhar com interfaces e classes em TypeScript.
Implementar métodos que simulam um combate entre personagens.
Criar uma interação dinâmica entre objetos, fazendo o combate acontecer até a morte de um personagem.
