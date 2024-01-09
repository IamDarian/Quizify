"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import open from "@/public/open-eye.svg";
import closed from "@/public/closed-eye.svg";

export default function Signup() {
  const router = useRouter();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    checkbox: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ signUpData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
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
      <div className="card w-96 bg-blue-500 text-primary-content">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="card-body items-center text-center"
        >
          <h2 className="card-title">Sign Up</h2>

          <label className="w-full text-left">
            Username:<span className="text-red-500 active">*</span>{" "}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Username"
            autoComplete="username"
            required
            className="input input-bordered text-slate-500 focus:text-slate-900 w-full max-w-xs"
            value={signUpData.name}
            onChange={handleChange}
          />

          <label className="w-full text-left">
            E-mail:<span className="text-red-500 active">*</span>{" "}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            required
            className="input input-bordered text-slate-500 focus:text-slate-900 w-full max-w-xs"
            value={signUpData.email}
            onChange={handleChange}
          />

          <label className="w-full text-left relative">
            Password:<span className="text-red-500 active">*</span>{" "}
            <input
              id="password"
              name="password"
              type={visibility}
              placeholder="Password"
              required
              className="input input-bordered text-slate-500 focus:text-slate-900 w-full max-w-xs mt-2"
              value={signUpData.password}
              onChange={handleChange}
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

          <label className="label cursor-pointer">
            I accept the terms of service
            <span className="text-red-500 active">*</span>{" "}
            <input
              id="checkbox"
              name="checkbox"
              className="checkbox bg-slate-100 w-4 h-4 rounded ml-2"
              type="checkbox"
              required
              checked={signUpData.checkbox}
              onChange={handleChange}
            />
          </label>

          <div className="card-actions justify-end">
            <button className="btn mb-4 mt-2">Sign Up</button>
          </div>

          <p>
            You already have an account?{" "}
            <Link href="/login" className="link">
              Sign in here.
            </Link>
          </p>
        </form>
        <p className="text-red-500">{errorMessage}</p>
      </div>
    </main>
  );
}
