\# Exercise 6: Implementing the Proxy Pattern



\## Scenario



This exercise demonstrates the implementation of the Proxy Design Pattern in an image viewer application. The goal is to use lazy initialization and caching while loading images from a remote server.



\## Project Name



`ProxyPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `ProxyPatternExample`.



\### 2. Define Subject Interface



Created an `IImage` interface with a `Display()` method to provide a common interface for the real image and proxy image classes.



\### 3. Implement Real Subject Class



Created a `RealImage` class that implements the `IImage` interface.



The `RealImage` class simulates loading an image from a remote server and provides functionality to display the image.



\### 4. Implement Proxy Class



Created a `ProxyImage` class that implements the `IImage` interface and holds a reference to a `RealImage` object.



The `ProxyImage` class implements:



\- Lazy initialization by creating the `RealImage` object only when the image is displayed for the first time.

\- Caching by reusing the existing `RealImage` object for subsequent display calls.



\### 5. Test the Proxy Implementation



Created a `ProxyImage` object and called the `Display()` method twice.



During the first call, the image is loaded from the remote server and displayed. During the second call, the cached image is reused without loading it again.



\## Output



```text

First display call:

Loading sample.jpg from remote server...

Displaying sample.jpg



Second display call:

Displaying sample.jpg

```



\## Conclusion



The output demonstrates that the image is loaded only during the first display call and reused during subsequent calls. Therefore, lazy initialization and caching using the Proxy Design Pattern have been implemented successfully.

