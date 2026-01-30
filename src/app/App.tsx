import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { ThankYouPage } from '@/pages/ThankYouPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { PaymentCallbackPage } from '@/pages/PaymentCallbackPage';
import { AdminApplicationsPage } from '@/pages/AdminApplicationsPage';
import '@/styles/carousel.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Головна сторінка */}
        <Route path="/" element={<HomePage />} />
        
        {/* Сторінка подяки після успішної оплати */}
        <Route path="/thank-you" element={<ThankYouPage />} />
        
        {/* Сторінка помилки оплати */}
        <Route path="/error" element={<ErrorPage />} />
        
        {/* Callback від WayForPay */}
        <Route path="/payment/callback" element={<PaymentCallbackPage />} />
        
        {/* Адмін-панель (тільки для адміністраторів) */}
        <Route path="/admin/applications" element={<AdminApplicationsPage />} />
        
        {/* 404 - перенаправлення на головну */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}