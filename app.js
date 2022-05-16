const convertBtn = document.getElementById('convert-btn');

const metersIntEl = document.getElementById('meters-int-el');
const metersFloatEl = document.getElementById('meters-float-el');
const feetIntEl = document.getElementById('feet-int-el');
const feetFloatEl = document.getElementById('feet-float-el');
const litersIntEl = document.getElementById('liters-int-el');
const litersFloatEl = document.getElementById('liters-float-el');
const gallonsIntEl = document.getElementById('gallons-int-el');
const gallonsFloatEl = document.getElementById('gallons-float-el');
const kilosIntEl = document.getElementById('kilos-int-el');
const kilosFloatEl = document.getElementById('kilos-float-el');
const poundsIntEl = document.getElementById('pounds-int-el');
const poundsFloatEl = document.getElementById('pounds-float-el');
const allIntEls = [
    metersIntEl,
    feetIntEl,
    litersIntEl,
    gallonsIntEl,
    kilosIntEl,
    poundsIntEl,
];
const allFloatEls = [
    metersFloatEl,
    feetFloatEl,
    litersFloatEl,
    gallonsFloatEl,
    kilosFloatEl,
    poundsFloatEl,
];

const roundThree = (num) => Number.parseFloat(num).toFixed(3);

const convertLength = (inputNum) => {
    // 1 meter * 3.28084 feet
    const feetRatio = 3.28084;
    return {
        feetFloat: roundThree(inputNum * feetRatio),
        metersFloat: roundThree(inputNum / feetRatio),
    };
};

const convertVolume = (inputNum) => {
    // 1 liter / 3.785 gallons
    const gallonsRatio = 3.785;
    return {
        litersFloat: roundThree(inputNum / gallonsRatio),
        gallonsFloat: roundThree(inputNum * gallonsRatio),
    };
};

const convertMass = (inputNum) => {
    // 1 kilo * 2.2 pounds
    const poundsRatio = 2.2;
    return {
        kilosFloat: roundThree(inputNum * poundsRatio),
        poundsFloat: roundThree(inputNum / poundsRatio),
    };
};

const setValues = (inputNum) => {
    // check for zero
    if (inputNum === 0) {
        allIntEls.map((el) => (el.innerText = '0'));
        allFloatEls.map((el) => (el.innerText = '0.000'));
        return;
    }
    const length = convertLength(inputNum);
    const volume = convertVolume(inputNum);
    const mass = convertMass(inputNum);

    allIntEls.map((el) => (el.innerText = inputNum));

    metersFloatEl.innerText = length.metersFloat;
    feetFloatEl.innerText = length.feetFloat;
    litersFloatEl.innerText = volume.litersFloat;
    gallonsFloatEl.innerText = volume.gallonsFloat;
    kilosFloatEl.innerText = mass.kilosFloat;
    poundsFloatEl.innerText = mass.poundsFloat;
};

convertBtn.addEventListener('click', () => {
    const conversionNumVal = document.getElementById('conversion-num').value;
    setValues(conversionNumVal);
});
