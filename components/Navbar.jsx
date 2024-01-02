import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar bg-base-100 px-24">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Quizify
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Make Your Quiz</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link href="/signup">SignUp</Link>
                </li>
                <li>
                  <Link href="/login">LogIn</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
}
