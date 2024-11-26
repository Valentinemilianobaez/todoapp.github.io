document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    // Función para añadir una nueva tarea
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
  
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Eliminar</button>
        `;
  
        // Event listener para marcar/desmarcar tarea como completada
        taskItem.addEventListener('click', () => {
          taskItem.classList.toggle('completed');
        });
  
        // Event listener para eliminar tarea
        taskItem.querySelector('.delete-btn').addEventListener('click', (event) => {
          event.stopPropagation();  // Evitar que el clic se propague (no marque la tarea como completada)
          taskItem.remove();
        });
  
        // Agregar la tarea a la lista
        taskList.appendChild(taskItem);
  
        // Limpiar el input
        taskInput.value = '';
        taskInput.focus();
      }
    }
  });
  