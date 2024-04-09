import { motion } from 'framer-motion'
import React from 'react'

import { fadeIn } from '@/animation/framer'

const FocusLight = () => {
  return (
    <div className="fixed inset-x-0 top-0 bg-bg-light dark:bg-bg-darker md:hidden">
      <div className="mx-auto h-0.5 w-1/3 bg-gradient-to-r from-bg-light via-secondary to-bg-light dark:from-bg-darker dark:via-primary dark:to-bg-darker" />
      <motion.div
        className="mx-auto h-20 w-1/2 rounded-b-full bg-gradient-to-b from-secondary to-transparent blur-3xl dark:from-primary"
        variants={fadeIn('up', 'tween', 25, 0.25, 0.5)}
      />
    </div>
  )
}

export default FocusLight
