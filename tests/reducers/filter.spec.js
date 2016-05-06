import { filter } from 'reducers/filter'

describe('(Reducer) Filter', () => {
  it('has default value', () => {
    const nextFilter = filter(undefined, {})
    expect(nextFilter).to.eql('ALL')
  })

  it('changes filter value', () => {
    const nextFilter = filter('ACTIVE', {
      type: 'CHANGE_FILTER',
      filter: 'ALL',
    })

    expect(nextFilter).to.eql('ALL')
  })
})
