const suponjibobu = (text) => {
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

    for (const char of text) {
        thresh, upper = isUpper(thresh);
        altered += upper ? char.toUpperCase() : char;
    }

    return altered;
};


if (typeof require !== 'undefined' && require.main === module) {
    const args = process.argv;
    console.log(__filename)
    console.log(args)
    let messages = [];
    let startIndex = 1;
    if (args[1] === __filename) {
        startIndex = 2;
    }
    console.log(startIndex);
    messages = args.slice(startIndex);

    if (!!messages.length && !messages[0].includes(" ")) {
        messages = [messages.join(" ")];
    }
    for (const message of messages) {
        const result = suponjibobu(message);
        console.log(result);
    }
}