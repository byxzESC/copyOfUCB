const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    if (!array.includes(element)) {
        return -1;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return i;
            }
        }
    }
};

module.exports = linearSearch;