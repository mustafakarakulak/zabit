package usecase

import (
    "errors"
    "zabit-backend/internal/domain"
    "zabit-backend/internal/repository"
)

type UserUsecase interface {
    GetUserByID(id int64) (*domain.User, error)
}

type userUsecase struct {
    userRepo repository.UserRepository
}

func NewUserUsecase(userRepo repository.UserRepository) UserUsecase {
    return &userUsecase{userRepo: userRepo}
}

func (u *userUsecase) GetUserByID(id int64) (*domain.User, error) {
    user, err := u.userRepo.FetchByID(id)
    if err != nil {
        return nil, errors.New("kullanıcı bulunamadı")
    }
    return user, nil
}
