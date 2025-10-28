class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 3rem 2rem;
          margin-top: auto;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-column h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-column li {
          margin-bottom: 0.75rem;
        }
        .footer-column a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-column a:hover {
          color: #ffffff;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #cbd5e1;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: #ffffff;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-column">
            <h3>Aqua Windows</h3>
            <p style="color: #94a3b8;">Профессиональный монтаж окон с 2010 года. Создайте свой идеальный дом с нами.</p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          <div class="footer-column">
            <h3>Компания</h3>
            <ul>
              <li><a href="/about.html">О нас</a></li>
              <li><a href="/team.html">Наша команда</a></li>
              <li><a href="/reviews.html">Отзывы</a></li>
              <li><a href="/contact.html">Контакты</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Услуги</h3>
            <ul>
              <li><a href="/constructor.html">Конструктор окон</a></li>
              <li><a href="/installation.html">Установка окон</a></li>
              <li><a href="/repair.html">Ремонт окон</a></li>
              <li><a href="/balcony.html">Остекление балконов</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Поддержка</h3>
            <ul>
              <li><a href="/faq.html">FAQ</a></li>
              <li><a href="/privacy.html">Политика конфиденциальности</a></li>
              <li><a href="/terms.html">Условия использования</a></li>
              <li><a href="/support.html">Техническая поддержка</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Aqua Windows Planner. Все права защищены.
        </div>
      </footer>
    `;

    // Инициализация иконок
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}

customElements.define('custom-footer', CustomFooter);