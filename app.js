const convertBtn = document.getElementById('convert-btn');

// Adjusted the names to be clearer
const metersEl = document.getElementById('meters-float-el');
const feetEl = document.getElementById('feet-float-el');
const litersEl = document.getElementById('liters-float-el');
const gallonsEl = document.getElementById('gallons-float-el');
const kilosEl = document.getElementById('kilos-float-el');
const poundsEl = document.getElementById('pounds-float-el');
const allFloatEls = [metersEl, feetEl, litersEl, gallonsEl, kilosEl, poundsEl];

// Removed the variables for the int numbers, and put the dom getters (not sure what to call them) into an array
const allIntEls = [
    document.getElementById('meters-int-el'),
    document.getElementById('feet-int-el'),
    document.getElementById('liters-int-el'),
    document.getElementById('gallons-int-el'),
    document.getElementById('kilos-int-el'),
    document.getElementById('pounds-int-el'),
];

// Renamed to something that made more sense
const set3Decimal = (num) => Number.parseFloat(num).toFixed(3);

const convertLength = (inputNum) => {
    // 1 meter * 3.28084 feet
    const feetRatio = 3.28084;
    return {
        feet: set3Decimal(inputNum * feetRatio),
        meters: set3Decimal(inputNum / feetRatio),
    };
};

const convertVolume = (inputNum) => {
    // 1 liter / 3.785 gallons
    const gallonsRatio = 3.785;
    return {
        liters: set3Decimal(inputNum / gallonsRatio),
        gallons: set3Decimal(inputNum * gallonsRatio),
    };
};

const convertMass = (inputNum) => {
    // 1 kilo * 2.2 pounds
    const poundsRatio = 2.2;
    return {
        kilos: set3Decimal(inputNum * poundsRatio),
        pounds: set3Decimal(inputNum / poundsRatio),
    };
};

const setValues = (inputNum) => {
    // check for zero, and set all numbers to zero
    if (inputNum === 0) {
        allIntEls.map((el) => (el.innerText = '0'));
        allFloatEls.map((el) => (el.innerText = '0.000'));
        return;
    }

    const length = convertLength(inputNum);
    const volume = convertVolume(inputNum);
    const mass = convertMass(inputNum);

    // Set all the int numbers on the page
    allIntEls.map((el) => (el.innerText = inputNum));

    // Set all the float numbers on the page
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
