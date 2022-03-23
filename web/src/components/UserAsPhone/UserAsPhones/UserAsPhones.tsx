import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/UserAsPhone/UserAsPhonesCell'

const DELETE_USER_AS_PHONE_MUTATION = gql`
  mutation DeleteUserAsPhoneMutation($id: String!) {
    deleteUserAsPhone(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const UserAsPhonesList = ({ userAsPhones }) => {
  const [deleteUserAsPhone] = useMutation(DELETE_USER_AS_PHONE_MUTATION, {
    onCompleted: () => {
      toast.success('UserAsPhone deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userAsPhone ' + id + '?')) {
      deleteUserAsPhone({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Phone</th>
            <th>Entry</th>
            <th>Name</th>
            <th>Refresh token</th>
            <th>Access key</th>
            <th>Hashed password</th>
            <th>Salt</th>
            <th>Reset token</th>
            <th>Reset token expires at</th>
            <th>Roles</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userAsPhones.map((userAsPhone) => (
            <tr key={userAsPhone.id}>
              <td>{truncate(userAsPhone.id)}</td>
              <td>{truncate(userAsPhone.phone)}</td>
              <td>{truncate(userAsPhone.entry)}</td>
              <td>{truncate(userAsPhone.name)}</td>
              <td>{truncate(userAsPhone.refreshToken)}</td>
              <td>{truncate(userAsPhone.accessKey)}</td>
              <td>{truncate(userAsPhone.hashedPassword)}</td>
              <td>{truncate(userAsPhone.salt)}</td>
              <td>{truncate(userAsPhone.resetToken)}</td>
              <td>{timeTag(userAsPhone.resetTokenExpiresAt)}</td>
              <td>{truncate(userAsPhone.roles)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userAsPhone({ id: userAsPhone.id })}
                    title={'Show userAsPhone ' + userAsPhone.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserAsPhone({ id: userAsPhone.id })}
                    title={'Edit userAsPhone ' + userAsPhone.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userAsPhone ' + userAsPhone.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userAsPhone.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserAsPhonesList
