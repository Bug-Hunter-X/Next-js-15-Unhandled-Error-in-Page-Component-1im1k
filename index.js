```javascript
// pages/about.js

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('This is an intentional error!');
  } catch (error) {
    // Handle the error gracefully
    console.error('Error in About page:', error);
    return <div>An error occurred on this page. Please try again later.</div>;
  }
}
```