import type { FindUserAsPhones } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import UserAsPhones from 'src/components/UserAsPhone/UserAsPhones'

export const QUERY = gql`
  query FindUserAsPhones {
    userAsPhones {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userAsPhones yet. '}
      <Link
        to={routes.newUserAsPhone()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userAsPhones }: CellSuccessProps<FindUserAsPhones>) => {
  return <UserAsPhones userAsPhones={userAsPhones} />
}
