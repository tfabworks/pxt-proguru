// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    if (proguru.isDark()) {
        proguru.turnON();
    }
    else {
        proguru.turnOFF();
    }
})
