function* rainbow() {
    yield "Saif";
    yield "Jibran";
}
const rainbowIterator = rainbow();
console.log(rainbowIterator.next());
console.log(rainbowIterator.next());
console.log(rainbowIterator.next());