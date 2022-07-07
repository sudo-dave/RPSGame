import sqlite3
import os

DB_FILENAME = 'scores.db'


DB_SCHEMA = """
CREATE TABLE Scores (
    ID       INTEGER   PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    Username CHAR (15) NOT NULL,
    Wins     INT       NOT NULL
);"""

DB_DUMMY_INSERT = """
INSERT INTO Scores VALUES (NULL,"Dave",4), (NULL, "Jim",3)
 """

DB_SELECT_ALL = """
SELECT * from Scores
"""


class Controller:

    def __init__(self):
        print("asd")

    @staticmethod
    def DB_Init():
        if os.path.isfile(DB_FILENAME):
            print('Db exsits')
            conn = sqlite3.connect(DB_FILENAME)
            cursor = conn.execute(DB_SELECT_ALL)
            for row in cursor:
                print("id: " + str(row[0]))
                print("user: " + str(row[1]))
                print("wins: " + str(row[2]) + "\n"),

            return
        try:
            conn = sqlite3.connect(DB_FILENAME)
            conn.execute(DB_SCHEMA)
            conn.execute(DB_DUMMY_INSERT)
            conn.commit()
        except sqlite3.Error as er:
            print(er.message)
