import { User, Building2, ArrowRight } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex-grow flex items-center justify-between px-20 relative">
        {/* Welcome Text */}
        <h1 className="text-6xl font-bold">
          Welcome..{" "}
          <span className="text-sm text-gray-400">
            {" "}
            _ __ __ __ __ __ __ __ _
          </span>
        </h1>

        {/* Card */}
        <div className="w-full max-w-sm bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 relative">
          {/* Gradient Circle - Bottom Right */}
          <div className="absolute -top-36  -left-20 size-44 bg-blue-500 rounded-full opacity-40"></div>
          <h2 className="text-2xl font-bold mb-2">Join Us!</h2>
          <p className="text-sm text-gray-300 mb-6">
            To begin this journey, tell us what type of account you'd be
            opening.
          </p>

          {/* Individual Account */}
          <div className="mb-4">
            <button className="w-full flex items-center justify-between bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-3 rounded-lg hover:opacity-90">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <User className="size-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold">Individual</div>
                  <div className="text-xs">
                    Personal account to manage all your activities.
                  </div>
                </div>
              </div>
              <span>
                <ArrowRight className="size-5" />
              </span>
            </button>
          </div>

          {/* Business Account */}
          <div>
            <button className="w-full flex items-center justify-between bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:opacity-90">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Building2 className="size-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold">Business</div>
                  <div className="text-xs">
                    Own or belong to a company, this is for you.
                  </div>
                </div>
              </div>
              <span>
                <ArrowRight className="size-5" />
              </span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between text-xs text-gray-400 mt-6">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
          </div>
          {/* Gradient Circle - Bottom Right */}
          <div className="absolute -bottom-24 -right-14 size-28 bg-blue-500 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="flex justify-center items-center gap-3 text-xs text-gray-400 pb-4">
        <a href="#" className="underline">
          Terms of Use
        </a>
        <span>|</span>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default App;
