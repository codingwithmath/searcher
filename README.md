# **Buscador**

### **Descrição**

Dado uma sentença, o buscador irá procurar em uma massa de dados quais os arquivos que a possuem.
<br>
No momento da execução a massa de dados é preparada e separada em um arquivo `.json`, que conterá todas as informações de forma organizada.
<br>
O objetivo principal foi criar um código simples e elegante, utilizando as features que a linguagem oferece. Com uma escrita que qualquer pessoa consiga entender com facilidade, de forma desacoplada, testável e de fácil manutenção.

### **Instalação**

**clonando o repositório**:

```bash
$ git clone https://github.com/codingwithmath/searcher.git && cd /searcher
```

**rodando o projeto**:

```bash
$ node search.js "pesquisa_que_deseja_relizar"
```

### **exemplo**:

comando:

```bash
$ node search.js "george lucas"
```

**resultado**:

```bash
Foram encontradas 11 ocorrências.
Os arquivos que possuem george lucas são:
01-42-1.txt
captain-eo.txt
electronic-labyrinth-thx-1138-4eb.txt
merry-in-laws.txt
milius.txt
more-american-graffiti.txt
star-wars-the-clone-wars-darth-maul-returns.txt
star-wars-the-legacy-revealed.txt
the-beginning-making-episode-i.txt
the-people-vs-george-lucas.txt
within-a-minute-the-making-of-episode-iii.txt
```

### Testes

**instalando o jest**:

```bash
$ npm install
```

**rodando os testes**:

```bash
$ npm run test
```

**cobertura de testes**:

```bash
$ npm run coverage
```
