import Image from 'next/image'

import LOGO_ANIMATED from '@/assets/icons/logo-animated.svg'

const Loader = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center pt-20 text-lg font-medium md:pt-40 md:text-xl">
      <Image
        alt="loader"
        className="size-16 invert dark:invert-0 md:size-28"
        height={100}
        src={LOGO_ANIMATED}
        width={100}
      />

      <p>Compiling pixels...</p>
      <p>
        <span className="text-primary dark:text-secondary">patience.exe</span>{' '}
        loading...
      </p>
    </div>
  )
}

export default Loader
