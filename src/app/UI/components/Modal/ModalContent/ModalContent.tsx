type ModalContentProps = {
  children: React.ReactNode
}

const ModalContent = ({ children }: ModalContentProps) => (
  <section className="px-4 py-2 lg:gap-4 lg:px-6 lg:py-4">{children}</section>
)

export default ModalContent
