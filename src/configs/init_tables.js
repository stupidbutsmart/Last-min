const pool = require("./../services/db");

const sql = `
DROP TABLE IF EXISTS User
DROP TABLE IF EXISTS Reminders

CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
);

CREATE TABLE Reminders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  owner_id INT NOT NULL
  due_time TIMESTAMP NOT NULL 
);

INSERT INTO User VALUES
('Shen Lei'),
('Ethan'),
('Jerard'),
('Swam');
`;
