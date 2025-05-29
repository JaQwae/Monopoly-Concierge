import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const articleId = req.params.id;
  const uri = process.env.DB_URI;
  const mongoClient = new MongoClient(uri);

  try {
    await mongoClient.connect();

    const articlesCollection = mongoClient
      .db("conciergeChronicles")
      .collection("articles");

    const objectId = ObjectId.createFromHexString(articleId);
    const articleData = await articlesCollection.findOne({ _id: objectId });

    if (articleData) {
      res.status(200).json(articleData); 
    } else {
      res.status(404).json({ message: 'Article not found' }); 
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).json({ message: 'Server error', error: error.message }); 
  } finally {
    await mongoClient.close();
  }
});

export default router;
