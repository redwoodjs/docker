import {
  userAsPhones,
  userAsPhone,
  createUserAsPhone,
  updateUserAsPhone,
  deleteUserAsPhone,
} from './userAsPhones'
import type { StandardScenario } from './userAsPhones.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userAsPhones', () => {
  scenario('returns all userAsPhones', async (scenario: StandardScenario) => {
    const result = await userAsPhones()

    expect(result.length).toEqual(Object.keys(scenario.userAsPhone).length)
  })

  scenario(
    'returns a single userAsPhone',
    async (scenario: StandardScenario) => {
      const result = await userAsPhone({ id: scenario.userAsPhone.one.id })

      expect(result).toEqual(scenario.userAsPhone.one)
    }
  )

  scenario('creates a userAsPhone', async () => {
    const result = await createUserAsPhone({
      input: { id: 'String', phone: 'String3190194' },
    })

    expect(result.id).toEqual('String')
    expect(result.phone).toEqual('String3190194')
  })

  scenario('updates a userAsPhone', async (scenario: StandardScenario) => {
    const original = await userAsPhone({ id: scenario.userAsPhone.one.id })
    const result = await updateUserAsPhone({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a userAsPhone', async (scenario: StandardScenario) => {
    const original = await deleteUserAsPhone({
      id: scenario.userAsPhone.one.id,
    })
    const result = await userAsPhone({ id: original.id })

    expect(result).toEqual(null)
  })
})
