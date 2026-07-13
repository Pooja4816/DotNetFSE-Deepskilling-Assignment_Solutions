\# EF Core 8.0 Guided Hands-On Exercises



\## Project Overview



This project contains the solutions for the Entity Framework Core 8.0 Guided Hands-On Exercises. The project demonstrates the use of Entity Framework Core with a .NET Console Application and SQL Server.



The application is based on a Retail Inventory System that manages products, categories, stock quantities, relationships, migrations, data retrieval, LINQ queries, bulk operations, and concurrency handling.



\## Technologies Used



\- C#

\- .NET

\- Entity Framework Core 8.0

\- SQL Server

\- SQL Server Management Studio (SSMS)

\- LINQ

\- Visual Studio

\- EF Core CLI



\## Project Structure



\- `Models` - Contains entity classes such as Product, Category, ProductDetail, and Tag.

\- `Data` - Contains the AppDbContext class for database configuration.

\- `DTOs` - Contains Data Transfer Objects used for projecting data.

\- `Migrations` - Contains EF Core database migrations.

\- `Program.cs` - Contains the implementation of the hands-on exercises.



\## Labs Completed



\### Lab 1: Understanding ORM with a Retail Inventory System



Learned the concept of Object Relational Mapping (ORM), the differences between EF Core and Entity Framework, and the features of EF Core 8.0. Created the RetailInventory Console Application and installed the required EF Core packages.



\### Lab 2: Setting Up the Database Context for a Retail Store



Created Product and Category models and configured AppDbContext to connect the application with SQL Server.



\### Lab 3: Using EF Core CLI to Create and Apply Migrations



Created the initial database migration using EF Core CLI and applied the migration to create the Products and Categories tables in SQL Server.



\### Lab 4: Inserting Initial Data into the Database



Inserted initial categories and products into the database using AddRangeAsync() and SaveChangesAsync().



\### Lab 5: Retrieving Data from the Database



Retrieved product data using ToListAsync(), FindAsync(), and FirstOrDefaultAsync().



\### Lab 6: Updating and Deleting Records



Updated an existing product price and deleted a product from the database using Entity Framework Core.



\### Lab 7: Writing Queries with LINQ



Used LINQ methods such as Where(), OrderByDescending(), and Select() to filter, sort, and project product data.



\### Lab 8: Managing Migrations and Schema Changes



Added the StockQuantity property to the Product model and created and applied a new migration to update the database schema.



\### Lab 9: Seeding Data During Migrations



Used the HasData() method to seed initial Category and Product data into the database during migrations.



\### Lab 10: Eager, Lazy, and Explicit Loading



Implemented Eager Loading using Include(), Explicit Loading using Entry(), and configured Lazy Loading using EF Core Proxies.



\### Lab 11: Configuring One-to-One and Many-to-Many Relationships



Configured a One-to-One relationship between Product and ProductDetail and a Many-to-Many relationship between Product and Tag.



\### Lab 12: Navigating Circular References



Created a ProductDTO and projected entity data into DTOs to handle circular reference issues.



\### Lab 13: Query Caching and Tracking Behavior



Used AsNoTracking() for read-only queries and implemented compiled queries for improved query performance.



\### Lab 14: Batch Processing and Bulk Operations



Installed EFCore.BulkExtensions and used BulkUpdateAsync() to perform bulk update operations efficiently.



\### Lab 15: Handling Concurrency with RowVersion



Added the RowVersion property using the Timestamp attribute and handled DbUpdateConcurrencyException for concurrency conflict detection.



\## Key Concepts Covered



\- Object Relational Mapping (ORM)

\- Entity Framework Core

\- DbContext and DbSet

\- Code-First Approach

\- EF Core Migrations

\- Database Seeding

\- CRUD Operations

\- Asynchronous Database Operations

\- LINQ Queries

\- DTOs

\- Eager Loading

\- Explicit Loading

\- Lazy Loading

\- One-to-One Relationships

\- Many-to-Many Relationships

\- Tracking and AsNoTracking

\- Compiled Queries

\- Bulk Operations

\- Optimistic Concurrency

\- RowVersion



\## Conclusion



These hands-on exercises demonstrate the fundamental and advanced features of Entity Framework Core 8.0 through a Retail Inventory System. The project covers database configuration, migrations, CRUD operations, LINQ queries, relationships, data loading strategies, performance optimization, bulk operations, and concurrency handling.

