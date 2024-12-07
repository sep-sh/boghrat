# Discount Calculation Function + Angular Test Project

# Discount Calculation Pipe

This pipe applies tiered discounts to a given price, handling multiple steps "dynamically". It is designed to be flexible and can handle any number of discount steps with different percentages, maximum, and minimum discount values.

## Discount Structure

The discount structure consists of **multiple steps**, each with:

- A **percentage** discount for a specific range of prices.
- A **maximum** and **minimum** discount for each step.

Each step is processed dynamically based on the provided thresholds.

## Example

For a price of **120,000,000 Toman**, it calculates discounts in steps as follows:

1. **First Step (50 million)**: 5% capped at 1.5M.
2. **Second Step (40 million)**: 3% capped at 1M.
3. **Third Step (remaining)**: 1% capped at 200K.

Total Discount = **2,700,000 Toman**.

---

## How to Use

1. **Import the `DiscountPipe`**:
   {{value|discount}}

# Angular Project

## Features

### 1. **Articles Component**
   - The **Articles Component** is the core feature, responsible for rendering and displaying article content.
   - Articles are presented in **Article Cards**, a simple and reusable component that displays article details (e.g., title, description, etc.).
   - The design is minimal and customized using **vanilla CSS**, which means no external UI libraries or components are used, but the flexibility of UI components is still preferred for future enhancements.

### 2. **Persian Date Pipe**
   - To display dates in the Persian format, a **Persian Pipe** is implemented. This custom pipe is used to format the date values into Persian-style dates, making the app more suitable for Persian-speaking users.
   - It takes a standard JavaScript date and converts it into the desired format that’s specific to Persian calendars.

### 3. **HTTP Interceptor for Base URL**
   - The project includes an **HTTP Interceptor**, which ensures that all outgoing HTTP requests are automatically prefixed with the **base URL** of the API.
   - This feature is helpful to maintain consistency and simplify API calls by not needing to manually add the base URL for every request.



