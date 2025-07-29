import "./MainContent.css"

export function MainContent() {
  return (
    <main className="main">
      <h1 className="main-title">Fun facts about React</h1>
      <img src="Group.svg" className="main-image" alt="React background" />
      <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}
