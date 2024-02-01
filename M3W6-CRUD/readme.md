# July 20 - 2023 - CRUD and Express JS



Topics to Cover:

* [x] Implementing CRUD over HTTP with Express
* [x] Render vs Redirect pattern in multi-page apps
* [x] Forms (action, method)
* [x] Links (a tags) compared to Forms
* [x] Exploring the DevTools network tab in Chrome
* *  [x] Explore the full lifecycle of GET -> Submit Form -> POST -> Redirect -> GET
* *  [x] Query string params vs Post Data params (and how they are encoded)
* [x] Debugging tactics


## npm Modules
* express  - this is your "node" server
* ejs - Needed for using ejs template files
* body-parser - needed to easily parse your body on form submits.


## Links
GitHub: https://github.com/rternier/LHL_June_12/tree/main/M3W6-CRUDExpress
PPT: https://github.com/rternier/LHL_June_12/blob/main/M3W6-CRUDExpress/M3W6%20-%20CRUD%20with%20Express.pptx


**Common Web Architectures**

*3-Tier Architecture*
3-Tier architecture is a software design pattern that separates an application into three logical layers: presentation, business logic, and data storage. The presentation layer handles user interactions, the business logic layer processes and manipulates data, and the data storage layer manages data persistence.

*n-Tier Architecture*
n-Tier architecture is an extension of the 3-Tier architecture that allows for greater scalability and flexibility by introducing additional layers and components. It separates the application into multiple layers, such as presentation, business logic, data access, and more, depending on the specific needs of the system.

The key difference between 3-Tier and n-Tier architectures lies in their flexibility and scalability. While 3-Tier architecture provides a simple and straightforward division of layers, n-Tier architecture allows for a more modular and scalable system by introducing additional layers. n-Tier architecture is suitable for complex applications that require a higher level of separation and organization, but it also adds complexity and overhead compared to the simpler 3-Tier architecture.

**RESTful**
RESTful architecture follows a set of principles for building scalable and efficient web services. 

Resource-oriented: RESTful architecture emphasizes designing APIs around resources. In JavaScript/Node, this means mapping resources to URLs, allowing clients to perform CRUD (Create, Read, Update, Delete) operations using standard HTTP methods like GET, POST, PUT, and DELETE.

Stateless communication: RESTful APIs are stateless, meaning that each request from a client to the server should contain all necessary information to understand and process the request. In Node, this can be achieved using middleware like Express.js, which handles routing and request processing.

JSON as a data format: JavaScript Object Notation (JSON) is commonly used for data representation in RESTful architectures. JavaScript's built-in JSON support and Node's ability to parse and serialize JSON make it easy to handle data exchange between clients and servers.

CRUD operations through HTTP methods: RESTful APIs utilize HTTP methods to perform CRUD operations on resources. For example, a GET request retrieves a resource, a POST request creates a new resource, a PUT request updates an existing resource, and a DELETE request removes a resource. JavaScript/Node frameworks like Express provide a convenient way to define routes and handle these operations.

**CRUD**

CRUD (Create, Read, Update, Delete) operations are fundamental actions performed on data in many web applications. These operations can be mapped to specific HTTP verbs and actions:

Create (POST): The POST HTTP verb is used to create a new resource on the server. When a client sends a POST request to the appropriate endpoint, the server receives the request, processes the data, and creates a new resource based on the provided information.

Read (GET): The GET HTTP verb is used to retrieve or read a resource from the server. When a client sends a GET request to a specific URL, the server responds with the requested resource's data. The server receives the GET request, fetches the corresponding resource from a database or other data source, and returns it to the client.

Update (PUT): The PUT HTTP verbs are used to update an existing resource on the server. A client sends a PUT request to the appropriate endpoint, along with the updated data. The server then receives the request, identifies the resource to update, and modifies it accordingly.

When using PUT, the entire resource is typically replaced with the new data provided in the request. If any fields are not included in the request, they may be cleared or set to default values.


Delete (DELETE): The DELETE HTTP verb is used to remove a resource from the server. A client sends a DELETE request to the appropriate URL, and the server receives the request, identifies the resource to delete, and removes it from the system.








