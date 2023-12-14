import InputView from "./InputView";
import OutputView from "./OutputView";
import { Console } from "@woowacourse/mission-utils";
import { COMPLETE_TEXT, QUESTION_OF_RESTART } from "./utils/scriptList";
class App {
    async play() {
        InputView.printGameStartText();
        await this.baseballGame();
        await this.askForRestart();
    }

    async baseballGame() {
        const answer = OutputView.createRandomNumbers();
        await this.guessingLoop(answer);
    }

    async guessingLoop(answer) {
        const inputValue = await InputView.readUserInput();
        const score = inputValue && OutputView.printScore(inputValue, answer);
        score && this.tryAgainOrComplete(score, answer);
    }

    tryAgainOrComplete(score, answer) {
        score.strike !== 3
            ? this.guessingLoop(answer)
            : Console.print(COMPLETE_TEXT);
    }

    async askForRestart() {
        Console.print(QUESTION_OF_RESTART);
        const userInput = await Console.readLineAsync(QUESTION_OF_RESTART);
        if (userInput === "1") {
            await this.baseballGame();
        }
        return;
    }
}

export default App;
