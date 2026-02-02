<?php
/**
 * Marianelle Backend API - Entry Point
 * PHP Backend для лендінгу жіночого клубу «Marianelle»
 */

// Налаштування помилок (для development)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Включення helpers
require_once __DIR__ . '/utils/helpers.php';

// CORS
setCORSHeaders();

// Маршрутизація
$requestUri = $_SERVER['REQUEST_URI'];
$requestPath = parse_url($requestUri, PHP_URL_PATH);

// Видаляємо base path якщо backend у підпапці
$basePath = '/backend-php';
if (strpos($requestPath, $basePath) === 0) {
    $requestPath = substr($requestPath, strlen($basePath));
}

// API роути
if (strpos($requestPath, '/api/applications') === 0) {
    require __DIR__ . '/api/applications.php';
}
elseif (strpos($requestPath, '/api/payment') === 0) {
    require __DIR__ . '/api/payment.php';
}
elseif (strpos($requestPath, '/api/admin') === 0) {
    require __DIR__ . '/api/admin.php';
}
elseif (strpos($requestPath, '/api/telegram-test') === 0 || strpos($requestPath, '/api/telegram-test.php') === 0) {
    require __DIR__ . '/api/telegram-test.php';
}
elseif ($requestPath === '/health' || $requestPath === '/api/health') {
    // Health check endpoint
    sendJSON([
        'status' => 'ok',
        'timestamp' => date('c'),
        'service' => 'Marianelle Backend API',
        'version' => '1.0.0'
    ]);
}
elseif ($requestPath === '/' || $requestPath === '') {
    // Головна сторінка API
    sendJSON([
        'message' => 'Marianelle Backend API',
        'version' => '1.0.0',
        'endpoints' => [
            'POST /api/applications' => 'Створити заявку',
            'GET /api/applications' => 'Всі заявки',
            'GET /api/applications?orderReference=XXX' => 'Заявка за номером',
            'POST /api/payment?action=form' => 'Генерація форми оплати',
            'POST /api/payment?action=callback' => 'WayForPay callback',
            'GET /api/admin?action=stats' => 'Статистика',
            'GET /api/admin?action=applications' => 'Заявки для адмінки',
            'GET /api/admin?action=payments' => 'Платежі',
            'GET /api/admin?action=clients' => 'Клієнти',
            'GET /api/telegram-test.php?action=test' => 'Тест Telegram сповіщень',
            'GET /health' => 'Health check'
        ],
        'telegram_tests' => [
            '/api/telegram-test.php?action=test' => 'Тестове повідомлення',
            '/api/telegram-test.php?action=report' => 'Щоденний звіт',
            '/api/telegram-test.php?action=newapp' => 'Симуляція заявки',
            '/api/telegram-test.php?action=payment' => 'Симуляція оплати',
            '/api/telegram-test.php?action=buttons' => 'Повідомлення з кнопками'
        ]
    ]);
}
else {
    // 404
    http_response_code(404);
    sendJSON([
        'success' => false,
        'error' => 'Endpoint not found',
        'path' => $requestPath
    ], 404);
}