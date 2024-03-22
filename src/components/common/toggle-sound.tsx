'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'

import { zoomIn } from '@/animation/framer'
import AUDIO_OFF from '@/icons/audio-off.svg'
import AUDIO_ON from '@/icons/audio-on.svg'

const ToggleSound: FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="audio/bgm.wav" type="audio/wav" />
      </audio>

      <motion.div
        className="grid place-items-center rounded-lg p-1 hover:bg-bg-dark/10 dark:hover:bg-bg-lighter/10"
        variants={zoomIn(0.1, 0.5)}
        whileTap={{ scale: 0.8 }}
      >
        <button
          className="grid aspect-square h-8 w-auto place-items-center"
          type="button"
          onClick={toggleAudio}
        >
          <Image
            alt=""
            className="size-full"
            src={isPlaying ? AUDIO_ON : AUDIO_OFF}
          />
        </button>
      </motion.div>
    </>
  )
}

export default ToggleSound
