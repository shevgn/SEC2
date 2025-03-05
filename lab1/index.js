import { UAH } from "./src/money.js";
import { Product } from "./src/product.js";
import { Reporting } from "./src/reporting.js";
import { Warehouse } from "./src/warehouse.js";

const reporting = new Reporting();
const warehouse = new Warehouse([], reporting);

warehouse.addProduct(new Product("Телефон", new UAH(25000, 500)), 100);

warehouse.changeQuantity("Телефон", -10);

warehouse.addProduct(new Product("Компьютер", new UAH(50000, 500)), 50);

warehouse.changePrice("Телефон", 500000);

warehouse.addProduct(new Product("Зарядка", new UAH(1000, 0)), 20)

warehouse.reporting?.generateInventoryReport(warehouse.products)

warehouse.changePrice("Зарядка", 90000)
