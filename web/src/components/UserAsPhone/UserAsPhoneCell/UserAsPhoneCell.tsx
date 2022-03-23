import type { FindUserAsPhoneById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserAsPhone from 'src/components/UserAsPhone/UserAsPhone'

export const QUERY = gql`
  query FindUserAsPhoneById($id: String!) {
    userAsPhone: userAsPhone(id: $id) {
      id
      phone
      entry
      name
      refreshToken
      accessKey
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      roles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserAsPhone not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userAsPhone }: CellSuccessProps<FindUserAsPhoneById>) => {
  return <UserAsPhone userAsPhone={userAsPhone} />
}
