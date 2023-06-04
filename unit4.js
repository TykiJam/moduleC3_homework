function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.fork = false;
}


ElectricalAppliance.prototype.forkin = function() {
    console.log(this.name + 'Прибор включен');
    this.fork = true;
};


ElectricalAppliance.prototype.unfork = function() {
    console.log(this.name + 'Прибор выключен');
    this.fork = false;
};


function Periphery(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.fork = true;
}

Periphery.prototype = new ElectricalAppliance();


function LargeMechanical(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.fork = false;
}

LargeMechanical.prototype = new ElectricalAppliance();

const tablePrinter = new Periphery("Принтер лазерный", "Canon", 2900, "Laser");

const electricStove = new LargeMechanical("Плита электрическая", "Hansa", 54000, "electrical", "техника для кухни");



console.log(tablePrinter)
console.log(electricStove)