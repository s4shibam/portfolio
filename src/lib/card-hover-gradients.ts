export const gradients = [
  {
    dark: '#450A0A',
    light: '#FECACA'
  },
  {
    dark: '#134E4A',
    light: '#99F6E4'
  },
  {
    dark: '#230A52',
    light: '#DDD6FE'
  },
  {
    dark: '#422006',
    light: '#FEF08A'
  },
  {
    dark: '#4A044E',
    light: '#F5D0FE'
  },
  {
    dark: '#500724',
    light: '#FBCFE8'
  },
  {
    dark: '#052E16',
    light: '#BBF7D0'
  },
  {
    dark: '#172554',
    light: '#BFDBFE'
  },
  {
    dark: '#083344',
    light: '#A5F3FC'
  }
]

export const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradients.length)
  return gradients[randomIndex]
}
