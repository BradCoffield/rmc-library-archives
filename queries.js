const { pool } = require("./config");



const getCollection = (request, response) => {
  console.log("oy");
  const name = request.params.name;
  // console.log(req)
  pool.query(`SELECT * FROM ${name} ORDER BY id ASC`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCollectionItemById = (request, response) => {
  const id = parseInt(request.params.id);
  const name = request.params.name;

  pool.query(`SELECT * FROM ${name} WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
 
const addToCollection = (request, response) => {
  const name = request.params.name;

  if (name == "personalcollections") {
    const { number, lastname, firstname } = request.body;
    pool.query(
      "INSERT INTO personalCollections (number, lastname, firstname) VALUES ($1, $2, $3)",
      [number, lastname, firstname],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`Personal Collection added.`);
      }
    );
  }
  if (name == "historiccollections") {
    const { number, name, date, contents, subject } = request.body;
    pool.query(
      "INSERT INTO historiccollections (number, name, date, contents, subject) VALUES ($1, $2, $3, $4, $5)",
      [number, name, date, contents, subject],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`Historic Collection added.`);
      }
    );
  }
  if (name == "collegepublications") {
    const { number, school, contents, date, notes } = request.body;
    pool.query(
      "INSERT INTO collegepublications (number, school, contents, date, notes) VALUES ($1, $2, $3, $4, $5)",
      [number, school, contents, date, notes],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`College Publication added.`);
      }
    );
  }
  if (name == "photos") {
    const {
      filelocation,
      filename,
      date,
      institution,
      subject1,
      subject2,
      subject3,
      subject4,
      subject5,
      subject6,
      subject7,
      subject8,
      notes
    } = request.body;
    pool.query(
      "INSERT INTO photos (filelocation, filename, date, institution, subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        filelocation,
        filename,
        date,
        institution,
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
        subject6,
        subject7,
        subject8,
        notes
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`College Publication added.`);
      }
    );
  } else {
    console.log("nah bruh");
    response.status(201).send(`No table by that name.`);
  }
};
 
const updateCollectionItem = (request, response) => {
  const id = parseInt(request.params.id);
  const name = request.params.name;

  if (name == "personalcollections") {
    const { number, lastname, firstname } = request.body;
    pool.query(
      "UPDATE personalCollections SET number = $1, lastname = $2, firstname = $3 WHERE id = $4",
      [number, lastname, firstname, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`Personal Collection ${id} updated.`);
      }
    );
  }
  if (name == "historiccollections") {
    const { number, name, date, contents, subject } = request.body;
    pool.query(
      "UPDATE historiccollections SET number = $1, name = $2, date = $3, contents = $4, subject = $5 WHERE id = $6",
      [number, name, date, contents, subject, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`Historic Collection ${id} updated.`);
      }
    );
  }
  if (name == "collegepublications") {
    const { number, school, contents, date, notes } = request.body;
    pool.query(
      "UPDATE collegepublications SET number = $1, school = $2, contents = $3, date = $4, notes = $5 WHERE id = $6",
      [number, school, contents, date, notes, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`College Publication ${id} updated.`);
      }
    );
  }
  if (name == "photos") {
    const {
      filelocation,
      filename,
      date,
      institution,
      subject1,
      subject2,
      subject3,
      subject4,
      subject5,
      subject6,
      subject7,
      subject8,
      notes
    } = request.body;
    pool.query(
      "UPDATE photos SET filelocation = $1, filename = $2, date = $3, institution = $4, subject1 = $5, subject2 = $6, subject3 = $7, subject4 = $8, subject5 = $9, subject6 = $10, subject7 = $11, subject8 = $12, notes = $13 WHERE id = $14",
      [
        filelocation,
        filename,
        date,
        institution,
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
        subject6,
        subject7,
        subject8,
        notes, id
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).send(`Photo ${id} updated.`);
      }
    );
  } else {
    console.log("nah bruh");
    response.status(201).send(`No table by that name.`);
  }
};

const deleteCollectionItem = (request, response) => {
  const id = parseInt(request.params.id);
  const name = request.params.name;

  pool.query(`DELETE FROM ${name} WHERE id = $1`, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Item deleted from ${name} with ID: ${id}`);
  });
};

module.exports = {
  getCollection,
  getCollectionItemById,
  addToCollection,
  deleteCollectionItem,
  updateCollectionItem,
  
};
