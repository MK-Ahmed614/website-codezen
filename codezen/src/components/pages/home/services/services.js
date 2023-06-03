import { useTranslation } from 'react-i18next'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaWarehouse, FaAudioDescription, FaSlideshare, FaMobileAlt, FaLaptopCode} from 'react-icons/fa'
import'./services.scss';

const Servies = () => {
  const icons = [
    {
      id:1,
      icon:<FaLaptopCode />
    },
    {
      id:2,
      icon:<FaMobileAlt />
   
    },
    {
      id:3,
      icon:<HiOutlineLightBulb />
   
    },
    {
      id:4,
      icon:<FaWarehouse />
   
    },
    {
      id:5,
      icon:<FaSlideshare />
   
    },
    {
      id:6,
      icon:<FaAudioDescription />
   
    }

  ]
  const {t} = useTranslation()
  const servies = t('servies' ,{returnObjects:true})
  return (
<section className='servies'>
    <div className="container">
      
            <h1 className='text-center heda-center'> {t("servies_header")}</h1>
            <p className='text-center'>{t("servies_text")}</p>
            <div className="our-servies">
                <div className="row">
                {
                      servies.map((item) => {
                        const icon = icons.find((i) => i.id === item.id)
                        return (
                          <div key={item.id} className="col-6">
                          <div className="item">
                          <div className="gap">
                            <div className="row">
                            <div className="col-2">
                              <div className="icon">{icon && <span>{icon.icon}</span>}</div>
                              </div>
                              <div className="col-10">
                                <div className="content">
                                <h2> {item.header}</h2>
                                  <p>{item.text}</p>
                                </div>
                              </div>
                            </div>

                          </div>
                          </div>
                      
                      </div>
                        )
                      })
                    }
                </div>
               
            
            </div>
        
        </div>
    

 

</section>
  )
}

export default Servies