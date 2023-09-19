import Link from "./Link";

const Sidebar = () => {
  const links = [
    { path: "/buttons", label: "Buttons" },
    { path: "/accordions", label: "Accordions" },
    { path: "/dropdowns", label: "Dropdowns" },
    { path: "/modals", label: "Modals" },
    { path: "/tables", label: "Tables" },
  ]

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.path} path={link.path} className={'mb-3'} activeClassname={'font-bold border-l-4 border-blue-500 pl-2'}>
        {link.label}
      </Link>
    )
  })

  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
      {renderedLinks}
    </div>
  )
}

export default Sidebar
