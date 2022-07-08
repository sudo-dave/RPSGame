from curses import curs_set
import sqlite3
import os
from typing import List, Tuple

DB_FILENAME = 'scores.db'


# Win streak
DB_SCHEMA = """
CREATE TABLE Scores (
    ID       INTEGER   PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    Username CHAR (15) NOT NULL,
    Wins     INT       NOT NULL
);"""

DB_DUMMY_DATA_QUERY = """
INSERT INTO Scores VALUES (NULL,"Dave",4), (NULL, "Jim",3), (NULL, "Johnny",23), (NULL, "Sudo",33), (NULL, "Joe",22)
"""


# add try exepct decarator


class Controller:
    conn = None

    def __init__(self):
        try:
            self.conn = sqlite3.connect(DB_FILENAME)
        except sqlite3.Error as er:
            print(er.message)

    def get_top_n_scores(self, n: int) -> List[Tuple[str, str]]:
        scores_username = []
        query = """SELECT Username, Wins from Scores ORDER BY Wins DESC LIMIT """ + \
            str(n)
        currsor = self.conn.execute(query)
        for row in currsor:
            scores_username.append((str(row[0]), str(row[1])))
        return scores_username

    def print_all(self) -> None:
        query = """SELECT * from Scores"""
        cursor = self.conn.execute(query)
        for row in cursor:
            print("Id: " + str(row[0]))
            print("user: " + str(row[1]))
            print("wins: " + str(row[2]) + "\n")

    @staticmethod
    def db_init() -> None:
        if os.path.isfile(DB_FILENAME):
            print('Db exsits')
            return
        try:
            conn = sqlite3.connect(DB_FILENAME)
            conn.execute(DB_SCHEMA)
            conn.execute(DB_DUMMY_DATA_QUERY)
            conn.commit()
        except sqlite3.Error as er:
            print(er.message)
