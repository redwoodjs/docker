import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_USER_AS_PHONE_MUTATION = gql`
  mutation DeleteUserAsPhoneMutation($id: String!) {
    deleteUserAsPhone(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UserAsPhone = ({ userAsPhone }) => {
  const [deleteUserAsPhone] = useMutation(DELETE_USER_AS_PHONE_MUTATION, {
    onCompleted: () => {
      toast.success('UserAsPhone deleted')
      navigate(routes.userAsPhones())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userAsPhone ' + id + '?')) {
      deleteUserAsPhone({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">UserAsPhone {userAsPhone.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userAsPhone.id}</td>
            </tr><tr>
              <th>Phone</th>
              <td>{userAsPhone.phone}</td>
            </tr><tr>
              <th>Entry</th>
              <td>{userAsPhone.entry}</td>
            </tr><tr>
              <th>Name</th>
              <td>{userAsPhone.name}</td>
            </tr><tr>
              <th>Refresh token</th>
              <td>{userAsPhone.refreshToken}</td>
            </tr><tr>
              <th>Access key</th>
              <td>{userAsPhone.accessKey}</td>
            </tr><tr>
              <th>Hashed password</th>
              <td>{userAsPhone.hashedPassword}</td>
            </tr><tr>
              <th>Salt</th>
              <td>{userAsPhone.salt}</td>
            </tr><tr>
              <th>Reset token</th>
              <td>{userAsPhone.resetToken}</td>
            </tr><tr>
              <th>Reset token expires at</th>
              <td>{timeTag(userAsPhone.resetTokenExpiresAt)}</td>
            </tr><tr>
              <th>Roles</th>
              <td>{userAsPhone.roles}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserAsPhone({ id: userAsPhone.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userAsPhone.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserAsPhone
