# Lush Jewels – Full-Stack Jewellery E-Commerce Website

#LIVE DEMO LINK :- https://lush-jewels.onrender.com/


## Project Overview

**Lush Jewels** is a full-stack jewellery e-commerce website that I developed to provide customers with a complete online shopping experience. Users can browse jewellery products, view detailed product information, add products to their cart, purchase individual products using the **Buy Now** functionality, complete the checkout process, and view their previous orders from their account.

I developed both the **frontend and backend** of the application and connected the website with a **MongoDB database** for storing users, products, carts, and orders.

### Technologies Used

* **Frontend:** HTML, EJS, Tailwind CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Authentication:** Express Session / session-based authentication
* **Image Management:** Cloudinary
* **Deployment:** Render
* **Version Control:** Git & GitHub

---

# Core Implementation Features

### 1. User Authentication

I implemented a user authentication system where users can:

* Register an account
* Login securely
* Access their account
* Logout
* Access checkout only after login

I used **session-based authentication** to maintain the user's login state.

I also created authentication middleware to protect routes such as checkout and account pages.

---

### 2. Product Management

The website displays jewellery products dynamically from MongoDB instead of hardcoding them.

Each product contains information such as:

* Product name
* Price
* Category
* Design
* Material
* Occasion
* Description
* Main image
* Product thumbnails

The admin can add and delete products through the admin panel.

---

### 3. Product Details

I created a product details page where users can:

* View product information
* View multiple product images
* Switch between thumbnails
* Zoom product images
* See product price and description
* Add the product to the cart
* Buy the product directly

The product information is dynamically loaded using the product ID.

---

### 4. Shopping Cart

I implemented a complete shopping cart system.

Users can:

* Add products to cart
* Increase/decrease quantity
* Remove products
* View total price
* Continue shopping
* Proceed to checkout

The cart was later connected with the database so that cart information could be associated with the logged-in user.

---

### 5. Buy Now Functionality

One important feature I implemented was **Buy Now**.

There are two different purchase flows:

**Normal Cart Checkout**

```text
Multiple products → Cart → Checkout
```

**Buy Now**

```text
Single product → Buy Now → Checkout
```

The challenge was preventing the Buy Now product from being mixed with the user's existing cart products.

I solved this by implementing separate logic to identify whether the user was purchasing a single product or checking out the complete cart.

---

### 6. Checkout System

I created a checkout form where users provide:

* First name
* Last name
* Email
* Phone number
* Address
* Landmark
* City
* State
* PIN code

Before submitting the order, JavaScript validates the required fields.

It also validates:

* 10-digit phone number
* 6-digit PIN code

Invalid fields are highlighted and an error toast is displayed to the user.

---

### 7. Order Management

After checkout, the order is stored in MongoDB.

The order contains information such as:

* User information
* Address
* Products
* Quantity
* Product price
* Total amount
* Payment method
* Order date

I also linked orders with the logged-in user so users can see their own order history.

---

### 8. My Account Page

I created a user account page where logged-in users can:

* View their profile information
* View their email and phone number
* View previous orders
* View order ID
* View order date
* View purchased products
* View total amount
* View payment method
* Logout

This gives the website a more complete e-commerce experience.

---

### 9. Admin Panel

I implemented an admin section for managing products.

The admin can:

* Login
* Add products
* Upload product images
* Delete products
* Manage product information

Admin authentication is protected using sessions.

---

### 10. Cloudinary Image Upload

Instead of storing large image files directly inside the project, I integrated **Cloudinary** for product image management.

This allows product images to be uploaded and served through Cloudinary URLs.

This was especially useful for deployment because the application does not need to store all product images locally.

---

### 11. Search Functionality

I implemented product search functionality for desktop and mobile.

Users can search products by:

* Product name
* Image/product description

The search dynamically filters the available products.

I also implemented a separate search-results section so that matching products can be displayed without creating duplicate product cards.

---

### 12. Responsive UI

The website is responsive for:

* Desktop
* Tablet
* Mobile

I created separate responsive layouts for navigation, search, cart, product grids, checkout and other sections using **Tailwind CSS**.

---

# Major Challenges I Faced

## 1. Buy Now and Cart Checkout Conflict

### Problem

Initially, when a user clicked **Buy Now**, the checkout page could contain products that were already present in the cart.

This happened because both checkout flows were using the same cart data.

### Solution

I separated the two checkout scenarios.

I added logic to identify whether the checkout was coming from:

* Buy Now
* Cart Checkout

Then only the required product was passed to checkout for Buy Now.

---

# 2. Checkout Access Without Login

### Problem

One of the difficult issues was preventing logged-out users from accessing checkout.

Sometimes the browser would initially open the checkout page and only afterward redirect the user to login.

### Solution

I implemented authentication at the backend using a middleware such as:

```js
requireUserLogin
```

The middleware checks the user's session before allowing access to protected routes.

For example:

```js
router.get("/checkout", requireUserLogin, ...)
```

This ensures that checkout cannot actually be accessed without a valid user session.

I also added frontend login checks for a better user experience.

---

# 3. Search Results Showing Duplicate Products

### Problem

During development, I had two different search implementations running on the homepage.

One searched the existing `.product-card` elements while another generated new product cards inside the search-results section.

As a result, searching for a product could show duplicate products.

There was also a difference in styling because the dynamically generated search cards were using different Tailwind classes.

### Solution

I removed the conflicting search logic and used a single search-results implementation.

I also made sure that the search results were generated from the same product data and used the correct styling classes.

This fixed:

* Duplicate products
* Incorrect search results
* Different button styling
* Search results appearing together with the original collection

---

# 4. Cart Checkout Button Authentication

### Problem

The sidebar cart checkout button was another tricky part.

When a logged-in user clicked checkout, the application sometimes treated them as logged out.

The problem was related to how the login session was being checked on the frontend.

### Solution

I checked the session data rendered by EJS and also protected the checkout route on the backend.

This gave me two layers of protection:

```text
Frontend → User experience / login message
Backend → Actual security
```

The backend session check became the final authority.

---

# 5. Session-Based Authentication

### Problem

Maintaining the user's login state across different pages was important.

The user could login successfully, but the application needed to recognize that same user when moving to:

* Home
* Product details
* Cart
* Checkout
* Account

### Solution

I used Express sessions and MongoDB session storage.

This allowed the session to persist across requests and made it possible to access the logged-in user using:

```js
req.session.user
```

---

# 6. Product Images and Thumbnails

### Problem

The product details page needed multiple images and a zoom feature.

I needed to make sure the main image and thumbnails worked correctly for different products.

### Solution

I created product data containing the main image and thumbnails and implemented JavaScript to dynamically change the main image when the user selects a thumbnail.

I also added image zoom functionality for a better shopping experience.

---

# 7. Responsive Header

### Problem

The desktop header looked good on large screens but became crowded on tablet-sized screens because it contained:

* Logo
* Search box
* Navigation links
* Cart

### Solution

I created responsive breakpoints using Tailwind CSS and adjusted when the desktop navigation and mobile navigation should appear.

This allowed the header to adapt according to screen size instead of forcing the desktop layout onto tablets and mobile devices.

---

# 8. Policy Pages

Before integrating an online payment gateway, I also created separate pages for important e-commerce policies:

* Privacy Policy
* Terms & Conditions
* Cancellation & Refund Policy
* Shipping & Delivery Policy

I placed these pages inside:

```text
views/
└── policies/
    ├── privacy-policy.ejs
    ├── terms.ejs
    ├── refund-policy.ejs
    └── shipping-policy.ejs
```

I then created Express routes to render these pages and added the links to the website footer.

---

# Overall Architecture

The basic flow of my application is:

```text
User
 ↓
EJS + Tailwind UI
 ↓
JavaScript
 ↓
Express Routes
 ↓
Node.js Backend
 ↓
Mongoose
 ↓
MongoDB Atlas
```

For product images:

```text
Admin
 ↓
Product Upload
 ↓
Cloudinary
 ↓
Image URL
 ↓
MongoDB
 ↓
Product Page
```

For authentication:

```text
Login
 ↓
Session Created
 ↓
req.session.user
 ↓
Protected Routes
 ↓
Checkout / Account
```

For ordering:

```text
Product
 ↓
Cart / Buy Now
 ↓
Checkout
 ↓
Validation
 ↓
POST /user/checkout
 ↓
MongoDB
 ↓
Order History
```

---

# My Personal Contribution

I personally worked on the complete application rather than only one part.

My responsibilities included:

* Designing the website UI
* Creating responsive layouts
* Building EJS pages
* Writing frontend JavaScript
* Creating Express routes
* Implementing authentication
* Implementing cart functionality
* Implementing Buy Now functionality
* Creating checkout functionality
* Designing MongoDB schemas
* Implementing order storage
* Creating the admin panel
* Integrating Cloudinary
* Debugging session and routing issues
* Deploying the application
* Fixing responsive and UI issues

---

# What I Learned

This project gave me practical experience in building a full-stack application from scratch.

The most important thing I learned was that building an application is not only about writing features. A lot of the work involves **debugging, handling edge cases, managing application state, protecting routes, and making different parts of the application communicate correctly**.

For example, problems such as Buy Now vs Cart checkout, session authentication, duplicate search results, and responsive layouts helped me understand how frontend and backend components work together in a real-world application.
