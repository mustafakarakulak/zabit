package repository

import (
    "database/sql"
    "zabit-backend/internal/domain"
)

type UserRepository interface {
    FetchByID(id int64) (*domain.User, error)
    InsertUser(user domain.User) error
    // ... diğer metodlar
}

type userRepository struct {
    DB *sql.DB
}

func NewUserRepository(db *sql.DB) UserRepository {
    return &userRepository{DB: db}
}

// Mevcut metod (örnek):
func (r *userRepository) FetchByID(id int64) (*domain.User, error) {
    var user domain.User
    query := "SELECT id, name, email, phone_number, password, user_class FROM users WHERE id = $1"
    err := r.DB.QueryRow(query, id).Scan(
        &user.ID, 
        &user.Name, 
        &user.Email, 
        &user.PhoneNumber, 
        &user.Password,
        &user.UserClass,
    )
    if err != nil {
        return nil, err
    }
    return &user, nil
}

// Yeni eklenen metod (InsertUser)
func (r *userRepository) InsertUser(user domain.User) error {
    query := `
        INSERT INTO users (name, email, phone_number, password, user_class)
        VALUES ($1, $2, $3, $4, $5)
    `
    _, err := r.DB.Exec(query, user.Name, user.Email, user.PhoneNumber, user.Password, user.UserClass)
    return err
}
