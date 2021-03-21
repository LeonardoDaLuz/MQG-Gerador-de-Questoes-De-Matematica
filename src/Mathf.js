    export default class Mathf {
        static RandomRange(min, max) {
        var diff = max - min;
        return Math.random() * diff + min;
        }
    }