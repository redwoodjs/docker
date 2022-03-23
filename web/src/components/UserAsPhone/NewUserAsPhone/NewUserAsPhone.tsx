import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import UserAsPhoneForm from 'src/components/UserAsPhone/UserAsPhoneForm'

const CREATE_USER_AS_PHONE_MUTATION = gql`
  mutation CreateUserAsPhoneMutation($input: CreateUserAsPhoneInput!) {
    createUserAsPhone(input: $input) {
      id
    }
  }
`

const NewUserAsPhone = () => {
  const [createUserAsPhone, { loading, error }] = useMutation(CREATE_USER_AS_PHONE_MUTATION, {
    onCompleted: () => {
      toast.success('UserAsPhone created')
      navigate(routes.userAsPhones())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUserAsPhone({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserAsPhone</h2>
      </header>
      <div className="rw-segment-main">
        <UserAsPhoneForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserAsPhone
