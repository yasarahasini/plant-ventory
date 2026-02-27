"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

type Props = {
  type: "login" | "signup";
};

export default function AuthForm({ type }: Props) {
  const router = useRouter();
  const isLogin = type === "login";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:3001/auth/${type}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      if (isLogin) {
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        router.push("/login");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-zinc-900 dark:to-black px-4">
      <ThemeToggle />

      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 space-y-5 border border-green-100 dark:border-zinc-700"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-600">
              🌿 Plantventory
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {isLogin ? "Welcome back" : "Create your account"}
            </p>
          </div>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none dark:bg-zinc-900"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none dark:bg-zinc-900"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none dark:bg-zinc-900"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            {isLogin ? "No account?" : "Already registered?"}{" "}
            <span
              onClick={() =>
                router.push(isLogin ? "/signup" : "/login")
              }
              className="text-green-600 cursor-pointer font-medium"
            >
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}