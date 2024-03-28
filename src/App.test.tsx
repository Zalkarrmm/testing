import { fireEvent, render, screen } from "@testing-library/react"
import App from './App';
import userEvent from "@testing-library/user-event";

describe('React app test', () => {
  test('app page render', () => {
    render(<App/>);
    const linkElement = screen.getByText(/link to google/i)
    const btn = screen.getByRole("button")
    const input = screen.getByPlaceholderText(/input text/i)
    expect(linkElement).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  })
  test('app', () => {
    render(<App/>);
    const linkElement = screen.getByText(/link to google/i)
    const btn = screen.getByRole("button")
    const input = screen.getByPlaceholderText(/input text/i)
    expect(linkElement).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  })

  test('Renders a hello world', async () => {
    render(<App />)
    // const helloWorldElem = screen.queryByText(/hello2/i)
    // expect(helloWorldElem).toBeNull()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'})
  })

  test('Click toggle event', () => {
    render(<App />)
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn, {})
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn, {})
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  // test('Input event', () => {
  //   render(<App />)
  //   const input = screen.getByPlaceholderText('input text...')
  //   expect(screen.getByTestId('value-elem')).toContainHTML('')
  //   fireEvent.change(input, {
  //     target: {
  //       value: 'Hello'
  //     }
  //   })
  //   expect(screen.getByTestId('value-elem')).toContainHTML('Hello')
  // })
  test('Input event', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('input text...')
    expect(screen.getByTestId('value-elem')).toContainHTML('')
    // fireEvent.change(input, { // Simulating Events
    //   target: {
    //     value: 'Hello'
    //   }
    // })
    userEvent.type(input, 'Hello') //Близко к пользовател, обрабатываются события нажатия клавиш и тд 
    expect(screen.getByTestId('value-elem')).toContainHTML('Hello')
  })
})