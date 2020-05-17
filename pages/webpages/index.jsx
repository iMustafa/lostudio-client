import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../../components/page-builder'), {
  ssr: false
})

const Page = () => {
  return (
    <Editor />
  )
}

export default Page