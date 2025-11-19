import { createSignal } from 'solid-js'
import { GreetService } from '../bindings/changeme'

function App() {
  const [name, setName] = createSignal('')
  const [result, setResult] = createSignal('Please enter your name below 👇')

  const doGreet = () => {
    let localName = name()
    if (!localName) {
      localName = 'anonymous'
    }

    GreetService.Greet(localName)
      .then((resultValue: string) => {
        setResult(resultValue)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>My First App</h1>
      <div>{result()}</div>
      <div>
        <div>
          <input
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            autocomplete="off"
          />
          <button onClick={doGreet}>Greet</button>
        </div>
      </div>
    </div>
  )
}

export default App
