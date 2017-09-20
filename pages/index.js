import Head from '../components/head'
import Nav from '../components/nav'
import NoSSR from 'react-no-ssr';
import WistiaEmbed from '../components/wistia_embed'

export default () => (
  <div>
    <Head title="Home" />
    <Nav />

    <NoSSR>
      <WistiaEmbed hashedId="zpsphqn6da" />
    </NoSSR>

  </div>
)
