"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

import Image from "next/image";
import open from "@/public/open-eye.svg";
import closed from "@/public/closed-eye.svg";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(status);

  const [singInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const [errMsg, setErrMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    // const formattedEmail = JSON.stringify(email);
    try {
      const res = await signIn("credentials", {
        email: singInData.email,
        password: singInData.password,
        redirect: false,
      });
      console.log(singInData);
      if (res.error) {
        setErrMsg("Invalid Credentials!");
        return;
      }

      router.replace("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const [visibility, setVisibility] = useState("password");

  function toggleVisibility() {
    visibility === "password"
      ? setVisibility("text")
      : setVisibility("password");
  }

  return (
    <main className="flex min-h-fit flex-col items-center justify-center py-10">
      {!session && (
        <div className="card w-96 bg-blue-500 text-primary-content">
          <form
            onSubmit={handleSignIn}
            className="card-body items-center text-center"
          >
            <h2 className="card-title">Log In</h2>
            <label className="w-full text-left">E-mail: </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={singInData.email}
              onChange={handleChange}
              required
              className="input input-bordered text-slate-500 focus:text-slate-900 w-full max-w-xs"
            />
            <label className="w-full text-left relative">
              Password:{" "}
              <input
                id="password"
                name="password"
                type={visibility}
                placeholder="Password"
                value={singInData.password}
                onChange={handleChange}
                required
                className="input input-bordered text-slate-500 focus:text-slate-900 w-full max-w-xs mt-2"
              />
              {visibility === "text" ? (
                <Image
                  src={open}
                  className="cursor-pointer btn-ghost rounded absolute top-[58%] right-3"
                  onClick={toggleVisibility}
                  alt="visible password"
                />
              ) : (
                <Image
                  src={closed}
                  className="cursor-pointer btn-ghost rounded absolute top-[58%] right-3"
                  onClick={toggleVisibility}
                  alt="invisible password"
                />
              )}
            </label>
            <div className="card-actions justify-end">
              <button className="btn my-4">Log In</button>
            </div>
            <p>
              You don't have an account yet?{" "}
              <Link href="/signup" className="link">
                Sign up here.
              </Link>
            </p>
          </form>
          {errMsg && <p className="text-red-800">{errMsg}</p>}
        </div>
      )}
    </main>
  );
}
