const { Router } = require('express')
const router = Router()

const Products = [
  {
    name: 'Поло ХБ',
    price: '200',
    type: 't-shirts'
  },
  {
    name: 'Пуховик длинный',
    price: '1500',
    type: 'outerwear'
  },
  {
    name: 'Подушка',
    price: '200',
    type: 'household'
  },
  {
    name: 'Чистка кроссовок',
    price: '850',
    type: 'shoe shine'
  },
  {
    name: 'Брюки синтетика',
    price: '400',
    type: 'pants'
  },
  {
    name: 'Юбка джинсовая',
    price: '350',
    type: 'skirts'
  },
  {
    name: 'Прачечная',
    price: '250',
    type: 'laundry'
  },
  {
    name: 'Чистка ковров',
    price: '800',
    type: 'carpet cleaning'
  },
]

router.get('/products', async (req, res) => {
  try {
    return res.status(200).json({ message: 'Всё ок', data: Products })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})


module.exports = router