(Git repository link: https://github.com/Kenz-Github/product-catalogy-api.git
Author name:Kenz C )

# Product Catalog API

## 1. Project Description
This is a simple Node.js + Express API that displays product information through three API endpoints and a frontend HTML page.  
The project includes:
- A product list stored in an in-memory JavaScript array  
- Three GET API endpoints  
- A frontend page (`index.html`) that fetches products using JavaScript `fetch()`  
- Static file hosting using Express  

**Technologies Used:**  
Node.js, Express.js, HTML, CSS, JavaScript (fetch)

---

## 2. Project Structure
```

product-catalog-api/
├── public/
│   └── index.html
├── server.js
├── package.json
├── .gitignore
└── README.md

````

---

## 3. API Documentation

### **GET /products**
- **Method:** GET  
- **Description:** Returns all available products  
- **URL:** `/products`  
- **Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 45000,
    "inStock": true
  },
  {
    "id": 2,
    "name": "Smartphone",
    "category": "Electronics",
    "price": 25000,
    "inStock": true
  }
]
````

---

### **GET /products/categories**

* **Method:** GET
* **URL:** `/products/categories`
* **Description:** Returns unique product categories
* **Sample Response:**

```json
{
  "categories": ["Electronics", "Accessories", "Furniture"]
}
```

---

### **GET /products/instock**

* **Method:** GET
* **URL:** `/products/instock`
* **Description:** Returns only the products that are currently in stock
* **Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 45000,
    "inStock": true
  }
]
```

---

## 4. Installation & Setup Instructions

### **Clone the repository**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### **Install dependencies**

```bash
npm install
```

### **Run the server**

```bash
node server.js
```

Server will run at:
👉 **[http://localhost:3000](http://localhost:3000)**

### **Open the frontend**

Open your browser and go to:

👉 **[http://localhost:3000/](http://localhost:3000/)**
Click **Load All Products** to fetch product data from the API.

---

## 5. GitHub Repository Link

Replace this line with your real repo link after pushing:

👉 https://github.com/[User name]/product-catalogy-api

---

## 6. Author Information

**Name:** Kenz C
**College:** Yenepoya School of Engineering & Technology

```

---

# ✅ You're Done
Just paste this entire block into your `README.md`.

If you want, I can also generate your entire project ZIP with all files correctly structured.
```
