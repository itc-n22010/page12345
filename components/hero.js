import Link from 'next/link'
export default function Hero () {
  return (
    <div>
      <h1> top </h1>
      <nav>
        <ul>
          <li>
            <Link legacyBehavior href='page1'><a>page1</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page2'><a>page2</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page3'><a>page3</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page4'><a>page4</a></Link>
          </li>
          <li>
            <Link legacyBehavior href='page5'><a>page5</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
