import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
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
          {!session ? (
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
          ) : (
            <>
              <li className="text-blue-600">
                <Link href="/dashboard">Account</Link>
              </li>
              <li className="text-red-600">
                <Link href="/api/auth/signout?callbackUrl=/">LogOut</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
