import { Console } from "@woowacourse/mission-utils";
import {
    GAME_START_TEXT,
    PLEASE_ENTER_NUMBER,
    ERROR_MESSAGE,
} from "./utils/scriptList";
import { numberValidator } from "./utils/numberValidator";

const InputView = {
    printGameStartText() {
        Console.print(GAME_START_TEXT);
        Console.print(PLEASE_ENTER_NUMBER);
    },

    async readUserInput() {
        const userInput = await Console.readLineAsync().then((value) => value);
        const userInputToArray = userInput.split("").map((el) => Number(el));
        this.validateUserInput(userInputToArray);
        return userInputToArray;
    },

    validateUserInput(inputValue) {
        numberValidator.forEach((validate) => {
            if (validate(inputValue)) throw new Error(ERROR_MESSAGE);
        });
        return;
    },
};

export default InputView;
