import { jwtDecode } from 'jwt-decode'

function GoogleCallback() {
  console.log('asdasdasdasdsa')
  const { hash } = window.location

  if (hash) {
    const parameters = new URLSearchParams(hash.slice(1))
    const token = parameters.get('access_token')

    if (token) {
      const decodedToken = jwtDecode(token)
      return <b> Hello {JSON.stringify(decodedToken)}</b>
    }
  }
  window.open('https://pshrrdazlftosdtoevpf.supabase.co/auth/v1/authorize?provider=google', '_blank', 'height=500,width=500');
}

export default GoogleCallback
