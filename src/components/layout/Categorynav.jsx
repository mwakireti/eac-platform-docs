import { motion } from "motion/react";
import categories from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Categorynav = () => {

  return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-3">
          {categories.categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <NavLink to={`/${cat.id}`} key={cat.id}>
                {({ isActive }) => (<motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isActive
                    ? "bg-linear-to-r from-blue-500 to-purple-500 text-black shadow-lg"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                    }`}
                >
                  <Icon size={18} />
                  {cat.label}
                </motion.button>)}
              </NavLink>
            );
          })}
        </div>
      </motion.div>
  )
}
export default Categorynav;