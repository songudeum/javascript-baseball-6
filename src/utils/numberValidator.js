const isNotExistence = (numbers) => {
    if (!numbers) {
        return true;
    }
    return false;
};

const isNotNumber = (numbers) => {
    const filteredNumbers = numbers.filter((el) => isNaN(el));
    if (filteredNumbers.length !== 0) {
        return true;
    }
    return false;
};

const isInvalidNumber = (numbers) => numbers.includes(0);

const isInvalidLength = (numbers) => numbers.length !== 3;

const isDuplicateNumber = (numbers) =>
    !numbers.every((el, idx, arr) => arr.indexOf(el) === idx);

const numberValidator = [
    isNotExistence,
    isNotNumber,
    isInvalidNumber,
    isInvalidLength,
    isDuplicateNumber,
];

export { numberValidator };
