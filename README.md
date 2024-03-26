# My React Notes

#Parcel (Our entry point is index.html for parcel)
   1.Dev Build
   2.Local Server
   3.HMR - Hot Module Replacement by using a file watching algorithm written in C++
   4. Faster Buils because it is caching
   5. Image Optimization
   6. Minification 
   7. Bundling
   8. Compress file size (so that smaller files are shipped to production)
   9.Consistent Hashing
   10.Code Splitting
   11. Differential Bundling - support old browsers
   12. Diagnostic
   13.Error Handling
   14.Https
   15.Tree Shaking - remove unused code 
   16. Different prod and dev builds
   

   # React hooks
   (Normal Js utility functions)
   useState() -> Superpowerful State variable in React

   # React Lifecycle 

   Mounting:

      Contructor method
      Render(dummy data)
         <HTML Dummy>
      Component Did Mount
         <API call>
         <this.setState>

   Update
      render(updated state)==> Reconcialation algorith
      render(API data)
      <HTML loaded with API data>

      componentDidUpdate

   Unmount
      when the component is removed from the DOM this method is called

      2 types of routing in web apps:
      Client side Routing
      Server side Routing

      #Redux Toolkit 
         1.Install @redux/toolkit and react-redux
         2.Build our store
         3. Connect store to our app
         4. Slice(cart slice)
         5.dispatch(action)
         6.Selector(read the data)


   # Types of testing (developer)
   1.Unit Testing s- (component testing )
   2.Integration Testing - How multiple components are interacting with each other ( events like click event)
   3.End to End Testing (e2e testing) -> Test a react application as soon as user lands on the page till the time it leaves the app. 

   React testing library is build on top of DOM tetsing library hence more features

# Setting up Testing in our app
1.Install React Test Library
2. Install Jest
3. Install Babel dependencies (from jest documentation)
4.Configure Babel (Add babel.config.js)
5.Configure Parcel Config file to disable default babel configuration
6.Jest configuration
7. Install JSdom library (for version of jest 28 and purpose above)
8.Install @babel/preset-react to make JSX work in test cases
9. Inclye @babel/preset-react in our babel config
10. Install @testing-library/jest-dom


# whenever we are testing a react component we will have to render the react component on the jsdoms