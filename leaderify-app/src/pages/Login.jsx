export default function Login() {

  return (
    <>
      {/* Centering container */}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center w-full h-screen sm:h-auto space-y-8 bg-mauve-100 p-8 sm:rounded-2xl sm:max-w-md shadow-sm border border-slate-100">
          {/* Header */}
          <div className="text-center">
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-shadow shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-shadow shadow-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-center text-sm">
              <div>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="cursor-pointer flex w-full justify-center rounded-lg bg-mauve-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mauve-700 "
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
