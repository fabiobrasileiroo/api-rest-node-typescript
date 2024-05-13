// import '../.env'
import { server } from './server/Server'

server.listen(process.env.PORT || 3333, () => { 
  console.log(`App is running on port ${process.env.PORT || 3333}`)
})