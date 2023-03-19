import React from "react"
import ReactDOM from "react-dom/client"

export const App = () => <div>react-typescript-template</div>

export const app = (htmlElement: HTMLElement) => {
  const root = ReactDOM.createRoot(htmlElement)
  root.render(<App />)
}
