import EditUserAsPhoneCell from 'src/components/UserAsPhone/EditUserAsPhoneCell'

type UserAsPhonePageProps = {
  id: string
}

const EditUserAsPhonePage = ({ id }: UserAsPhonePageProps) => {
  return <EditUserAsPhoneCell id={id} />
}

export default EditUserAsPhonePage
