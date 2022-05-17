const convertBtn = document.getElementById('convert-btn');

const metersEl = document.getElementById('meters-float-el');
const feetEl = document.getElementById('feet-float-el');
const litersEl = document.getElementById('liters-float-el');
const gallonsEl = document.getElementById('gallons-float-el');
const kilosEl = document.getElementById('kilos-float-el');
const poundsEl = document.getElementById('pounds-float-el');
const allFloatEls = [metersEl, feetEl, litersEl, gallonsEl, kilosEl, poundsEl];
const allIntEls = [
    document.getElementById('meters-int-el'),
    document.getElementById('feet-int-el'),
    document.getElementById('liters-int-el'),
    document.getElementById('gallons-int-el'),
    document.getElementById('kilos-int-el'),
    document.getElementById('pounds-int-el'),
];

const roundThree = (num) => Number.parseFloat(num).toFixed(3);

const convertLength = (inputNum) => {
    // 1 meter * 3.28084 feet
    const feetRatio = 3.28084;
    return {
        feet: roundThree(inputNum * feetRatio),
        meters: roundThree(inputNum / feetRatio),
    };
};

const convertVolume = (inputNum) => {
    // 1 liter / 3.785 gallons
    const gallonsRatio = 3.785;
    return {
        liters: roundThree(inputNum / gallonsRatio),
        gallons: roundThree(inputNum * gallonsRatio),
    };
};

const convertMass = (inputNum) => {
    // 1 kilo * 2.2 pounds
    const poundsRatio = 2.2;
    return {
        kilos: roundThree(inputNum * poundsRatio),
        pounds: roundThree(inputNum / poundsRatio),
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

    metersEl.innerText = length.meters;
    feetEl.innerText = length.feet;
    litersEl.innerText = volume.liters;
    gallonsEl.innerText = volume.gallons;
    kilosEl.innerText = mass.kilos;
    poundsEl.innerText = mass.pounds;
    return;
};

convertBtn.addEventListener('click', () => {
    const conversionNumVal = document.getElementById('conversion-num').value;
    setValues(conversionNumVal);
});
