
    function tryConvert(temp, converter) {
        const input = parseFloat(temp);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = converter(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }

export { tryConvert, toCelsius, toFahrenheit }
