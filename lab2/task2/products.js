/**
 * @typedef {Object} Laptop
 * @property {string} brand
 * @property {() => void} specs
 */

/**
 * @typedef {Object} Netbook
 * @property {string} brand
 * @property {() => void} specs
 */

/**
 * @typedef {Object} EBook
 * @property {string} brand
 * @property {() => void} specs
 */

/**
 * @typedef {Object} Smartphone
 * @property {string} brand
 * @property {() => void} specs
 */

export class IProneLaptop {
  constructor() {
    this.brand = "IProne";
  }
  specs() {
    console.log(`${this.brand} Laptop: 16GB RAM, 512GB SSD`);
  }
}
export class IProneNetbook {
  constructor() {
    this.brand = "IProne";
  }
  specs() {
    console.log(`${this.brand} Netbook: 4GB RAM, 64GB eMMC`);
  }
}
export class IProneEBook {
  constructor() {
    this.brand = "IProne";
  }
  specs() {
    console.log(`${this.brand} E-Book: 8" e-ink display`);
  }
}
export class IProneSmartphone {
  constructor() {
    this.brand = "IProne";
  }
  specs() {
    console.log(`${this.brand} Smartphone: 8GB RAM, 128GB storage`);
  }
}

export class KiaomiLaptop {
  constructor() {
    this.brand = "Kiaomi";
  }
  specs() {
    console.log(`${this.brand} Laptop: 8GB RAM, 256GB SSD`);
  }
}
export class KiaomiNetbook {
  constructor() {
    this.brand = "Kiaomi";
  }
  specs() {
    console.log(`${this.brand} Netbook: 2GB RAM, 32GB eMMC`);
  }
}
export class KiaomiEBook {
  constructor() {
    this.brand = "Kiaomi";
  }
  specs() {
    console.log(`${this.brand} E-Book: 6" e-ink display`);
  }
}
export class KiaomiSmartphone {
  constructor() {
    this.brand = "Kiaomi";
  }
  specs() {
    console.log(`${this.brand} Smartphone: 6GB RAM, 64GB storage`);
  }
}

export class BalaxyLaptop {
  constructor() {
    this.brand = "Balaxy";
  }
  specs() {
    console.log(`${this.brand} Laptop: 32GB RAM, 1TB SSD`);
  }
}
export class BalaxyNetbook {
  constructor() {
    this.brand = "Balaxy";
  }
  specs() {
    console.log(`${this.brand} Netbook: 8GB RAM, 128GB eMMC`);
  }
}
export class BalaxyEBook {
  constructor() {
    this.brand = "Balaxy";
  }
  specs() {
    console.log(`${this.brand} E-Book: 10" color display`);
  }
}
export class BalaxySmartphone {
  constructor() {
    this.brand = "Balaxy";
  }
  specs() {
    console.log(`${this.brand} Smartphone: 12GB RAM, 256GB storage`);
  }
}
