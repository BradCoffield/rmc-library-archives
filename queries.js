const { pool } = require("./config");

const getPersonalCollection = (request, response) => {
  console.log("oys");
  pool.query(
    "SELECT * FROM personalCollections ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getCollection = (request, response) => {
  console.log("oy");
  const name = request.params.name
  // console.log(req)
  pool.query(
    `SELECT * FROM ${name} ORDER BY id ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getPersonalCollectionById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM personalCollections WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createPersonalCollection = (request, response) => {
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
};

const updatePersonalCollection = (request, response) => {
  const id = parseInt(request.params.id);
  const { number, lastname, firstname } = request.body;

  pool.query(
    "UPDATE personalCollections SET number = $1, lastname = $2, firstname = $3 WHERE id = $4",
    [number, lastname, firstname, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deletePersonalCollection = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM personalCollections WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getPersonalCollection,
  getPersonalCollectionById,
  createPersonalCollection,
  updatePersonalCollection,
  deletePersonalCollection,
  getCollection
};
