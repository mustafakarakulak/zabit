package config

import (
    "github.com/spf13/viper"
)

type Config struct {
    ServerPort string `mapstructure:"server_port"`
    DBHost     string `mapstructure:"db_host"`
    DBPort     string `mapstructure:"db_port"`
    DBUser     string `mapstructure:"db_user"`
    DBPassword string `mapstructure:"db_password"`
    DBName     string `mapstructure:"db_name"`
}

func LoadConfig() (Config, error) {
    var cfg Config
    viper.SetConfigName("config")
    viper.SetConfigType("yaml")
    viper.AddConfigPath("./internal/config")
    viper.AutomaticEnv()

    if err := viper.ReadInConfig(); err != nil {
        return cfg, err
    }
    if err := viper.Unmarshal(&cfg); err != nil {
        return cfg, err
    }
    return cfg, nil
}
