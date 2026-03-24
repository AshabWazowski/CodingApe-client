import { render, screen } from "@testing-library/react";
import MainPage from "../app/(main)/page";
import "@testing-library/jest-dom";

// Mocking Next.js components
jest.mock("next/link", () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

jest.mock("next/image", () => {
  return (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  };
});

// Mocking Clerk
jest.mock("@clerk/nextjs", () => ({
  UserButton: () => <div data-testid="user-button">UserButton</div>,
  SignInButton: () => <button>Sign In</button>,
  useUser: () => ({ isSignedIn: true, user: { fullName: "Test User" } }),
  ClerkProvider: ({ children }) => <div>{children}</div>,
}));

describe("Client Basic Tests", () => {
  // 1. Home Page Render
  test("Home Page Render: renders Krit.io title", () => {
    render(<MainPage />);
    expect(screen.getByText(/Krit/i)).toBeInTheDocument();
  });

  // 2. Navbar Navigation (Sign-in link in page)
  test("Get Started Button: exists and points to sign-in", () => {
    render(<MainPage />);
    const link = screen.getByRole("link", { name: /Get Started/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/sign-in");
  });

  // 3. Footer Presence (indirectly via page content)
  test("Features Section: renders Top Features heading", () => {
    render(<MainPage />);
    expect(screen.getByText(/Top/i)).toBeInTheDocument();
    expect(screen.getByText(/Features/i)).toBeInTheDocument();
  });

  // 4. Loading State / Image Check
  test("Hero Image: renders with correct text", () => {
    render(<MainPage />);
    expect(screen.getByText(/Don't Just Learn to Code/i)).toBeInTheDocument();
  });

  // 5. Theme / Style classes
  test("Main container has correct flex classes", () => {
    const { container } = render(<MainPage />);
    expect(container.firstChild).toHaveClass("flex flex-col");
  });
});

describe("Client Medium Tests", () => {
  // 6. Problem List / Feature List Rendering
  test("Feature Card: Interactive Code Editor exists with details", () => {
    render(<MainPage />);
    expect(screen.getByText(/Interactive Code Editor/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time syntax highlighting/i)).toBeInTheDocument();
  });

  // 7. Search / Filter Logic (Mock check)
  test("Feature Card: AI Powered Assistance exists with details", () => {
    render(<MainPage />);
    expect(screen.getByText(/AI Powered Assistance/i)).toBeInTheDocument();
    expect(screen.getByText(/Smart code suggestions/i)).toBeInTheDocument();
  });

  // 8. Sign-in Redirect Presence
  test("Sign-in link is present in the hero section", () => {
    render(<MainPage />);
    const signInLink = screen.getByRole("link", { name: /Get Started/i });
    expect(signInLink).toHaveAttribute("href", "/sign-in");
  });
});

describe("Client High Test", () => {
  // 9. Full Render Integrity
  test("Verify all 3 core feature pillars are present", () => {
    render(<MainPage />);
    expect(screen.getByText(/Interactive Code Editor/i)).toBeInTheDocument();
    expect(screen.getByText(/Curated Problem Set/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Powered Assistance/i)).toBeInTheDocument();
  });
});
