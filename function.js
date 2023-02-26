/* Crie uma classe chamada Person que receba atributos nome, idade e altura, e um método apresentar que imprima: 'Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura'.

Crie uma classe que herde atributos e métodos da classe Person, adicione o método profissao, e reescreve o método apresentar para imprimir ‘Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura e sou ${profissao}’. */



    class Person {
        constructor(nome, idade, altura) { 
          this.nome = nome;
          this.idade = idade;
          this.altura = altura;
        } 
      
        apresentar() { 
          console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura.`);
        }
      }
      
      const pessoa = new Person("Daniel", 40, 1.75);
      pessoa.apresentar();
      