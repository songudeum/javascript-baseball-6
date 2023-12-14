import { numberValidator } from "./utils/numberValidator";
import { ERROR_MESSAGE } from "./utils/scriptList";

class Computer {
    #answer;

    constructor(numbers) {
        this.#validate(numbers);
        this.#answer = numbers;
    }

    #validate(numbers) {
        numberValidator.forEach((validator) => {
            if (validator(numbers)) throw new Error(ERROR_MESSAGE);
        });
    }

    compareWithAnswer(inputValue) {
        const score = { strike: 0, ball: 0 };
        inputValue.forEach((number) => {
            if (this.#answer.includes(number)) {
                score.ball += 1;
            }
        });

        for (let i = 0; i < this.#answer.length; i++) {
            if (this.#answer[i] === inputValue[i]) {
                score.strike += 1;
                score.ball -= 1;
            }
        }
        return score;
    }
}

export default Computer;
