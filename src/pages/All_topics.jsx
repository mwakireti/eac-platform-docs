import React from 'react';
import assets from '../assets/assets';
import { motion } from 'motion/react';
import DocPage from '../components/ui/Doc';

const all_topics = () => {

  return (
    <motion.div>
      {assets.sections.map((content) => (
        <div className='py-4 max-w-2xl' key={content.id}>
           <h3 className="text-2xl font-bold bg-linear-to-l  from-blue-900 to-purple-600 bg-clip-text text-transparent mb-5">{content.title}</h3>
            <motion.div key={content.id} className="topic-card" whileHover={{ scale: 0.99 }} transition={{ duration: 0.3 }}>
          <img className='py-4' src={content.images[0]} alt="Thumbnail" />
        </motion.div>
          <DocPage  doc= {content.content} />
        </div>
      )) }
    </motion.div>    
  )

}

export default all_topics;