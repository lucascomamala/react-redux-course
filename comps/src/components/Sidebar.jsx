import Link from "./Link";

const Sidebar = () => {
  const links = [
    { path: "/buttons", label: "Buttons" },
    { path: "/accordions", label: "Accordions" },
    { path: "/dropdowns", label: "Dropdowns" },
  ]

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.path} path={link.path}>
        {link.label}
      </Link>
    )
  })

  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col">
      {renderedLinks}
    </div>
  )
}

export default Sidebar
