type PageWrapperProps = {
  children: React.ReactNode
  title: string
}

const PageWrapper = ({ children, title }: PageWrapperProps) => (
  <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-3">
    <h2 className="mb-6 text-center text-3xl font-semibold">{title}</h2>
    {children}
  </div>
)

export default PageWrapper
