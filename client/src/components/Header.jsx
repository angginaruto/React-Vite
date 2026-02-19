function Header() {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src="/src/assets/icon.png" alt="Logo Angieneering" />
          <p>Angieneering</p>
        </div>

        <div className="section-container">
          <ul>
            <li><button>Home</button></li>
            <li><button>My App</button></li>
            <li><button>Service</button></li>
            <li><button>Contact</button></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
