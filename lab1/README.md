# Warehouse Management System

This project demonstrates various programming principles through an implementation of a simple warehouse management system. Below, we describe how different principles are applied, with references to the corresponding files and lines of code.

## Programming Principles

### 1. DRY (Don't Repeat Yourself)
**Description:** The code avoids redundancy by encapsulating logic in reusable methods and classes.

**Example:** The `registerIncome` and `registerExpense` methods in [`reporting.js`](./reporting.js#L27-L55) handle financial transactions consistently, preventing code duplication.

```js
registerIncome(product, quantity) { /* ... */ }
registerExpense(product, productQuantity, quantity) { /* ... */ }
```

### 2. KISS (Keep It Simple, Stupid)
**Description:** The methods are designed to be simple and clear, ensuring easy readability and maintenance.

**Example:** The `deleteProduct` method in [`warehouse.js`](./warehouse.js#L100-L109) is a straightforward one-liner that removes a product by filtering the array.

```js
deleteProduct(productName) {
    this.products = this.products.filter(p => p.product.name !== productName);
}
```

### 3. Single Responsibility Principle (SRP) – SOLID
**Description:** Each class has a single responsibility.

**Example:**
- The `Product` class in [`product.js`](./product.js) manages product attributes and pricing.
- The `Warehouse` class in [`warehouse.js`](./warehouse.js) handles inventory.
- The `Reporting` class in [`reporting.js`](./reporting.js) generates financial reports.

### 4. Open/Closed Principle (OCP) – SOLID
**Description:** The system is open for extension but closed for modification.

**Example:** The `Warehouse` class allows adding new functionality (e.g., new reporting features) without modifying existing methods.

```js
constructor(defaultProducts = [], reporting = null) { /* ... */ }
```

### 5. Liskov Substitution Principle (LSP) – SOLID
**Description:** Derived classes should be replaceable with their base classes without affecting functionality.

**Example:** The `Product` class can be extended for different types of products without breaking the `Warehouse` class.

### 6. Interface Segregation Principle (ISP) – SOLID
**Description:** The system uses focused interfaces rather than a single general-purpose interface.

**Example:** The `Warehouse` class interacts with `Reporting`, but reporting is optional, ensuring modularity.

```js
constructor(defaultProducts = [], reporting = null) { /* ... */ }
```

### 7. Dependency Inversion Principle (DIP) – SOLID
**Description:** High-level modules should not depend on low-level modules. Instead, they depend on abstractions.

**Example:** The `Warehouse` class does not depend on a concrete `Reporting` implementation. It can work with any reporting instance passed to it.

### 8. YAGNI (You Ain't Gonna Need It)
**Description:** The project avoids implementing unnecessary features.

**Example:** The `Warehouse` class does not include complex pricing strategies or tax calculations, focusing only on inventory management.

### 9. Composition Over Inheritance
**Description:** Instead of using deep inheritance, the system favors composition.

**Example:** The `Warehouse` class contains a list of `Product` objects rather than extending a `Product` class.

```js
this.products = defaultProducts;
```

### 10. Fail Fast
**Description:** Errors are reported early to prevent cascading failures.

**Example:** The `changeQuantity` method in [`warehouse.js`](./warehouse.js#L52-L74) prevents reducing stock below zero, ensuring the system remains in a valid state.

```js
if (warehouseProduct.quantity - amount < 0) {
    console.log(`❌ Недостатня кількість товару "${productName}" для відвантаження.`);
    return;
}
```

---

This README documents key programming principles followed in this project. For further details, check the code files linked above!


