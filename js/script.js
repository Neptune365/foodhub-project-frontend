function togglePassword() {
  var passwordInput = document.getElementById('passwordInput');
  var toggleBtn = document.getElementById('togglePasswordBtn');

  // Cambiar el tipo del input entre "password" y "text"
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = 'Ocultar';
  } else {
      passwordInput.type = 'password';
      toggleBtn.textContent = 'Mostrar';
  }
}

// Función para verificar la fortaleza de la contraseña
function checkPasswordStrength() {
  var passwordInput = document.getElementById('passwordInput');
  var passwordStrength = document.getElementById('passwordStrength');

  // Verificar la longitud de la contraseña
  var lengthRequirement = passwordInput.value.length >= 8;

  // Verificar si la contraseña contiene al menos un número
  var containsNumber = /\d/.test(passwordInput.value);

  // Verificar si la contraseña contiene al menos una letra mayúscula
  var containsUppercase = /[A-Z]/.test(passwordInput.value);

  // Comprobar todas las condiciones
  if (lengthRequirement && containsNumber && containsUppercase) {
      passwordStrength.textContent = 'Contraseña segura';
      passwordStrength.className = 'valid';
      return true;
  } else {
      passwordStrength.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y una letra mayúscula';
      passwordStrength.className = '';
      return false;
  }
}

// Asociar la función de verificación de fortaleza a eventos del input de contraseña
var passwordInput = document.getElementById('passwordInput');
passwordInput.addEventListener('input', checkPasswordStrength);

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

  // Validar que el código colegiado contenga solo números y no sea mayor a 6 dígitos
  var codRegex = /^\d+$/;
  if (!codRegex.test(codigoColegiado) || codigoColegiado.length > 6 || codigoColegiado < 0) {
      alert('El código colegiado debe contener solo números, no debe ser mayor a 6 dígitos, y no puede ser menor a 0.');
      return;
  }

  // Verificar la fortaleza de la contraseña
  var isPasswordStrong = checkPasswordStrength();

  // Resto de la lógica, como abrir el modal, etc.
  if (isPasswordStrong) {
    openModal();
  } else {
    alert('La contraseña no cumple con los requisitos de seguridad.');
  }
}

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function redirectToExplorar() {
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
            // Obtener la imagen de perfil
            const profileImage = document.getElementById('profileImage');

            // Crear un objeto FileReader para leer el contenido del archivo
            const reader = new FileReader();

            // Cuando la lectura se completa, actualizar el atributo src de la imagen con la nueva imagen
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };

            // Leer el contenido del archivo como una URL de datos
            reader.readAsDataURL(file);
        }
}

/*************************************************************************************************** */

function addInput(containerId, inputType) {
  // Obtener el contenedor del input
  var inputContainer = document.getElementById(containerId);

  // Crear un nuevo div para la fila de input
  var inputRow = document.createElement("div");
  inputRow.className = "input-row";

  // Crear un nuevo elemento (input o textarea)
  var newInput;
  if (inputType === 'Paso') {
      newInput = document.createElement("textarea");
      newInput.rows = "3"; // Puedes ajustar la cantidad de filas según tus necesidades
      newInput.maxLength = "400";
  } else {
      newInput = document.createElement("input");
      newInput.type = "text";
      newInput.maxLength = "70";
  }

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
  var preparationTime = parseInt(document.querySelector('input[placeholder="Tiempo de Preparación *"]').value, 10);
  var servings = parseInt(document.querySelector('input[placeholder="Cantidad de porciones *"]').value, 10);
  var calories = parseInt(document.querySelector('input[placeholder="Cantidad de calorías *"]').value, 10);
  var uploadedFile = document.querySelector('input[type="file"]').files.length; // Verificar si se ha subido un archivo

  // Obtener los ingredientes
  var ingredients = [];
  var ingredientsInputs = document.querySelectorAll('#ingredients input');
  ingredientsInputs.forEach(function (input) {
    ingredients.push(input.value);
  });

  // Obtener los pasos
  var steps = [];
  var stepsInputs = document.querySelectorAll('#steps textarea');
  stepsInputs.forEach(function (textarea) {
    steps.push(textarea.value);
  });

 // Validar campos obligatorios y si no son menores que 0
 if (!title || !description || preparationTime < 0 || servings < 0 || calories < 0 || ingredients.length === 0 || steps.length === 0 || uploadedFile === 0) {
  alert('Por favor, completa todos los campos obligatorios y asegúrate de que los valores numéricos no sean menores que 0. También asegúrate de subir un archivo.');
  return;
}

  // Aquí puedes agregar la lógica para enviar los datos al servidor o realizar otras acciones
  console.log("Receta Publicada:");
  console.log("Título:", title);
  console.log("Descripción:", description);
  console.log("Tiempo de Preparación:", preparationTime);
  console.log("Porciones:", servings);
  console.log("Calorías:", calories);
  console.log("Ingredientes:", ingredients);
  console.log("Pasos:", steps);
  openRecipeSuccessModal();
  isRecipeSaved = true;
}

function openRecipeSuccessModal() {
  var modal = document.getElementById('recipeSuccessModal');
  modal.style.display = 'block';
}

function closeRecipeSuccessModal() {
  var modal = document.getElementById('recipeSuccessModal');
  modal.style.display = 'none';
}

function redirectToGestion() {
  window.location.href = 'gestionrecetas.html';
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('El DOM ha sido cargado. Este mensaje debe aparecer en la consola.');

  const navbarLinks = document.querySelectorAll('.navbar a');
  var isRecipeSaved = false;

  navbarLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
          console.log('Clic en el enlace del navbar');

          if (!isRecipeSaved) {
              event.preventDefault();
              openWarningModal();
          }
      });
  });

  function openWarningModal() {
      console.log('Abriendo el modal de advertencia');
      var modal = document.getElementById('warningModal');
      modal.style.display = 'block';
  }

  function closeWarningModal() {
      var modal = document.getElementById('warningModal');
      modal.style.display = 'none';
  }

  function confirmNavigate() {
      closeWarningModal();
      // Redirige a la página deseada (puedes cambiar la URL)
      window.location.href = 'nuevaPagina.html';
  }

});


  /*************************************************************************************************** */