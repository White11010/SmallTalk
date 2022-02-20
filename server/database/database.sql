create TABLE users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(20),
    password VARCHAR(20),
    UNIQUE (login)
);