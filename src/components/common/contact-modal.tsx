'use client'

import { send } from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import ModalFrame from '../ui/modal-frame'

import { slideIn } from '@/animation/framer'
import { CONTACT_REASONS } from '@/constants/contact-reasons'
import Button from '@/ui/button'

interface ContactModalProps {
  close: () => void
}

interface SenderDetails {
  name: string
  email: string
  subject: string
  message: string
}

interface StatusProps {
  name?: string
  success?: boolean
}

const initialSenderDetails: SenderDetails = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Status: FC<StatusProps> = ({ name = 'Sender', success }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-5">
      <i
        className={`bx bx-tada text-5xl ${
          success
            ? 'bx-check-circle text-green-500'
            : 'bx-x-circle text-red-500'
        }`}
      />
      <motion.span
        className="text-lg font-medium"
        variants={slideIn('left', 'tween', 5, 0.25, 0.25)}
      >
        {success ? (
          <>
            <p>Thanks, {name.trim().split(' ')[0]}!</p>{' '}
            <p>I will get back to you soon!</p>
          </>
        ) : (
          <>
            <p>Sorry, {name.trim().split(' ')[0]}!</p>
            <p>Unknown error occurred!</p>
          </>
        )}
      </motion.span>
    </div>
  )
}

const ContactModal: FC<ContactModalProps> = ({ close }) => {
  const [loading, setLoading] = useState(false)
  const [isReasonSelected, setIsReasonSelected] = useState(false)
  const [status, setStatus] = useState<0 | 1 | -1>(0)
  const [senderDetails, setSenderDetails] =
    useState<SenderDetails>(initialSenderDetails)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setSenderDetails((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          subject: senderDetails.subject,
          userName: senderDetails.name,
          message: senderDetails.message,
          userEmail: senderDetails.email
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setLoading(false)
      setStatus(1)
    } catch (error) {
      console.error(error)
      setStatus(-1)
      setLoading(false)
    }
  }

  if (status === -1) {
    return (
      <ModalFrame className="w-fit max-w-2xl" close={close}>
        <Status name={senderDetails.name} />
      </ModalFrame>
    )
  }

  if (status === 1) {
    return (
      <ModalFrame className="w-fit max-w-2xl" close={close}>
        <Status success name={senderDetails.name} />
      </ModalFrame>
    )
  }

  return (
    <ModalFrame className="max-w-3xl" close={close}>
      <div className="flex flex-col gap-4 pt-14">
        <motion.div
          className={`absolute inset-x-0 top-0 bg-primary`}
          variants={slideIn('up', 'tween', 50, 0.25, 0.25)}
        >
          <p className="p-2 text-center text-3xl font-semibold uppercase tracking-wide text-text-white md:text-4xl">
            Reach Me Out!
          </p>
          <p className="h-10 w-full rounded-t-3xl bg-bg-light dark:bg-bg-dark" />
        </motion.div>

        {!isReasonSelected && (
          <div className="relative flex flex-col gap-4">
            <h3 className="text-center text-xl font-medium tracking-wide text-text-black dark:text-text-white sm:text-2xl">
              Please, Select a reason first
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTACT_REASONS.map((reason, i) => (
                <motion.button
                  key={i}
                  className="flex w-full flex-col gap-2 rounded-2xl border-2 p-2 text-sm md:text-base"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsReasonSelected(true)
                    handleInputChange({
                      target: { name: 'subject', value: reason.title + ': ' }
                    })
                  }}
                >
                  <p className="w-full rounded-xl bg-bg-dark px-2 py-1.5 font-medium text-text-white dark:bg-bg-light dark:text-text-black">
                    {reason.title}
                  </p>
                  <p className="p-1">{reason.description}</p>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {isReasonSelected && (
          <form
            className="relative flex w-full flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 xl:flex-row">
              <input
                required
                className="input-box"
                name="name"
                placeholder="Enter Name"
                type="text"
                value={senderDetails.name}
                onChange={handleInputChange}
              />
              <input
                required
                className="input-box"
                name="email"
                placeholder="Enter Email ID"
                type="email"
                value={senderDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              required
              className="input-box"
              name="subject"
              placeholder="Enter Subject"
              type="text"
              value={senderDetails.subject}
              onChange={handleInputChange}
            />
            <textarea
              required
              className="input-box resize-none"
              name="message"
              placeholder="Write The Message ..."
              rows={6}
              value={senderDetails.message}
              onChange={handleInputChange}
            />
            <div className="flex w-full justify-center gap-5">
              <Button
                className="flex-row-reverse"
                disabled={loading}
                icon={loading ? 'bx-loader bx-spin' : 'bx-x-circle'}
                type="reset"
                wrapperClassName="bg-gradient-to-bl before:bg-gradient-to-tr disabled:cursor-not-allowed disabled:!opacity-50 md:px-6"
                onClick={() => {
                  setIsReasonSelected(false)
                }}
              >
                Back
              </Button>

              <Button
                disabled={loading}
                icon={loading ? 'bx-loader bx-spin' : 'bx-check-circle'}
                type="submit"
                wrapperClassName="disabled:cursor-not-allowed disabled:!opacity-50 md:px-6"
              >
                Send
              </Button>
            </div>
          </form>
        )}
      </div>
    </ModalFrame>
  )
}

export default ContactModal
