import { getData } from "./getData"
const axios = require('axios')

jest.mock('axios')

describe('get data', () => { 
  let response = {}
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Emily Johnson",
          "company": "ABC Corporation",
          "username": "emily_johnson",
          "email": "emily.johnson@abccorporation.com",
          "address": "123 Main St",
          "zip": "12345",
          "state": "California",
          "country": "USA",
          "phone": "+1-555-123-4567",
          "photo": "http://placeimg.com/640/480/people"
        },
        {
          "id": 2,
          "name": "Michael Williams",
          "company": "XYZ Corp",
          "username": "michael_williams",
          "email": "michael.williams@xyzcorp.com",
          "address": "456 Elm Ave",
          "zip": "67890",
          "state": "New York",
          "country": "USA",
          "phone": "+1-555-987-6543"
        },
        {
          "id": 3,
          "name": "John Smith",
          "company": "Acme Inc.",
          "username": "john_smith",
          "email": "john.smith@acmeinc.com",
          "address": "789 Oak Rd",
          "zip": "54321",
          "state": "Texas",
          "country": "USA",
          "phone": "+1-555-222-3333"
        }
      ]
    }
  })

  test('get usersData', async () => {
    (axios.get as jest.Mock).mockResolvedValue(response);
    const data = await getData('users')
    expect(axios.get).toBeCalledTimes(1)
    expect(data).toEqual(['1', '2', '3'])
    expect(data).toMatchSnapshot()
  })  

})