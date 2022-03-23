import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const UserAsPhoneForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.userAsPhone?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>
        
          <TextField
            name="phone"
            defaultValue={props.userAsPhone?.phone}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="entry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Entry
        </Label>
        
          <TextField
            name="entry"
            defaultValue={props.userAsPhone?.entry}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="entry" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.userAsPhone?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="refreshToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Refresh token
        </Label>
        
          <TextField
            name="refreshToken"
            defaultValue={props.userAsPhone?.refreshToken}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="refreshToken" className="rw-field-error" />

        <Label
          name="accessKey"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Access key
        </Label>
        
          <TextField
            name="accessKey"
            defaultValue={props.userAsPhone?.accessKey}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="accessKey" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>
        
          <TextField
            name="hashedPassword"
            defaultValue={props.userAsPhone?.hashedPassword}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>
        
          <TextField
            name="salt"
            defaultValue={props.userAsPhone?.salt}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>
        
          <TextField
            name="resetToken"
            defaultValue={props.userAsPhone?.resetToken}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>
        
          <DatetimeLocalField
            name="resetTokenExpiresAt"
            defaultValue={formatDatetime(props.userAsPhone?.resetTokenExpiresAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <Label
          name="roles"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Roles
        </Label>
        
          <TextField
            name="roles"
            defaultValue={props.userAsPhone?.roles}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="roles" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserAsPhoneForm
