import inquirer from "inquirer";

async function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    
    let coding = true;

    while (coding) {
        const answer = await inquirer.prompt([
            {
                name: "userGuessedNumber",
                type: "number",
                message: "Enter a guess number between 1-6: "
            }
        ]);

        if (answer.userGuessedNumber < randomNumber) {
            console.log("You are Too Low! Try Again");
        }
        else if (answer.userGuessedNumber > randomNumber) {
            console.log("You are too High! Try Again");
        }
        else if (answer.userGuessedNumber === randomNumber) {
            console.log("Congratulations! You have guessed it right.");
            coding = false; // Exit the loop when the guess is correct
        }
    }
}

guessNumberGame(); // Start the game

