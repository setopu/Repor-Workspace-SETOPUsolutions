-- =============================================
-- Base de datos SETOPU solutions
-- =============================================

CREATE DATABASE IF NOT EXISTS setopu_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE setopu_db;

-- ---------------------------------------------
-- 1. Tabla de usuarios
-- ---------------------------------------------
CREATE TABLE users (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario       VARCHAR(50)  NOT NULL UNIQUE,
  contrasena    VARCHAR(255) NOT NULL,
  email         VARCHAR(120) DEFAULT NULL,
  nombre        VARCHAR(100) DEFAULT NULL,
  rol           ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  activo        TINYINT(1)   NOT NULL DEFAULT 1,
  created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ---------------------------------------------
-- 2. Tabla de mensajes de contacto

-- ---------------------------------------------
CREATE TABLE mensajes_contacto (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id       INT UNSIGNED DEFAULT NULL,          -- puede ser NULL (mensaje anónimo)
  nombre        VARCHAR(100) NOT NULL,
  email         VARCHAR(120) NOT NULL,
  asunto        VARCHAR(200) DEFAULT NULL,
  mensaje       TEXT         NOT NULL,
  leido         TINYINT(1)   NOT NULL DEFAULT 0,
  created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,

  -- Relación (clave foránea)
  CONSTRAINT fk_mensaje_usuario
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Índices
CREATE INDEX idx_users_usuario ON users(usuario);
CREATE INDEX idx_mensajes_user ON mensajes_contacto(user_id);
CREATE INDEX idx_mensajes_leido ON mensajes_contacto(leido);
