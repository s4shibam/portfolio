// Animations
import { Variants } from 'framer-motion'

export const fadeIn = (
  from: 'left' | 'right' | 'up' | 'down',
  type: 'spring' | 'tween',
  range: number,
  delay: number,
  duration: number
): Variants => {
  return {
    initial: {
      x: from === 'left' ? -range : from === 'right' ? range : 0,
      y: from === 'up' ? -range : from === 'down' ? range : 0,
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeInOut'
      }
    }
  }
}

export const pageTransition: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.25,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0
  }
}

export const scaleInOut: Variants = {
  initial: {
    scale: 0.5,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      damping: 100,
      stiffness: 500
    }
  },
  exit: {
    scale: 0.5,
    opacity: 0
  }
}

export const slideIn = (
  from: 'left' | 'right' | 'up' | 'down',
  type: 'spring' | 'tween',
  range: number,
  delay: number,
  duration: number
): Variants => {
  return {
    initial: {
      x: from === 'left' ? `-${range}%` : from === 'right' ? `${range}%` : 0,
      y: from === 'up' ? `-${range}%` : from === 'down' ? `${range}%` : 0
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeInOut'
      }
    }
  }
}

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeInOut'
      }
    }
  }
}
