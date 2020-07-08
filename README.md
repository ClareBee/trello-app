## Trello Clone

In the project directory, you can run:

### `yarn start`

Runs the app in development mode, kicking off the backend service on localhost:4000
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## TypeScript with React

```javascript
function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;

// when response types are known:
const { current_user_url } = await fetch('https://api.github.com')
  .then((response) => {
    return response.json<{ current_user_url: string }>();
  })
}
console.log(typeof current_user_url) // string”
```
