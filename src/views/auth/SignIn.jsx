import InputField from "components/fields/InputField";
import logo from "assets/img/logo.png";

export default function SignIn() {
  return (
    <div className="w-full max-w-[400px] animate-fade-in">
      {/* Login Card */}
      <div className="rounded-2xl bg-white p-8 shadow-2xl">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={logo} alt="SIJALA Logo" className="h-12 w-auto" />
        </div>

        {/* Welcome Heading */}
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-900">
          Welcome to SIJALA
        </h1>

        {/* Company ID */}
        <InputField
          variant="auth-new"
          extra="mb-5"
          label="Company ID"
          placeholder="Enter your company ID"
          id="company-id"
          type="text"
        />

        {/* User ID */}
        <InputField
          variant="auth-new"
          extra="mb-6"
          label="User ID"
          placeholder="Enter your user ID"
          id="user-id"
          type="text"
        />

        {/* Continue Button */}
        <button className="w-full rounded-lg bg-gray-900 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]">
          Continue
        </button>

        {/* Recover Account Link */}
        <div className="mt-5 text-center">
          <span className="text-sm text-gray-600">
            Need to recover your account?{" "}
          </span>
          <button
            type="button"
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Click Here
          </button>
        </div>

        {/* Security Badge */}
        <div className="mt-8 flex items-center justify-center border-t border-gray-100 pt-6">
          <span className="text-xs text-gray-400">Secured by</span>
          <svg
            className="ml-2 h-4 w-auto text-gray-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
          </svg>
          <span className="ml-1 text-xs font-medium text-gray-500">SSL</span>
        </div>
      </div>
    </div>
  );
}
