/*************************************************************************************************** */

function crearCuenta() {
  // Obtener los valores de los campos de registro
  var nombre = document.getElementById('nombreInput').value;
  var apellidoPaterno = document.getElementById('apellidoPaternoInput').value;
  var apellidoMaterno = document.getElementById('apellidoMaternoInput').value;
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;
  var codigoColegiado = document.getElementById('codigoColegiadoInput').value;

  // Validar que los campos no estén vacíos
  if (nombre.trim() === '' || apellidoPaterno.trim() === '' || apellidoMaterno.trim() === '' || 
      email.trim() === '' || password.trim() === '' || codigoColegiado.trim() === '') {
      alert('Por favor, completa todos los campos. Recuerda ingresar un CORREO VÁLIDO y un NÚMERO en el código de colegiado');
      return;
  }

  // Validar el formato del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un formato de correo electrónico válido.');
      return;
  }

  // Validar que el código colegiado contenga solo números
  var codRegex = /^\d+$/;
  if (!codRegex.test(codigoColegiado)) {
      alert('El código colegiado debe contener solo números.');
      return;
  }

  // Redirigir a la página de explorar si la validación es exitosa
  window.location.href = 'explorar.html';
}

/*************************************************************************************************** */

function iniciarSesion() {
  // Obtener los valores de los campos de entrada
  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  // Validar que los campos no estén vacíos
  if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Por favor, ingresa una direccion de correo valida');
            return;
        }

  // Redirigir a miperfil.html si la validación es exitosa
  window.location.href = 'explorar.html';
}

/*************************************************************************************************** */

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file) {
            // Aquí puedes realizar acciones adicionales con el archivo seleccionado
            console.log('Archivo seleccionado:', file.name);
        }
    }

/*************************************************************************************************** */

function addInput(containerId, inputType) {
    // Obtener el contenedor del input
    var inputContainer = document.getElementById(containerId);

    // Crear un nuevo div para la fila de input
    var inputRow = document.createElement("div");
    inputRow.className = "input-row";

    // Crear un nuevo input
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = inputType + " Nº" + (inputContainer.childElementCount + 1);
    newInput.required = true;

    // Crear un nuevo botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "-";
    deleteButton.onclick = function () {
        deleteInput(inputContainer, inputRow);
    };

    // Agregar el nuevo input y botón al div de la fila de input
    inputRow.appendChild(newInput);
    inputRow.appendChild(deleteButton);

    // Agregar la fila de input al contenedor
    inputContainer.appendChild(inputRow);

    // Actualizar los placeholders después de agregar
    updatePlaceholders(inputContainer);
}

/*************************************************************************************************** */

function deleteInput(inputContainer, inputRow) {
    // Eliminar la fila de input
    inputContainer.removeChild(inputRow);

    // Actualizar los placeholders después de la eliminación
    updatePlaceholders(inputContainer);
}

/*************************************************************************************************** */

function updatePlaceholders(inputContainer) {
    // Obtener todos los inputs en el contenedor
    var inputs = inputContainer.getElementsByClassName("input-row");

    // Actualizar los placeholders según la posición
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i].getElementsByTagName("input")[0];
        input.placeholder = input.placeholder.replace(/\d+/g, i + 1);
    }
}
/*************************************************************************************************** */


  
  function publishRecipe() {
    // Obtener los valores de los campos
    var title = document.querySelector('input[placeholder="Título *"]').value;
    var description = document.querySelector('textarea[placeholder="Descripción *"]').value;
    var preparationTime = document.querySelector('input[placeholder="Tiempo de Preparación *"]').value;
    var servings = document.querySelector('input[placeholder="Cantidad de porciones *"]').value;
    var calories = document.querySelector('input[placeholder="Cantidad de calorías *"]').value;
  
    // Obtener los ingredientes
    var ingredients = [];
    var ingredientsInputs = document.getElementById("ingredients").querySelectorAll("input");
    ingredientsInputs.forEach(function (input) {
      ingredients.push(input.value);
    });
  
    // Obtener los pasos
    var steps = [];
    var stepsInputs = document.getElementById("steps").querySelectorAll("input");
    stepsInputs.forEach(function (input) {
      steps.push(input.value);
    });
  
    // Aquí puedes agregar la lógica para enviar los datos al servidor o realizar otras acciones
    console.log("Receta Publicada:");
    console.log("Título:", title);
    console.log("Descripción:", description);
    console.log("Tiempo de Preparación:", preparationTime);
    console.log("Porciones:", servings);
    console.log("Calorías:", calories);
    console.log("Ingredientes:", ingredients);
    console.log("Pasos:", steps);
  }
  
  /*************************************************************************************************** */