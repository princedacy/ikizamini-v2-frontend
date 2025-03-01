"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Inter } from "next/font/google";

const dm = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    localStorage.setItem("authToken", "dummy-token");
    router.push("/exam");
  };

  return (
    <div
      className={`min-h-screen bg-gray-100 flex items-center justify-center ${dm.className}`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1
          className={`text-2xl text-primary-gray font-bold mb-6 text-center ${dm.className}`}
        >
          Ikizamini
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary-gray mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-primary-gray mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-primary-gray text-white py-2 px-4 rounded-md hover:[#343f52] transition ${dm.className}`}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
