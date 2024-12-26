import { ClipLoader } from 'react-spinners'

const  override ={
  display:'block',
  margin:'100px auto'
}
const Loadericon = ({loading=true}) => {
  
  return (
    <ClipLoader color='#4336ca'
    loading ={loading}
    cssOverride={override}
    size = {150}
    >
    </ClipLoader>
  )
}

export default Loadericon
