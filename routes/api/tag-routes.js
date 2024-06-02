const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    // Find all tags with associated product data
    const tagsData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    // Error handling
    res.status(500).json(err);
  }
});

// get one tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    // Find a single tag by its `id` with associated product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    // Error handling
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    // Error handling
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Update a tag's name by its `id`
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    // Error handling
    res.status(500).json(err);
  }
});

// delete one tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Delete a tag by its `id`
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    // Error handling
    res.status(500).json(err);
  }
});

module.exports = router;
