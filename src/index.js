module.exports = function check(str, bracketsConfig) {
    const openBrackets = [];
    const closeBrackets = [];
    const stack = [];

    for (let arr of bracketsConfig) {
        openBrackets.push(arr[0]);
        closeBrackets.push(arr[1]);
    }

    for (let char of str) {
        if (openBrackets.includes(char)) {
            if (
                char === closeBrackets[openBrackets.indexOf(char)] &&
                stack[stack.length - 1] === char
            ) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            if (!stack.length) {
                return false;
            } else {
                let indexLastElemStack = openBrackets.indexOf(
                    stack[stack.length - 1]
                );
                let indexLastChar = closeBrackets.indexOf(char);

                if (indexLastElemStack === indexLastChar) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return stack.length === 0;
};
