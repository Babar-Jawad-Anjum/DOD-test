export const Footer = () => {
  return (
    <footer className="flex justify-between flex-col md:flex-row text-center items-center bg-white px-20 py-3 text-sm">
      <span>© 2023 DermOnDemand. All rights reserved.</span>

      <ul className="flex flex-col sm:flex-row text-center space-y-1 sm:space-y-0 sm:space-x-3 mt-4 md:mt-0">
        <li>Term of Use</li>
        <li>Privacy Policy</li>
        <li>Consent</li>
      </ul>
    </footer>
  )
}
