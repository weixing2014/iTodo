import { filter } from 'reducers/filter'

describe('(Reducer) filter', () => {
  it('has default value', () => {
    nextFilter = filter(undefined, {})
    expect(nextFilter).to.eql('ALL')
  })

  it('changes filter value', () => {
    nextFilter = filter('ACTIVE', {
      type: 'CHANGE_FILTER',
      filter: 'ALL',
    })
    expect(nextFilter).to.eql('ALL')
  })
})
