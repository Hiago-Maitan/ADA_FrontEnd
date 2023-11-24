const listArr = [
  { id: 1, titulo: "Academia", descricao: "LegDay" },
  { id: 2, titulo: "Academia", descricao: "Peito" },
  { id: 3, titulo: "Academia", descricao: "Costas" },
  { id: 4, titulo: "Academia", descricao: "Cardio" },
  { id: 5, titulo: "Academia", descricao: "Braco" },
  { id: 6, titulo: "Academia", descricao: "Triceps" },
];
console.log(listArr);

// Add new task
function addTasks() {
  try {
    const newTitleTask = prompt("Escreva o titulo");
    if (newTitleTask === "") {
      throw new Error("Título não pode estar vazio");
    }

    if (newTitleTask.length < 4) {
      throw new Error("O titulo deve ter no mínimo 4 caracteres");
    }

    const taskExist = listArr.find((item) => item.titulo == newTitleTask);
    if (taskExist) {
      throw new Error("Títilo já existente. Tente novamente");
    }

    const newDescTask = prompt("Escreva a descrição");
    if (newDescTask === "") {
      throw new Error("Descrição não pode estar vazio");
    }

    if (newDescTask.length < 20) {
      throw new Error("A descrição deve ter no mínimo 20 caracteres");
    } else {
      let ramdomID = Math.random().toFixed(3) * 1000;
      listArr.push({
        id: ramdomID,
        titulo: newTitleTask,
        descricao: newDescTask,
      });
      alert("Tarefa adicionada com sucesso :)");
      console.log(listArr);
    }
  } catch (error) {
    alert("ERRO: " + error.message);
  } finally {
    alert("Execussão finalizada");
  }
}

// Show all tasks
function showTasks() {
  console.log(listArr);
}

// Edit task
function editTask() {
  try {
    const findIDTask = Number(
      prompt("Digite o ID da tarefa que deseja editar")
    );

    // Verifying if tasks exist
    const taskExist = listArr.find((item) => item.id == findIDTask);
    if (taskExist) {
      const newTitle = prompt("Digite um novo título");
      const titleExist = listArr.find((item) => item.titulo == newTitle);

      // Verifying if title exist while editing the task
      if (titleExist) {
        throw new Error("Títilo já existente. Tente novamente");
      } else {
        const newDesc = prompt("Digite uma nova descrição");
        taskExist.titulo = newTitle;
        taskExist.descricao = newDesc;
        alert("Tarefa atualizada com suceso :)");
      }
    } else {
      throw new Error("Essa tarefa não existe no momento :(");
    }
  } catch (error) {
    alert("ERRO: " + error.message);
  } finally {
    alert("Execussão finalizada");
  }
}

// Find task
function findTask() {
  try {
    const findIDTask = Number(
      prompt("Digite o ID da tarefa que deseja procurar")
    );
    const taskExist = listArr.find((item) => item.id == findIDTask);

    if (taskExist) {
      alert(
        `Tarefa existente: ID: ${taskExist.id}, Título: ${taskExist.titulo}, Descrição: ${taskExist.descricao}`
      );
    } else {
      throw new Error("Essa tarefa não existe no momento :(");
    }
  } catch (error) {
    alert("ERRO: " + error.message);
  } finally {
    alert("Execussão finalizada");
  }
}

// Delete task
function deleteTasks() {
  try {
    const idRemove = Number(prompt("Digite o ID da tarefa que deseja excluir"));
    const correctIndice = listArr.findIndex((item) => item.id == idRemove);

    if (correctIndice === -1) {
      throw new Error("Tarefa não encontrada :( Tente Novamente");
    } else {
      listArr.splice(correctIndice, 1);
      alert("Tarefa excluida com suceso :)");
    }
  } catch (error) {
    alert("ERRO: " + error.message);
  } finally {
    alert("Execussão finalizada");
  }
}
