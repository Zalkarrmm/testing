import { render, screen } from "@testing-library/react"
import App from './App';

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
})