// // LAB 1: EF CORE SETUP

//Console.WriteLine("Retail Inventory System");
//Console.WriteLine("EF Core 8.0 Setup Completed Successfully!");


//// ==================== LAB 4: INSERTING INITIAL DATA ====================

//using RetailInventory.Data;
//using RetailInventory.Models;

//using var context = new AppDbContext();

//var electronics = new Category { Name = "Electronics" };
//var groceries = new Category { Name = "Groceries" };

//await context.Categories.AddRangeAsync(electronics, groceries);

//var product1 = new Product
//{
//    Name = "Laptop",
//    Price = 75000,
//    Category = electronics
//};

//var product2 = new Product
//{
//    Name = "Rice Bag",
//    Price = 1200,
//    Category = groceries
//};

//await context.Products.AddRangeAsync(product1, product2);
//await context.SaveChangesAsync();



//// ==================== LAB 5: RETRIEVING DATA ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//// 1. Retrieve All Products
//var products = await context.Products.ToListAsync();

//foreach (var p in products)
//{
//    Console.WriteLine($"{p.Name} - ₹{p.Price}");
//}

//// 2. Find by ID
//var product = await context.Products.FindAsync(1);

//Console.WriteLine($"Found: {product?.Name}");

//// 3. FirstOrDefault with Condition
//var expensive = await context.Products
//    .FirstOrDefaultAsync(p => p.Price > 50000);

//Console.WriteLine($"Expensive: {expensive?.Name}");


//// ==================== LAB 6: UPDATING AND DELETING RECORDS ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//// 1. Update a Product
//var product = await context.Products
//    .FirstOrDefaultAsync(p => p.Name == "Laptop");

//if (product != null)
//{
//    product.Price = 70000;
//    await context.SaveChangesAsync();
//}

//// 2. Delete a Product
//var toDelete = await context.Products
//    .FirstOrDefaultAsync(p => p.Name == "Rice Bag");

//if (toDelete != null)
//{
//    context.Products.Remove(toDelete);
//    await context.SaveChangesAsync();
//}


//// ==================== LAB 7: WRITING QUERIES WITH LINQ ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//// 1. Filter and Sort
//var filtered = await context.Products
//    .Where(p => p.Price > 1000)
//    .OrderByDescending(p => p.Price)
//    .ToListAsync();

//// 2. Project into DTO
//var productDTOs = await context.Products
//    .Select(p => new { p.Name, p.Price })
//    .ToListAsync();




//// ==================== LAB 10: EAGER LOADING ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//var products = await context.Products
//    .Include(p => p.Category)
//    .ToListAsync();


//// ==================== LAB 10: EXPLICIT LOADING ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//var product = await context.Products.FirstAsync();

//await context.Entry(product)
//    .Reference(p => p.Category)
//    .LoadAsync();


//// ==================== LAB 12: NAVIGATING CIRCULAR REFERENCES ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;
//using RetailInventory.DTOs;

//using var context = new AppDbContext();

//// 1. Project to DTO
//var productDTOs = await context.Products
//    .Select(p => new ProductDTO
//    {
//        Name = p.Name,
//        CategoryName = p.Category.Name
//    })
//    .ToListAsync();



//// ==================== LAB 13: QUERY CACHING AND TRACKING BEHAVIOR ====================

//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//// 1. AsNoTracking
//var products = await context.Products
//    .AsNoTracking()
//    .ToListAsync();


//// 2. Compiled Query
//var expensiveProductsQuery = EF.CompileAsyncQuery(
//    (AppDbContext ctx, decimal price) =>
//        ctx.Products.Where(p => p.Price > price)
//);

//var result = expensiveProductsQuery(context, 10000);



//// ==================== LAB 14: BATCH PROCESSING AND BULK OPERATIONS ====================

//using EFCore.BulkExtensions;
//using Microsoft.EntityFrameworkCore;
//using RetailInventory.Data;

//using var context = new AppDbContext();

//var productList = await context.Products.ToListAsync();

//foreach (var product in productList)
//{
//    product.StockQuantity += 10;
//}

//await context.BulkUpdateAsync(productList);


// ==================== LAB 15: HANDLING CONCURRENCY WITH ROWVERSION ====================

using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;

using var context = new AppDbContext();

try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
    Console.WriteLine("Concurrency conflict detected.");
}