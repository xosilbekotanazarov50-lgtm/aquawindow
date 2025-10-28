class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: white;
          text-decoration: none;
          transition: opacity 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        a:hover {
          opacity: 0.9;
        }
        .nav-icon {
          width: 1.1rem;
          height: 1.1rem;
        }
        .user-menu {
          position: relative;
        }
        .user-menu-content {
          display: none;
          position: absolute;
          right: 0;
          background: white;
          min-width: 200px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          overflow: hidden;
          z-index: 10;
        }
        .user-menu:hover .user-menu-content {
          display: block;
        }
        .user-menu-item {
          color: #333;
          padding: 0.75rem 1rem;
          display: block;
          transition: background 0.2s;
        }
        .user-menu-item:hover {
          background: #f5f5f5;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #2563eb;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="home" class="logo-icon"></i>
          Aqua Windows
        </a>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul>
          <li><a href="/constructor.html"><i data-feather="layout" class="nav-icon"></i> Конструктор</a></li>
          <li><a href="/catalog.html"><i data-feather="box" class="nav-icon"></i> Каталог</a></li>
          <li><a href="/orders.html"><i data-feather="list" class="nav-icon"></i> Мои заказы</a></li>
          
          <li class="user-menu">
            <a href="#"><i data-feather="user" class="nav-icon"></i> Профиль</a>
            <div class="user-menu-content">
              <a href="/profile.html" class="user-menu-item"><i data-feather="user"></i> Мой профиль</a>
              <a href="/settings.html" class="user-menu-item"><i data-feather="settings"></i> Настройки</a>
              <a href="#" id="logout-btn" class="user-menu-item"><i data-feather="log-out"></i> Выйти</a>
            </div>
          </li>
        </ul>
      </nav>
      
      <div class="mobile-menu hidden">
        <a href="/constructor.html" class="flex items-center gap-2 text-white"><i data-feather="layout"></i> Конструктор</a>
        <a href="/catalog.html" class="flex items-center gap-2 text-white"><i data-feather="box"></i> Каталог</a>
        <a href="/orders.html" class="flex items-center gap-2 text-white"><i data-feather="list"></i> Мои заказы</a>
        <a href="/profile.html" class="flex items-center gap-2 text-white"><i data-feather="user"></i> Профиль</a>
        <a href="#" id="mobile-logout-btn" class="flex items-center gap-2 text-white"><i data-feather="log-out"></i> Выйти</a>
      </div>
    `;

    // Инициализация иконок
    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    // Обработчик мобильного меню
    this.shadowRoot.querySelector('.mobile-menu-btn').addEventListener('click', () => {
      const menu = this.shadowRoot.querySelector('.mobile-menu');
      menu.classList.toggle('hidden');
    });

    // Обработчик выхода
    this.shadowRoot.getElementById('logout-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login.html';
    });

    this.shadowRoot.getElementById('mobile-logout-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login.html';
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);