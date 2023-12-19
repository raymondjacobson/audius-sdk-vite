import { useCallback } from 'react'
import './App.css'

import { sdk } from "@audius/sdk";

const apiKey = '66507943673a786261bd1b79b75e4cf44437991b'
const apiSecret = '2b38f2d2c2bb309772a358e4c794bbb2cd25448281a01cc48869016053a54347'

const audiusSdk = sdk({
  apiKey,
  apiSecret,
});

function App() {
  const repost = useCallback(async () => {
    const userId = (
      await audiusSdk.users.getUserByHandle({
        handle: "KaleidoscopeQuasarCandelabra",
      })
    ).data?.id;
    const track = await audiusSdk.tracks.favoriteTrack({
      trackId: "D7KyD",
      userId,
    });
    console.log(track)
  }, [])

  return (
    <button onClick={repost}>
      Button
    </button>
  )
}

export default App
