import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'http://gram-cruncher.herokuapp.com/v1/graphql',
    headers: {
      'x-hasura-admin-secret':  process.env.HASURA_ADMIN_KEY
    }
  })
}

export default withData(config)
