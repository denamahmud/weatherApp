import { AiFillCloud } from 'react-icons/ai'
import { MdSunny } from 'react-icons/md'
import { BsFillCloudRainHeavyFill } from 'react-icons/bs'

function Content({data }) {

  const query = localStorage.getItem('query')
  return (
    < >
       {(typeof data.main != "undefined") ? (
          <div className=' flex-col text-center w-10/12 mx-auto items-center justify-center text-white py-32'>
            <div className='text-3xl'>{query}</div>
            <div className=' text-8xl my-20 grid grid-cols-1 tablet:grid-cols-3  w-full'>
                <div className='animation-icon tablet:flex justify-center hidden' >
                   {
                    ((data.main.temp >= 20 && data.main.temp <= 30) ? <AiFillCloud size={130}/> : (data.main.temp > 30) ? <MdSunny size={130}/> : (data.main.temp < 19) ? <BsFillCloudRainHeavyFill size={130}/>  : '') 
                  }
                  
                </div> 
                <div className='my-10 tablet:my-0'> 
                  {Math.round(data.main.temp)}°c
                </div>
                <div className='animation-icon tablet:flex flex justify-center items-center'>
                  {
                    ((data.main.temp >= 20 && data.main.temp <= 30) ? <AiFillCloud size={130}/> : (data.main.temp > 30) ? <MdSunny size={130}/> : (data.main.temp < 19) ? <BsFillCloudRainHeavyFill size={130}/>  : '') 
                  }
                </div>
            </div> 
            {
                ((data.main.temp >= 20 && data.main.temp <= 30) ? <div className='text-3xl'>Cloudy</div> : (data.main.temp > 30) ? <div className='text-3xl'>Sunny</div> : (data.main.temp < 19) ? <div className='text-3xl'>Rainy</div>  : '') 
            }
        
        </div>
        ) : (
        <div className='text-center py-52 text-white tablet:text-5xl text-2xl'>
             What is weather today ?
        </div>
        )}
       

     </>
  )
}

export default Content