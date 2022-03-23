import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserAsPhoneCreateArgs>({
  userAsPhone: {
    one: { data: { id: 'String', phone: 'String6866217' } },
    two: { data: { id: 'String', phone: 'String961442' } },
  },
})

export type StandardScenario = typeof standard
