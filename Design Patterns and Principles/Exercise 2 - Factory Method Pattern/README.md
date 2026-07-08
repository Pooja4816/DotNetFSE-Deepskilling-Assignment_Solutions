\# Exercise 2: Implementing the Factory Method Pattern



\## Scenario



This exercise demonstrates the implementation of the Factory Method Design Pattern for a document management system. The goal is to create different types of documents such as Word, PDF, and Excel using the Factory Method Pattern.



\## Project Name



`FactoryMethodPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `FactoryMethodPatternExample`.



\### 2. Define Document Interface



Created an `IDocument` interface with an `Open()` method to provide a common structure for different document types.



\### 3. Create Concrete Document Classes



Created the following concrete document classes that implement the `IDocument` interface:



\- `WordDocument`

\- `PdfDocument`

\- `ExcelDocument`



Each document class provides its own implementation of the `Open()` method.



\### 4. Implement the Factory Method



Created an abstract `DocumentFactory` class with an abstract `CreateDocument()` method.



Created the following concrete factory classes:



\- `WordDocumentFactory`

\- `PdfDocumentFactory`

\- `ExcelDocumentFactory`



Each concrete factory implements the `CreateDocument()` method and creates the corresponding document object.



\### 5. Test the Factory Method Implementation



Created different document objects using their respective factory classes and called the `Open()` method to verify the implementation.



\## Output



```text

Opening Word document.

Opening PDF document.

Opening Excel document.

```



\## Conclusion



The output confirms that different types of document objects are successfully created using their respective factory classes. Therefore, the Factory Method Design Pattern has been implemented successfully.

