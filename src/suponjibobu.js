const suponjibobu = (text) => {
    const isLetter = (char) => (char.toUpperCase() != char);
    const isUpper = (thresh) => {
        const rnd = Math.random();
        const upper = rnd >= thresh;
        if (upper) {
            thresh = 0.5
        } else {
            thresh /= 2
        }
        return thresh, upper;
    };
    text = text.toLowerCase();
    let altered = "";
    let thresh = 0.5;

    for (let char of text) {
        if (isLetter(char)) {
            thresh, upper = isUpper(thresh);
            char = upper ? char.toUpperCase() : char;
        }
        altered += char;
    }

    return altered;
};


if (typeof require !== 'undefined' && require.main === module) {
    const args = process.argv;
    let messages = [];
    let startIndex = 1;
    if (args[1] === __filename) {
        startIndex = 2;
    }
    messages = args.slice(startIndex);

    if (!!messages.length && !messages[0].includes(" ")) {
        messages = [messages.join(" ")];
    }
    for (const message of messages) {
        const result = suponjibobu(message);
        console.log(result);
    }
}