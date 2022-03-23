import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type UserAsPhoneLayoutProps = {
  children: React.ReactNode
}

const UserAsPhonesLayout = ({ children }: UserAsPhoneLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.userAsPhones()}
            className="rw-link"
          >
            UserAsPhones
          </Link>
        </h1>
        <Link
          to={routes.newUserAsPhone()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New UserAsPhone
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UserAsPhonesLayout
