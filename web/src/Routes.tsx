// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import UserAsPhonesLayout from 'src/layouts/UserAsPhonesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UserAsPhonesLayout}>
        <Route path="/user-as-phones/new" page={UserAsPhoneNewUserAsPhonePage} name="newUserAsPhone" />
        <Route path="/user-as-phones/{id}/edit" page={UserAsPhoneEditUserAsPhonePage} name="editUserAsPhone" />
        <Route path="/user-as-phones/{id}" page={UserAsPhoneUserAsPhonePage} name="userAsPhone" />
        <Route path="/user-as-phones" page={UserAsPhoneUserAsPhonesPage} name="userAsPhones" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
