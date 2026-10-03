
 import ClientComponent from '@/components/ClientComponent'


function ServerPage() {
    console.log('Rendered on Server')
  return (

    <div>Server Page
         <ClientComponent/>
    </div>
  )
}

export default ServerPage