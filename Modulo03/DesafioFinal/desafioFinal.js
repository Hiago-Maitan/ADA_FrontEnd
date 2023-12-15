// Instale a extenção Node.js Exec 
// e aperte a tecla F8 para testar a aplicação :)

// Tema do Exercício: Aplicativo de Lista de Tarefas (To-Do List) 
// com Programação Orientada a Objetos em JavaScript

class Tarefa {
  constructor(descricao, prioridade, status) {
    this.descricao = descricao;
    this.prioridade = prioridade;
    this.status = status;
  }
}

class ListaTarefas {
  constructor(nome) {
    this.nome = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }

  removerTarefa(tarefa) {
    this.tarefas = this.tarefas.filter((item) => item !== tarefa);
  }

  marcarConcluida(tarefa) {
    const index = this.tarefas.indexOf(tarefa);
    if (index !== -1) {
      this.tarefas[index].status = "concluída";
    }
  }

  exibirLista() {
    console.log(`Lista de Tarefas - ${this.nome}`);
    this.tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. Descrição: ${tarefa.descricao}, Prioridade: ${tarefa.prioridade}, Status: ${tarefa.status}`);
    });
  }

  calcularEstatisticas() {
    const totalTarefas = this.tarefas.length;
    const concluidas = this.tarefas.filter((tarefa) => tarefa.status === "concluída").length;
    const pendentes = totalTarefas - concluidas;

    return {
      totalTarefas,
      concluidas,
      pendentes,
    };
  }
}

class AplicativoToDoList {
  constructor() {
    this.listasTarefas = [];
    this.listaAtual = null;
  }

  criarLista(nome) {
    const novaLista = new ListaTarefas(nome);
    this.listasTarefas.push(novaLista);
  }

  selecionarLista(nome) {
    const listaSelecionada = this.listasTarefas.find((lista) => lista.nome === nome);
    if (listaSelecionada) {
      this.listaAtual = listaSelecionada;
    } else {
      console.log("Lista não encontrada.");
    }
  }

  exibirListasDisponiveis() {
    return this.listasTarefas.map((lista) => lista.nome);
  }
}

const tarefa1 = new Tarefa("Estudar JavaScript", "alta", "pendente");

const appToDoList = new AplicativoToDoList();
appToDoList.criarLista("Estudos");
appToDoList.selecionarLista("Estudos");
appToDoList.listaAtual.adicionarTarefa(new Tarefa("Ler livro", "média", "pendente"));

console.log(appToDoList.exibirListasDisponiveis());

appToDoList.listaAtual.exibirLista();

appToDoList.listaAtual.marcarConcluida(tarefa1);

appToDoList.listaAtual.removerTarefa()

console.log(appToDoList.listaAtual.calcularEstatisticas());

const tarefa2 = new Tarefa("Fazer exercícios de POO", "média", "pendente");

const appToDoList2 = new AplicativoToDoList();
appToDoList2.criarLista("Música");
appToDoList2.selecionarLista("Música");
appToDoList2.listaAtual.adicionarTarefa(new Tarefa("Tocar violão", "baixa", "concluída"));
appToDoList2.listaAtual.adicionarTarefa(new Tarefa("Tocar piano", "alta", "pendente"));

console.log(appToDoList2.exibirListasDisponiveis());

appToDoList2.listaAtual.exibirLista();

appToDoList2.listaAtual.marcarConcluida(tarefa1);

appToDoList2.listaAtual.removerTarefa()

console.log(appToDoList2.listaAtual.calcularEstatisticas());
