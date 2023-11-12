function addIngredient() {
    // Obtener el div de ingredientes
    var ingredientsDiv = document.getElementById("ingredients");

    // Crear un nuevo input para el ingrediente
    var newIngredientInput = document.createElement("input");
    newIngredientInput.type = "text";
    newIngredientInput.placeholder = "Ingrediente Nº" + (ingredientsDiv.childElementCount);
    newIngredientInput.required = true;

    // Crear un nuevo botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.className = "add-button";
    deleteButton.innerText = "-";
    deleteButton.onclick = function () {
        if (ingredientsDiv.childElementCount > 1) {
            ingredientsDiv.removeChild(newIngredientInput);
            ingredientsDiv.removeChild(deleteButton);
        }
    };

    // Agregar el nuevo input y botón al div de ingredientes
    ingredientsDiv.appendChild(newIngredientInput);
    ingredientsDiv.appendChild(deleteButton);
}

function addStep() {
    // Obtener el div de pasos
    var stepsDiv = document.getElementById("steps");

    // Crear un nuevo input para el paso
    var newStepInput = document.createElement("input");
    newStepInput.type = "text";
    newStepInput.placeholder = "Paso Nº" + (stepsDiv.childElementCount);
    newStepInput.required = true;

    // Crear un nuevo botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.className = "add-button";
    deleteButton.innerText = "-";
    deleteButton.onclick = function () {
        if (stepsDiv.childElementCount > 1) {
            stepsDiv.removeChild(newStepInput);
            stepsDiv.removeChild(deleteButton);
        }
    };

    // Agregar el nuevo input y botón al div de pasos
    stepsDiv.appendChild(newStepInput);
    stepsDiv.appendChild(deleteButton);
}
  
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
  