import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Contact from './Contact'
import { LanguageProvider } from '../context/LanguageContext'

function renderContact() {
  return render(
    <LanguageProvider>
      <Contact />
    </LanguageProvider>,
  )
}

describe('Contact form', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows validation errors when submitted empty', async () => {
    const user = userEvent.setup()
    renderContact()

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(await screen.findByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email.')).toBeInTheDocument()
    expect(screen.getByText('Please write a message.')).toBeInTheDocument()
    expect(fetch).not.toHaveBeenCalled()
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(await screen.findByText('Please enter a valid email.')).toBeInTheDocument()
    expect(fetch).not.toHaveBeenCalled()
  })

  it('submits the form and shows a success toast', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response(null, { status: 200 }))
    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
    const [, options] = vi.mocked(fetch).mock.calls[0]
    expect(options?.method).toBe('POST')
    expect(JSON.parse(options?.body as string)).toEqual({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
    })

    expect(
      await screen.findByText("Thanks! Your message has been sent, I'll get back to you soon."),
    ).toBeInTheDocument()
  })

  it('shows an error message when the request fails', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response(null, { status: 500 }))
    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(
      await screen.findByText('Something went wrong. Please try again or email me directly.'),
    ).toBeInTheDocument()
  })
})
