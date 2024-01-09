import { jwtDecode } from 'jwt-decode'

function GoogleCallback() {
  const { hash } = window.location

  if (hash) {
    const parameters = new URLSearchParams(hash.slice(1))
    const token = parameters.get('access_token')

    if (token) {
      const decodedToken = jwtDecode(token)
      return <b> Hello {JSON.stringify(decodedToken)}</b>
    }
  }
  window.location.assign('https://pshrrdazlftosdtoevpf.supabase.co/auth/v1/authorize?provider=google')
}

export default GoogleCallback
