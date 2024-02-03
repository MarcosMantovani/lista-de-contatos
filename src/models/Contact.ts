class ContactClass {
  contactName: string
  phone: string
  email: string
  id: number

  constructor(contactName: string, phone: string, email: string, id: number) {
    this.contactName = contactName
    this.phone = phone
    this.email = email
    this.id = id
  }
}

export default ContactClass
