package handler

import (
    "net/http"
    "strconv"

    "github.com/gin-gonic/gin"
    "zabit-backend/internal/usecase"
)

type UserHandler struct {
    userUsecase usecase.UserUsecase
}

func NewUserHandler(userUsecase usecase.UserUsecase) *UserHandler {
    return &UserHandler{userUsecase: userUsecase}
}

func (h *UserHandler) GetUser(c *gin.Context) {
    idParam := c.Param("id")
    id, err := strconv.ParseInt(idParam, 10, 64)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "geçersiz kullanıcı id'si"})
        return
    }

    user, err := h.userUsecase.GetUserByID(id)
    if err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "kullanıcı bulunamadı"})
        return
    }
    c.JSON(http.StatusOK, user)
}
