type ModalFooterProps = {
  children: React.ReactNode
}

const ModalFooter = ({ children }: ModalFooterProps) => (
  <footer className="border-t px-4 lg:px-6 py-2 lg:py-4 flex gap-2 lg:gap-4">
    {children}
  </footer>
)

export default ModalFooter
