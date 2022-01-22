
function Text(text) {
    this.char = TypingManager.createCharChain(text);
    this.remainExpectRoman = "";

    let tmpChar = this.char;
    while (tmpChar !== null) {
        this.remainExpectRoman += tmpChar.expectRoman();
        tmpChar = tmpChar.nextChar;
    }
}

Text.prototype.inputRoman = function(roman) {
    if (this.char === null) return TEXT_COMPLETE;

    const oldCharExpectRomanLength = this.char.expectRoman().length;
    const result = this.char.inputRoman(roman);

    switch (result) {
        case CHAR_NG: return TEXT_NG;
        case CHAR_KEEP:
            this.updateExpectRoman(oldCharExpectRomanLength);
            return TEXT_KEEP;
        case CHAR_COMPLETE:
            const preChar = this.char;
            this.char = this.char.nextChar;
            this.updateExpectRoman(oldCharExpectRomanLength, preChar);
            return this.char === null ? TEXT_COMPLETE : TEXT_KEEP;
        default:
            const oldChar = this.char;
            this.char = result;
            this.updateExpectRoman(oldChar);
            return TEXT_KEEP;
    }
};

Text.prototype.updateExpectRoman = function(param, preChar) {
    switch (typeof(param)) {
        case "number":
            const oldCharExpectRomanLength = param;
            const targetChar = preChar === undefined ? this.char : preChar;
            const charExpectRoman = targetChar.expectRoman();
            
            if (oldCharExpectRomanLength === charExpectRoman.length) {
                this.remainExpectRoman = this.remainExpectRoman.slice(1);
                return;
            }

            const removeRomanCount = oldCharExpectRomanLength - targetChar.nextExpectRomanIndex + 1;
            const tmpRemainExpectRoman = preChar === undefined ? charExpectRoman.slice(this.char.nextExpectRomanIndex) : "";

            this.remainExpectRoman = tmpRemainExpectRoman + this.remainExpectRoman.slice(removeRomanCount);
            return;

        case "object":
            const oldChar = param;

            if (oldChar.name === "ん") {
                this.remainExpectRoman = this.remainExpectRoman.slice(1);
                return;
            } 

            let tmpRemainExpectRoman1 = "";
            const tmpRemainExpectRoman2 = this.remainExpectRoman.slice(
                oldChar.expectRoman().length - oldChar.nextExpectRomanIndex
            );
            let tmpChar = this.char;
            while (true) {
                tmpRemainExpectRoman1 += tmpChar.expectRoman();
                if (tmpChar.nextChar === oldChar.nextChar) break;
                tmpChar = tmpChar.nextChar;
                if (tmpChar.nextChar === oldChar.nextChar) break;
            }
            this.expectRoman = tmpRemainExpectRoman1 + tmpRemainExpectRoman2;
            return;
    }
};
