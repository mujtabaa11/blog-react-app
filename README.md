# Blog Manager Application  

## Overview  

This React application is a simple blog manager that allows users to:  
- Add new blog entries.  
- Edit existing blogs.  
- Delete blogs.  
- Persist data using local storage for maintaining blog entries across sessions.  

---

## Features  

### Core Functionalities  
1. **Add Blogs**: Users can write and save blog entries. Empty entries are not allowed.  
2. **Edit Blogs**: Select a blog entry to modify, which moves it back to the input field for editing.  
3. **Delete Blogs**: Remove a blog entry permanently.  
4. **Data Persistence**: Blogs are saved in the browser's local storage, ensuring entries remain intact even after refreshing the page.  

### Components  
- **Header**: Placeholder for the app title or navigation (expandable for further features).  
- **BlogEntry**: Handles input and submission of new blog entries.  
- **BlogsList**: Displays the list of blogs with options to edit or delete entries.  

---

## Technologies Used  

- **Frontend**: React.js, HTML, CSS.
- **State Management**: React `useState` and `useEffect` hooks. 
- **Storage**: Browser local storage for data persistence.
