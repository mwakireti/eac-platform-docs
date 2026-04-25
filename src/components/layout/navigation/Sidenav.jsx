// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { motion } from "motion/react";
// import assets from '../../../assets/assets';

// const Sidenav = () => {
//   return (
//     <motion.div className='flex flex-col tracking-wider'>
//       <h3 className='text-lg font-bold text-blue-900 mb-3'>
//         Eac Documentation
//       </h3>

//       {assets.categories.map((cat) => (
//         <NavLink
//           to={`/${cat.id}`}
//           key={cat.id}
//           className={({ isActive }) =>
//             `py-2 mb-2 px-2 transition-all ${
//               isActive
//                 ? 'text-blue-700 italic'
//                 : 'hover:bg-gray-300'
//             }`
//           }
//         >
//           {cat.label}
//         </NavLink>
//       ))}
//     </motion.div>
//   );
// };

// export default Sidenav;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";
import assets from '../../../assets/assets';

const Sidenav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 mb-3 bg-blue-900 text-white rounded"
      >
        ☰ Menu
      </button>

      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col tracking-wider p-3 rounded-lg w-64"
          >
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Eac Documentation
            </h3>

            {assets.categories.map((cat) => (
              <NavLink
                to={`/${cat.id}`}
                key={cat.id}
                className={({ isActive }) =>
                  `relative py-2 mb-2 px-3 rounded transition-all duration-200 ${
                    isActive
                      ? 'text-blue-700 bg-blue-100 font-semibold'
                      : 'hover:bg-gray-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Left active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 h-full w-1 bg-blue-700 rounded"
                      />
                    )}

                    {cat.label}
                  </>
                )}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidenav;