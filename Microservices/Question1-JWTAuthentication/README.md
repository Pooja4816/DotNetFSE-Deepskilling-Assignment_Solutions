\# Question 1: JWT Authentication in ASP.NET Core Web API



\## Overview



This project demonstrates the implementation of JWT (JSON Web Token) authentication in an ASP.NET Core Web API. It provides a login endpoint that generates a JWT token for valid user credentials and protects an API endpoint using the `\[Authorize]` attribute.



\## Technologies Used



\- ASP.NET Core Web API

\- C#

\- JWT Authentication

\- Swagger UI

\- .NET 10



\## Project Structure



```text

Question1-JWTAuthentication

│

├── Controllers

│   └── AuthController.cs

│

├── Models

│   ├── LoginModel.cs

│   └── User.cs

│

├── Output

│   ├── Output1-JWTTokenGenerated.png

│   └── Output2-ProtectedEndpoint.png

│

├── Properties

├── appsettings.json

├── Program.cs

├── Question1-JWTAuthentication.csproj

└── README.md

```



\## Implementation



The application uses JWT authentication to provide secure access to API endpoints.



A demo user is used for login authentication.



```text

Username: admin

Password: admin123

```



After successful login, the application generates a JWT token with a validity period of 60 minutes.



The `/api/Auth/profile` endpoint is protected using the `\[Authorize]` attribute and cannot be accessed without authentication.



\## API Endpoints



\### 1. Login Endpoint



```text

POST /api/Auth/login

```



Validates the user credentials and generates a JWT token after successful authentication.



\### 2. Protected Endpoint



```text

GET /api/Auth/profile

```



This endpoint is secured using the `\[Authorize]` attribute. Accessing it without authentication returns a `401 Unauthorized` response.



\## Output



\### JWT Token Generated Successfully



A valid login request returns a `200 OK` response along with the generated JWT token.



!\[JWT Token Generated](Output/Output1-JWTTokenGenerated.png)



\### Protected Endpoint



Accessing the protected endpoint without authentication returns a `401 Unauthorized` response.



!\[Protected Endpoint](Output/Output2-ProtectedEndpoint.png)



\## Result



JWT authentication was successfully implemented in the ASP.NET Core Web API. The application generates a JWT token after successful login and protects API endpoints using the `\[Authorize]` attribute.

