# Hotel Management System — Detailed Description

## Project Description

**Hotel Management System** is a desktop-based hotel management application developed using **Python, Tkinter, and SQLite**. The application provides a graphical interface for managing common hotel operations such as customer registration, room management, room booking, room availability, accommodation/meal plans, and billing.

The application includes a login system and a main dashboard from which different hotel management modules can be accessed. Customer, room, booking, and billing information is stored in an **SQLite database**, allowing the data to be maintained even after the application is closed.

The system also checks room availability before assigning a room and calculates the customer's total stay based on check-in and check-out dates. The billing module calculates room charges, meal/accommodation charges, applicable tax, and the final payable amount.

---

## Core Implementation Features

### 1. Login System

* Implemented a login screen using **Tkinter**.
* Validates username and password before providing access to the main application.
* Provides a basic authentication layer for the hotel management system.

### 2. Customer Management

* Added functionality to **add, update, delete, reset, and search customer records**.
* Stores customer information such as:

  * Customer ID
  * Name
  * Gender
  * Address
  * Contact number
  * Email
  * Nationality
  * ID information
* Uses SQLite to permanently store customer data.

### 3. Room Management

* Implemented room management functionality for maintaining hotel room information.
* Stores details such as:

  * Room number
  * Floor
  * Room type
  * Room cost
  * Availability
  * Room status
* Supports different room categories such as Single, Double, Luxury, Deluxe, and Super Deluxe.

### 4. Room Booking

* Implemented a room booking module for assigning rooms to customers.
* Checks room availability before booking.
* Stores booking information including:

  * Customer details
  * Check-in date
  * Check-out date
  * Room type
  * Allocated room
  * Number of days
  * Meal plan

### 5. Room Availability Checking

* The system checks the database before assigning a room.
* Prevents unavailable rooms from being selected for new bookings.
* Helps avoid duplicate room allocation.

### 6. Date and Stay Calculation

* Used Python's **datetime** functionality to calculate the customer's stay duration.
* Calculates the number of days between check-in and check-out dates.
* The calculated duration is used during bill generation.

### 7. Accommodation and Meal Plans

* Implemented accommodation/meal plan management.
* Supports different meal options such as breakfast, lunch, dinner, and tiffin.
* Stores the corresponding charges in the database.

### 8. Billing System

* Implemented a billing module for calculating the customer's total expenses.
* Calculates room charges based on room cost and number of days.
* Adds meal/accommodation charges.
* Calculates applicable tax and the final payable amount.
* Stores billing information in the SQLite database.

### 9. SQLite Database

* Used **SQLite** for local database management.
* Created separate tables for different types of information, including:

  * Customer
  * Room Booking
  * Room Types
  * Bills
  * Planner/Accommodation Plans
* Implemented database operations such as `INSERT`, `SELECT`, `UPDATE`, and `DELETE`.

### 10. Graphical User Interface

* Built the desktop interface using **Tkinter**.
* Used Tkinter widgets such as buttons, labels, entry fields, comboboxes, and Treeview tables.
* Created separate windows for different hotel management operations.
* Used **Pillow (PIL)** for displaying images in the application.

### 11. Input Validation and Error Handling

* Added validation to prevent empty or invalid fields from being submitted.
* Used `try-except` blocks to handle database and application errors.
* Displayed appropriate error and success messages using Tkinter `messagebox`.

---

# Problems I Faced and How I Solved Them

## 1. Managing Multiple Functionalities

### Problem:

The application contains many different functionalities such as customers, rooms, bookings, billing, and accommodation plans. Keeping all the code in one file would make the application difficult to understand and maintain.

### Solution:

I separated the application into different Python modules according to their functionality, such as:

* `hotel.py`
* `customer.py`
* `rooms_booking.py`
* `room_details.py`
* `bill_details.py`
* `plan_details.py`

The main application/dashboard connects these modules and opens the required functionality when the user selects an option.

---

## 2. Managing Data Using a Database

### Problem:

The application needed to store customer, room, booking, and billing information permanently instead of losing the data when the application was closed.

### Solution:

I used **SQLite** as the database because it is lightweight and suitable for a desktop application. I created separate tables for different entities and implemented SQL queries for inserting, retrieving, updating, and deleting records.

---

## 3. Checking Room Availability

### Problem:

A room that was already occupied should not be assigned to another customer.

### Solution:

Before assigning a room, the application checks the room's availability and status in the database. Only rooms that satisfy the required availability conditions are allowed to be selected for booking.

This helps prevent duplicate room allocation.

---

## 4. Calculating Customer Stay Duration

### Problem:

The total room charge depends on how many days the customer stays at the hotel. Manually calculating the duration could lead to mistakes.

### Solution:

I used Python's `datetime` module to calculate the difference between the check-in and check-out dates.

For example:

```python
number_of_days = (check_out_date - check_in_date).days
```

The calculated number of days is then used for billing.

---

## 5. Calculating the Final Bill

### Problem:

The customer's final bill depends on multiple charges, including room charges, meal charges, number of days, and tax.

### Solution:

I separated the individual charges and calculated them systematically. The application calculates the room cost based on the number of days, adds meal/accommodation charges, calculates tax, and generates the final payable amount.

---

## 6. Handling Invalid User Input

### Problem:

Users may leave required fields empty or enter incorrect information while registering customers or booking rooms.

### Solution:

I implemented input validation before performing database operations. Tkinter `messagebox` is used to display appropriate error messages and prevent invalid data from being stored.

---

## 7. Managing Multiple GUI Windows

### Problem:

The application contains different sections such as customer details, room booking, room details, billing, and accommodation plans.

### Solution:

I used Tkinter's window functionality, including `Toplevel`, to open different modules while keeping the main dashboard available.

---

## 8. Displaying Images in the GUI

### Problem:

Tkinter does not directly provide complete support for handling different image formats and resizing images.

### Solution:

I used the **Pillow (PIL)** library with `Image` and `ImageTk` to load, resize, and display images in the application interface.

---

# Technologies Used

| Technology       | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| **Python**       | Main programming language                         |
| **Tkinter**      | Building the desktop graphical user interface     |
| **SQLite**       | Storing and managing application data             |
| **Pillow (PIL)** | Loading, resizing, and displaying images          |
| **datetime**     | Calculating check-in/check-out duration           |
| **SQL**          | Performing database operations                    |
| **PyInstaller**  | Packaging the Python application as an executable |

---

# Interview Explanation

If the interviewer asks **"Explain your Hotel Management System project"**, you can say:

> "I developed a desktop-based Hotel Management System using Python, Tkinter, and SQLite. The main purpose of the project was to manage common hotel operations through a graphical interface. I implemented modules for customer management, room management, room booking, room availability, accommodation plans, and billing.
>
> I used SQLite to store customer, room, booking, and billing information. During room booking, the system checks room availability before assigning a room. I also used Python's datetime module to calculate the customer's stay duration from the check-in and check-out dates. The billing module then uses the number of days along with room and meal charges and tax to calculate the final bill.
>
> One of the main challenges was managing multiple modules and database operations. I solved this by separating different functionalities into individual Python files and creating separate database tables for different entities. I also implemented input validation and exception handling to prevent invalid data and handle database errors."
