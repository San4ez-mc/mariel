# 🌸 Marianelle - Дім Душі Маріель Славської

<div align="center">

![Marianelle Logo](https://via.placeholder.com/800x200/FBE5F3/9F1239?text=Marianelle+🌸)

**Лендінг для жіночого клубу з інтеграцією платежів, email розсилкою та адмін-панеллю**

[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)](https://www.mysql.com/)

[🚀 Швидкий старт](#швидкий-старт) | [🐛 Issues](https://github.com/San4ez-mc/mariel/issues)

</div>

---

## ✨ Особливості

### 🎨 Frontend
- ⚡ **Vite + React 18** - швидка розробка з Hot Module Replacement
- 🎯 **TypeScript** - типобезпека та автодоповнення
- 🎨 **Tailwind CSS v4** - сучасний utility-first CSS
- 🌈 **Feminine дизайн** - powder pink/white/black палітра
- 📱 **Responsive** - адаптивний на всіх пристроях
- ♿ **Accessible** - доступність для всіх користувачів
- 🎭 **Motion animations** - плавні анімації з Motion

### 🔧 Backend
- 🚀 **Node.js + Express** - швидкий RESTful API
- 💾 **MySQL** - надійна реляційна база даних
- 💳 **WayForPay** - інтеграція платіжної системи
- 📱 **Telegram Bot** - миттєві сповіщення
- 📧 **Email розсилка** - автоматичні листи через SMTP
- 🔐 **Безпека** - валідація, CORS, підписи
- 📊 **Логування** - детальні логи всіх операцій

### 🎯 Основний функціонал
- ✅ Приймання заявок з форми
- ✅ Збереження в MySQL базу даних
- ✅ UTM трекінг та аналітика
- ✅ Інтеграція з WayForPay для прийому платежів
- ✅ Telegram сповіщення про нові заявки та оплати
- ✅ Email розсилка з welcome листами
- ✅ Адмін-панель для перегляду заявок
- ✅ Таймер зворотного відліку (щоденне оновлення)
- ✅ Динамічна ціна (550 грн замість 1200 грн)

---

## 🚀 Швидкий старт

### Передумови
- Node.js >= 18.x
- MySQL >= 8.0
- npm або pnpm

### 1. Клонування репозиторію

```bash
git clone https://github.com/San4ez-mc/mariel.git
cd mariel
```

### 2. Встановлення залежностей

```bash
# Frontend
npm install

# Backend
cd backend
npm install
cd ..
```

### 3. Налаштування змінних оточення

```bash
# Frontend
cp .env.example .env

# Backend
cp backend/.env.example backend/.env
```

Відредагуйте `.env` файли та додайте свої ключі.

### 4. Створення бази даних

```bash
mysql -u root -p < backend/database/schema.sql
```

### 5. Запуск

```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
cd backend
npm run dev
```

Відкрийте http://localhost:5173 в браузері 🎉

---

## 💻 Структура проекту

```
marianelle-landing/
├── backend/                    # Backend API (Node.js + Express)
│   ├── config/
│   │   └── database.js        # MySQL connection
│   ├── controllers/
│   │   ├── applicationController.js
│   │   └── paymentController.js
│   ├── routes/
│   │   ├── applications.js
│   │   └── payment.js
│   ├── utils/
│   │   ├── telegram.js        # Telegram integration
│   │   ├── email.js           # Email service
│   │   └── wayforpay.js       # WayForPay helpers
│   ├── database/
│   │   └── schema.sql         # Database schema
│   ├── .env.example
│   ├── server.js              # Main server file
│   └── package.json
│
├── src/                       # Frontend source (React + TypeScript)
│   ├── app/
│   │   ├── components/        # React components
│   │   └── App.tsx           # Main App with routes
│   ├── pages/                # Page components
│   ├── utils/
│   │   └── api.ts            # API utilities
│   ├── styles/
│   │   ├── theme.css         # Design tokens
│   │   ├── fonts.css
│   │   └── tailwind.css
│   └── main.tsx              # Entry point
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── README.md
```

---

## ⚙️ Конфігурація

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000/api
VITE_WFP_MERCHANT_ACCOUNT=your_merchant_account
VITE_TELEGRAM_GROUP_URL=https://t.me/marianelle_club
VITE_PRODUCT_PRICE=550
VITE_PRODUCT_REGULAR_PRICE=1200
```

### Backend (backend/.env)

```env
# Database
DB_HOST=localhost
DB_NAME=marianelle_db
DB_USER=root
DB_PASSWORD=your_password

# WayForPay
WFP_MERCHANT_ACCOUNT=your_merchant_account
WFP_MERCHANT_SECRET_KEY=your_secret_key
WFP_MERCHANT_DOMAIN=yourdomain.com

# Telegram
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your_app_password
```

---

## 🛠️ Технології

### Frontend
- [React 18.3](https://react.dev/) - UI library
- [TypeScript 5.6](https://www.typescriptlang.org/) - Type safety
- [Vite 6.0](https://vite.dev/) - Build tool
- [Tailwind CSS 4.0](https://tailwindcss.com/) - Styling
- [React Router 7.1](https://reactrouter.com/) - Routing
- [Lucide React](https://lucide.dev/) - Icons
- [Motion](https://motion.dev/) - Animations

### Backend
- [Node.js 18+](https://nodejs.org/) - Runtime
- [Express 4.18](https://expressjs.com/) - Web framework
- [MySQL 8.0](https://www.mysql.com/) - Database
- [Nodemailer 6.9](https://nodemailer.com/) - Email
- [Axios](https://axios-http.com/) - HTTP client

### Integrations
- [WayForPay](https://wayforpay.com/) - Payment gateway
- [Telegram Bot API](https://core.telegram.org/bots/api) - Notifications
- SMTP (Gmail) - Email delivery

---

## 📝 Ліцензія

Цей проект під ліцензією MIT

---

## 👥 Автори

- **Маріель Славська** - *Ідея та контент* - [Telegram](https://t.me/marianelle_club)

---

## 📞 Підтримка

- 🐛 Знайшли баг? [Створіть issue](https://github.com/San4ez-mc/mariel/issues)
- 💡 Є ідея? [Запропонуйте feature](https://github.com/San4ez-mc/mariel/issues/new)
- 💬 Питання? [Telegram](https://t.me/marianelle_club)

---

<div align="center">

**Зроблено з 💗 для клубу Marianelle**

[⬆ Повернутись до початку](#-marianelle---дім-душі-маріель-славської)

</div>