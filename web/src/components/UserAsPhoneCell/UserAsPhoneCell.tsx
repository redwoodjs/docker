import type { FindUserAsPhoneQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserAsPhoneQuery($id: String!) {
    userAsPhone: userAsPhone(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ userAsPhone }: CellSuccessProps<FindUserAsPhoneQuery>) => {
  return <div>{JSON.stringify(userAsPhone)}</div>
}
