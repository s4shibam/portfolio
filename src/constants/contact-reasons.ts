export type TContactReason = {
  title: string
  description: string
}

export const CONTACT_REASONS: TContactReason[] = [
  {
    title: 'Freelance Development',
    description:
      'Seeking project specific discussion or tailored software solutions for specific business needs.'
  },
  {
    title: 'Recruitment Opportunity',
    description:
      'Interested in discussing employment opportunities or freelance positions.'
  },
  {
    title: 'Personal Guidance',
    description: 'Seeking personal guidance or mentorship.'
  },
  {
    title: 'Other',
    description: 'For inquiries related to topics not listed above.'
  }
]
