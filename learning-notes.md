
# Stravah Explorah — Learning Notes

## 1. HTTP Requests and Fetch

- `fetch(url)` sends an HTTP request and returns a Promise.
- `await` waits for a Promise to fulfil. If it rejects, an error is thrown.
- `fetch()` doesn't automatically throw for HTTP errors like 404 or 500.
- `response.ok` is `true` when the HTTP status is in the 200–299 range.
- `response.status` contains the HTTP status code.
- `await response.json()` reads the response body and parses it as JSON.

## 2. Error Handling

- `try...catch` lets me handle errors without immediately crashing the program.
- `throw new Error("message")` creates and throws an error.
- `catch (error)` receives the error.
- `error.message` contains the error's message.
- If a function catches an error but neither returns a value nor throws again, it may return `undefined`.
- I should avoid logging the same error in multiple layers.
- A reusable function can throw an error and let its caller decide how to handle it.

## 3. Objects and Arrays

- Objects store related data as key-value pairs.
- I can access object properties using dot notation, e.g. `user.name`.
- Arrays contain ordered elements, accessed using zero-based indexes: `users[0]` is the first element.
- An API can return an array even when only one result matches.
- `forEach()` runs a function for every array element.
- `map()` transforms each element and returns a new array.

## 4. URLs and Query Parameters

- `new URL("https://example.com/path")` creates a URL object.
- `url.searchParams.set("id", "1")` sets a query parameter.
- `url.toString()` converts the URL object to a string.
- Query parameters let me filter or customise API requests.

## 5. Functions and Modules

- A function can accept parameters and return a value.
- `async function` allows a function to use `await` and returns a Promise.
- `export default` lets another module import the exported value.
- `import getUser from "./users.js"` imports the default export from another file.
- Splitting code into modules makes it reusable and easier to maintain.
- Errors thrown inside an async function can propagate to the caller.

## 6. Things I Have Built

- Made HTTP requests using `fetch()`.
- Parsed JSON responses.
- Checked HTTP status codes and handled errors.
- Extracted data from objects and arrays.
- Used `map()` and `forEach()`.
- Built URLs with query parameters.
- Created a reusable `getUser(id)` function in `users.js`.
- Imported and reused that function in `url-basics.js`.

## 7. Things to Revisit

- Promises and `async` / `await`.
- The difference between HTTP errors and network errors.
- How errors propagate through function calls.
- The difference between `map()` and `forEach()`.
