import { createStore } from 'vuex'

const testData = []

for (let i = 1; i <= 10; i++) {
  testData.push({
    id: i,
    name: `Product #${i}`,
    category: `Category ${i % 3}`,
    description: `This is Product #${i}`,
    price: i * 50
  })
}

const store = createStore({
  strict: true,
  state() {
    return {
      products: testData
    }
  }
})

export default store
