// import React from "react";
// import { Link } from "react-router";

// const AnimatedButton = ({ to, children, className = "" }) => {
//   return (
//     <Link
//       to={to}
//       className={`relative group overflow-hidden rounded-3xl p-[1px] flex items-center justify-center bg-secondary ${className}`}
//     >
//       <span className="absolute inset-[-1000%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_90deg_at_50%_50%,#555_0%,#fff_50%,#555_100%)] [animation:spin_3s_linear_infinite]" />

//       <div className="relative z-10 w-full h-full px-4 lg:px-12 py-1 lg:py-3 text-sm lg:text-base rounded-[calc(1.5rem-1px)] bg-[#1a1c29] group-hover:bg-[#2a2c39] text-white flex gap-2 lg:gap-4 items-center justify-center transition-all">
//         {children}
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `,
//         }}
//       />
//     </Link>
//   );
// };

// export default AnimatedButton;

import React from "react";
// import { Link } from "react-router";

const AnimatedButton = ({ to, children, className = "" }) => {
  return (
    <div
      to={to}
      className={`relative group overflow-hidden rounded-3xl p-[1px] flex items-center   `}
    >
      <span className="absolute inset-[-1000%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_90deg_at_50%_50%,#555_0%,#fff_50%,#555_100%)] [animation:spin_3s_linear_infinite]" />

      <div
        className={`relative z-10 w-auto  h-full text-sm lg:text-base rounded-[calc(1.5rem-1px)] bg-transparent group-hover:bg-[#2a2c39] flex gap-2 lg:gap-4 items-center justify-center transition-all  ${className}`}
      >
        {children}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
        }}
      />
    </div>
  );
};

export default AnimatedButton;
