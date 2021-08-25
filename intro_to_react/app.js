const message = "Hello World!!"
/*
document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('.container')
    div.innerHTML = '<h1>' + message + '</h1>'
})*/

// render is a method in reactDOM that let's us see our app on the browser
// two arguments
ReactDOM.render(
    // JSX - mixture of JS and HTML
    // in JSX the way we tell it to read JS is by the {}
    // anything inside curly brackets gets treated as javascript
    <h1> {message} </h1>,
    // second argument
    document.querySelector('.container')
  )