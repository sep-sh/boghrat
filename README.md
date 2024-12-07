# Discount Calculation Function

This function applies tiered discounts to a given price, handling multiple steps dynamically. It is designed to be flexible and can handle any number of discount steps with different percentages, maximum, and minimum discount values.

## Discount Structure

The discount structure consists of **multiple steps**, each with:

- A **percentage** discount for a specific range of prices.
- A **maximum** and **minimum** discount for each step.

Each step is processed dynamically based on the provided thresholds.

---

## How It Works

- The function calculates the discount for each step in the price range.
- **Each step can have its own percentage, max, and min values.**
- The function applies the discounts sequentially, ensuring the total discount is within the defined range for each step.

---

## Example

For a price of **120,000,000 Toman**, it calculates discounts in steps as follows:

1. **First Step (50 million)**: 5% capped at 1.5M.
2. **Second Step (40 million)**: 3% capped at 1M.
3. **Third Step (remaining)**: 1% capped at 200K.

Total Discount = **2,700,000 Toman**.

---

## Code Overview

- **`calculateStepDiscount`**: Calculates the discount for each dynamic step.
- **`transform`**: Loops through each step, accumulating the total discount.
- **Flexible for multiple steps**: The structure supports adding or modifying steps easily.

---

## How to Use

1. **Import the `DiscountPipe`**:

   ```typescript
   import { DiscountPipe } from './path/to/discount.pipe';
   
