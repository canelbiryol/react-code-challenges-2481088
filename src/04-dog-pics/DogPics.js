import { useEffect, useState } from "react"

const getDocPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}

export default function DogPics () {
  const [dogPic, setDogPic] = useState('');

  // API: https://dog.ceo/dog-api/
  useEffect(() => {
    getDocPic().then(pic => setDogPic(pic))
  }, [])
  return (
    <div className='dog-pics'>
      <img src={dogPic} alt='dog' />
      <button onClick={async e => setDogPic(await getDocPic())} >🐶</button>
    </div>
  )
}
