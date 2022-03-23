import type { EditUserAsPhoneById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import UserAsPhoneForm from 'src/components/UserAsPhone/UserAsPhoneForm'

export const QUERY = gql`
  query EditUserAsPhoneById($id: String!) {
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
const UPDATE_USER_AS_PHONE_MUTATION = gql`
  mutation UpdateUserAsPhoneMutation($id: String!, $input: UpdateUserAsPhoneInput!) {
    updateUserAsPhone(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userAsPhone }: CellSuccessProps<EditUserAsPhoneById>) => {
  const [updateUserAsPhone, { loading, error }] = useMutation(UPDATE_USER_AS_PHONE_MUTATION, {
    onCompleted: () => {
      toast.success('UserAsPhone updated')
      navigate(routes.userAsPhones())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUserAsPhone({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UserAsPhone {userAsPhone.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserAsPhoneForm userAsPhone={userAsPhone} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
