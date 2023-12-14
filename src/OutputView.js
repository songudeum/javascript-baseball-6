import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, ZERO_SCORE, STRIKE, BALL } from "./utils/scriptList";
import Computer from "./Computer";
import { numberValidator } from "./utils/numberValidator";

const OutputView = {
    createRandomNumbers() {
        const randomNumberList = [];
        while (randomNumberList.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!randomNumberList.includes(number)) {
                randomNumberList.push(number);
            }
        }
        this.validateRandomNumbers(randomNumberList);
        return randomNumberList;
    },

    validateRandomNumbers(randomNumberList) {
        try {
            numberValidator.forEach((validate) => {
                if (validate(randomNumberList)) throw new Error(ERROR_MESSAGE);
            });
        } catch (error) {
            this.createRandomNumbers();
        }
        return;
    },

    printScore(inputValue, answer) {
        const computer = new Computer(answer);
        const score = computer.compareWithAnswer(inputValue);
        if (score.strike === 0 && score.ball === 0) Console.print(ZERO_SCORE);
        if (score.strike === 0 && score.ball !== 0)
            Console.print(`${score.ball}${BALL}`);
        if (score.strike !== 0 && score.ball === 0) {
            Console.print(`${score.strike}${STRIKE}`);
        }
        if (score.strike !== 0 && score.ball !== 0)
            Console.print(`${score.ball}${BALL} ${score.strike}${STRIKE}`);
        return score;
    },
};

export default OutputView;
