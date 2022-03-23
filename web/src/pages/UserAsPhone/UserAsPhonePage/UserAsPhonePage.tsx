import UserAsPhoneCell from 'src/components/UserAsPhone/UserAsPhoneCell'

type UserAsPhonePageProps = {
  id: string
}

const UserAsPhonePage = ({ id }: UserAsPhonePageProps) => {
  return <UserAsPhoneCell id={id} />
}

export default UserAsPhonePage
