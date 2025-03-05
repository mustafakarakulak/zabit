-- users tablosu oluşturma
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    user_class VARCHAR(100) NOT NULL
);

-- users tablosuna veri ekleme
INSERT INTO users (name, email, phone_number, password, user_class) VALUES
('John Doe', 'john@example.com', '1234567890', 'password123', 'admin');

-- users tablosunu sorgula
SELECT * FROM users;