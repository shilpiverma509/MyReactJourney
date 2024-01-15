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
   
