# Script SQL: Criação e População da Tabela `tbclientes`

```sql
CREATE TABLE IF NOT EXISTS tbclientes (
  idClientes INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(255)
);

INSERT INTO tbclientes (idClientes, nome, email) VALUES
(1, 'Marquito', 'marquito@programadoratinho.com'),
(2, 'Nazaré Tedesco', 'nazare@viladasgracas.com'),
(3, 'Carminha Silva', 'carminha@divinaaventura.com'),
(4, 'Dona Florinda', 'florinda@vilaechaves.com'),
(5, 'Seu Madruga', 'madruga@vilaechaves.com'),
(6, 'Chaves', 'chaves@barrildeouro.com'),
(7, 'Sinhozinho Malta', 'malta@ranchoflorido.com'),
(8, 'Tieta do Agreste', 'tieta@santana.com'),
(9, 'Cláudio Adão', 'claudio@zapzao.com'),
(10, 'Jô Soares', 'jo@sofatalk.com');
