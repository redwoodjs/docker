import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const userAsPhones = () => {
  return db.userAsPhone.findMany()
}

export const userAsPhone = ({ id }: Prisma.UserAsPhoneWhereUniqueInput) => {
  return db.userAsPhone.findUnique({
    where: { id },
  })
}

interface CreateUserAsPhoneArgs {
  input: Prisma.UserAsPhoneCreateInput
}

export const createUserAsPhone = ({ input }: CreateUserAsPhoneArgs) => {
  return db.userAsPhone.create({
    data: input,
  })
}

interface UpdateUserAsPhoneArgs extends Prisma.UserAsPhoneWhereUniqueInput {
  input: Prisma.UserAsPhoneUpdateInput
}

export const updateUserAsPhone = ({ id, input }: UpdateUserAsPhoneArgs) => {
  return db.userAsPhone.update({
    data: input,
    where: { id },
  })
}

export const deleteUserAsPhone = ({
  id,
}: Prisma.UserAsPhoneWhereUniqueInput) => {
  return db.userAsPhone.delete({
    where: { id },
  })
}
