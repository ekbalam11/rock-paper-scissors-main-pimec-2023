# Reto JavaScript Pair Programming PIMEC 2023

[URL del challenge](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)
[Demo de la app](https://yasertarek.github.io/rock-paper-scissors//)

Os adjunto la demo para que veaís fácilmente como funciona la app. No inspeccioneis el código, ni siquiera por que hay _algo_ que no os sale. Prefiero que me llaméis a mi.

1. Escribir con lenguaje natural una idea de lo que tiene que ocurrir en esta aplicación. Podéis escribirlo en el mismo README.md más abajo
2. En principio todo el CSS necesario y maquetación ya está implementado. Pero puedes añadir tus clases CSS, estilos en línea a partir de la propiedad .style, etc.
3. Pensad bien qué variables de estado tiene está aplicación. Codificad previamente la lógica de piedra-papel-tijeras en funciones JavaScript, no lo mezcléis con el DOM - [algoritmo](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
4. No os preocupéis por las animaciones de la demo, no hay por qué implementarlas en una primera instancia! Aunque el fichero style.css os puede dar una idea de qué clases añadir o eliminar para implementar más fácil la app
5. Simplificad el problema: pensad que al principio la máquina siempre elige lo mismo (papel?). Implementad todo en función a esta simplificación
6. Pensad además, como "crear" las 3 posibles elecciones de la máquina. Podéis crear 3 bloques HTML adicionales que contengan las posibles elecciones de la máquina, y solo msotrar el que elige ella. O bien, podeis [crear en tiempo de ejecución un nodo HTML](https://lenguajejs.com/javascript/dom/crear-elementos-dom/) con lo que ha elegido la máquina. 

## Pregunta 1: Describe con lenguaje natural que tiene que hacer la app.

1. Create a variable for each button, might be an array including the 3


2. Computer "random decision" bewteen 3 options: A function!


3. Loop to link the player decision with the random computer decision. If the "player decision is..." then computer = "random decision".


4. Arrange the decisions between player wins, losses and draws: 
    Wins:
        If player decision === "scissors" && random decision === "paper"
        If player decision === "paper" && random decision === "rock"
        If player decision === "rock" && random decision === "scissors"

    Losses:
        If player decision === "scissors" && random decision === "rock"
        If player decision === "paper" && random decision === "scissors"
        If player decision === "rock" && random decision === "paper"

    Draws:
        If player decision === "scissors" && random decision === "scissors"
        If player decision === "paper" && random decision === "paper"
        If player decision === "rock" && random decision === "rock"    