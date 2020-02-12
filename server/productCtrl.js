module.exports = {
  
  getOne: (req, res) => {
    const dbObj = req.app.get('db')
    const {id} = req.params
    
    dbObj.read_product(id).then(product => {
      res.status(200).send(product)
    }).catch(err => console.log(res.status(500).send(`Error: ${err}`)))
  },
  
  getAll: (req, res) => {
    const dbObj = req.app.get('db')
    
    dbObj.read_products().then(products => {
      res.status(200).send(products)
    }).catch(err => console.log(res.status(500).send(`Error: ${err}`)))
  },
  
  create: (req, res) => {
    const dbObj = req.app.get('db')
    const {name, description, price, image_url} = req.body

    dbObj.create_product([name, description, price, image_url]).then( () => {
      res.sendStatus(200)
    }).catch(err => console.log(res.status(500).send(`Error: ${err}`)))
  },

  update: (req, res) => {
    const dbObj = req.app.get('db')
    const {id} = req.params
    const {desc} = req.query

    dbObj.update_product([id, desc]).then(product => {
      res.status(200).send(product)
    }).catch(err => console.log(res.status(500).send(`Error: ${err}`)))
  },
  
  delete: (req, res) => {
    const dbObj = req.app.get('db')
    const {id} = req.params

    dbObj.delete_product(id).then( () => {
      res.sendStatus(200)
    }).catch(err => console.log(res.status(500).send(`Error: ${err}`)))
  }
}