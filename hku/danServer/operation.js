const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);

  coll.insert(document, (error, result) => {
    assert.equal(error, null);
    console.log(`Inserted ${result.result.n} 
                documents into the collection ${collection}`);
    callback(result);
  });

};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);

  coll.find({}).toArray((error, docs) => {
    assert.equal(error, null);
    callback(docs);
  })

};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);

  coll.deleteOne(document, (error, result) => {
    assert.equal(error, null);

    console.log(`Removed the document ${document}`);
    callback(result);
  })
};

exports.updateDocuments = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
  coll.updateOne(document, {
    $set: update
  }, null, (error, result) => {
    assert.equal(error, null);
    console.log(`Update the document with ${update}`);
    callback(result);
  });
};