'use client'

import { send } from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import PageWrapper from '@/common/page-wrapper'
import { CONTACT_REASONS } from '@/constants/contact-reasons'
import Button from '@/ui/button'
import PageHeading from '@/ui/page-heading'

type SenderDetails = {
  name: string
  email: string
  subject: string
  message: string
}

const initialSenderDetails: SenderDetails = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Contact = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isReasonSelected, setIsReasonSelected] = useState(false)
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

      router.push('/')
      setLoading(false)
      toast.success(
        `Thanks, ${senderDetails.name.trim().split(' ')[0]}!\nI will get back to you soon!`
      )
    } catch (error) {
      console.error(error)
      toast.error(
        `Sorry, ${senderDetails.name.trim().split(' ')[0]}!\nUnknown error occurred!`
      )
      setLoading(false)
    }
  }

  return (
    <PageWrapper className="md:px-10">
      <PageHeading heading="Reach Me Out" />

      {!isReasonSelected && (
        <div className="relative flex flex-col gap-6">
          <h3 className="text-center text-xl font-medium tracking-wide text-text-black dark:text-text-white sm:text-2xl">
            Please, Select a reason first
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_REASONS.map((reason, i) => (
              <motion.button
                key={i}
                className="flex w-full flex-col gap-2 rounded-2xl border-2 p-2 text-base md:text-lg"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsReasonSelected(true)
                  handleInputChange({
                    target: { name: 'subject', value: reason.title + ': ' }
                  })
                }}
              >
                <p className="w-full rounded-xl bg-bg-dark px-2 py-1.5 font-medium text-text-white dark:bg-bg-light dark:text-text-black md:py-2.5">
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
            className="input-box resize-y"
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
    </PageWrapper>
  )
}

export default Contact
