class Produto{
    id;
    nome;
    ativo;
    //método constructor: especial
    constructor(id,nome){
        this.id = id;
        this.nome = nome;
        this.ativo = true;
    }
}

//instanciando = contruindo um objeto
const p1 = new Produto(1, "Carregador");
const p2 = new Produto(2, "Capinha");