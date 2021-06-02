import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import bestsellers from './bestSellers/BestSellers.tsx'
import pastpurchases from './pastPurchases/PastPurchases.tsx'

Enzyme.configure({
  adapter: new Adapter(),
})

describe('Test 1', () => {
    it('renders', () => {
      const wrapper = shallow(<bestsellers />)
      expect(wrapper.find('h3').html()).toMatch(/Top 20 best sellers/)
    })
})

describe('Test 2', () => {
    it('renders', () => {
      const wrapper = shallow(<pastpurchases />)
      expect(wrapper.find('h3').html()).toMatch(/Past purchases/)
    })
})