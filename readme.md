# **Dro-ex**

This is a very basic REST API made for serving data to the [client side](https://github.com/cala-js/coex-test-client) of a project made to test and implement new technologies, such as typescript in the backend side.

## API Routes

---

### Products Routes:

-   ```
    /v1/products
    ```

    Retrieves a list of all the registered products (Medicines, in this case)

    **GET**

    ```json
    [
        {
            "id":            number,
            "name":          string,
            "detail":        string,
            "quantity":      number,
            "admin_route":   string,
            "taxes_pctge":   number,
            "untaxed_price": number,
            "created_at":    Date,
        }
    ]
    ```

### Sales Routes:

-   ```
    /v1/sales
    ```

    Retrieves a list of all the registered sales

    **GET**

    ```json
    [
        {
          "id":             number,
          "untaxed_value":  number,
          "total_value":    number,
          "sold_at":        Date,
        }
    ]
    ```

### Images Routes:

-   ```
    /v1/images/:productId
    ```

    Retrieves the image associated with a given product ID

    **GET**

    ```json
    {
      "id": number,
      "medicine_id": number,
      "image_url": string,
    }
    ```

## Additional Information

---

-   The database Script (with populated values) is in the file: `/src/sql/database.sql`
-   The pool configuration file (for the MySQL connection to the database) is: `/src/dbconnection.ts`
-   All the app configuration, routes and middlewares are applied inside the `App` class in the file: `/src/app.ts`
