import { Db } from 'mongodb';

module.exports = {
  async up(db: Db) {
    // Create unique index for user's email
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
  },
};
