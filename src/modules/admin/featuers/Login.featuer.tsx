import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services";
import { Admin } from "../types";

const Login: React.FC = () => {
  const validAdmin: Admin = { username: 'admin', password: 'isatis' };
  const navigate = useNavigate();

  const [admin, setAdmin] = useState<Admin>({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutate } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (admin.username === validAdmin.username && admin.password === validAdmin.password) {
      mutate(admin);
      navigate("./addclient");
    } else {
      setErrorMessage("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center">ورود</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                نام کاربری
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={admin.username}
                onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="نام کاربری"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                رمز عبور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={admin.password}
                onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="رمز عبور"
              />
            </div>
          </div>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              تائید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
