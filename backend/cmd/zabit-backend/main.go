package main

import (
    "log"
    "zabit-backend/internal/config"
    "zabit-backend/internal/handler"
    "zabit-backend/internal/infrastructure"
    "zabit-backend/internal/repository"
    "zabit-backend/internal/usecase"

    "github.com/gin-gonic/gin"
)

func main() {
    // Konfigürasyonu yükle
    cfg, err := config.LoadConfig()
    if err != nil {
        log.Fatalf("config yüklenemedi: %v", err)
    }

    // PostgreSQL bağlantısını kur
    db, err := infrastructure.NewPostgresDB(cfg)
    if err != nil {
        log.Fatalf("veritabanına bağlanılamadı: %v", err)
    }
    defer db.Close()

    // Repository, usecase ve handler'ı başlat
    userRepo := repository.NewUserRepository(db)
    userUsecase := usecase.NewUserUsecase(userRepo)
    userHandler := handler.NewUserHandler(userUsecase)

    // Gin router'ı başlat
    router := gin.Default()

    // Route tanımlamaları
    router.GET("/users/:id", userHandler.GetUser)

    // Uygulamayı çalıştır (cfg.ServerPort, config üzerinden okunuyor)
    if err := router.Run(":" + cfg.ServerPort); err != nil {
        log.Fatalf("sunucu başlatılamadı: %v", err)
    }
}
