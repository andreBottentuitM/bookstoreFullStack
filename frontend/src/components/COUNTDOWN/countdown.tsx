import {useState, useEffect} from 'react'
import '../COUNTDOWN/style.css'

export const Countdown = () => {

    const [deadline, setDeadline] = useState('aa')
    const [daysInterface, setDays] = useState(5)
    const [hoursInterface, setHours] = useState(13)
    const [minutesInterface, setMinutes] = useState(23)
    const [secondsInterface, setSeconds] = useState(45)
    const [promotion, setPromotion] = useState(true)
    const [circleDay, setCircleDay] = useState(0)
    const [circleHours, setCircleHours] = useState(0)
    const [circleMinutes, setCircleMinutes] = useState(0)
    const [circleSeconds, setCircleSeconds] = useState(0)

    const days = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
      ]
      
      const month = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ]

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()
const currentDay = currentDate.getDate()

const limitData = new Date(currentYear, currentMonth, currentDay + 5, 23, 59, 59)
const limitYear = limitData.getFullYear()
const limitHours = limitData.getHours()
const limitMinutes = limitData.getMinutes()
const limitDay = limitData.getDate()
let limitMonth = limitData.getMonth()
let limitMonthResult = month[limitMonth]

      useEffect(() => {
        setDeadline(limitDay >= 10 ? `até ${limitDay}/${limitMonthResult}/${limitYear}.` : `até 0${limitDay}/${limitMonthResult}/${limitYear}.`)

      }, [])

      const limitMilliseconds = limitData.getTime()

      useEffect(() => {
   const takeTime = () => {
    const currentDateMilliseconds = new Date().getTime()
    let timeLeft = limitMilliseconds - currentDateMilliseconds
  
    const dayInMilliseconds = 24 * 60 * 60 * 1000
    let daysRemaining = Math.floor(timeLeft / dayInMilliseconds)
  
    const hourInMilliseconds = 60 * 60 * 1000
    let hoursRemaining = Math.floor((timeLeft % dayInMilliseconds) / hourInMilliseconds)
  
    const minuteInMilliseconds = 60 * 1000
    let minutesRemaining = Math.floor((timeLeft % hourInMilliseconds) / minuteInMilliseconds)
  
    const secondInMilliseconds = 1000
    let secondsRemaining = Math.floor((timeLeft % minuteInMilliseconds) / secondInMilliseconds)
  
    
    setDays(daysRemaining)
    setHours(hoursRemaining)
    setMinutes(minutesRemaining)
    setSeconds(secondsRemaining)


   }
   setInterval(takeTime, 1000)
   
},[])

useEffect(() => {
    setCircleDay(440 - (440 * daysInterface) / 5)
    setCircleHours(220 - (220 * hoursInterface) / 24)
    setCircleMinutes(220 - (220 * minutesInterface) / 60)
    setCircleSeconds(220 - (220 * secondsInterface) / 60)
    
},[secondsInterface])


        
    return (
         <>
        {promotion && 
            <section className="container-one">
            <div className="closed" onClick={() => {setPromotion(false)}}>X</div>
            <article>
                <img className="image-book" src="/IMAGES/guerra_e_paz.jpg" alt="war and peace" />
            </article>
            <article className="container-two">
                <h1>PROMOÇÃO:</h1>
                <h2>Guerra e paz</h2>
                <p className="text" id="description">Guerra e Paz é uma das obras mais volumosas da literatura mundial e
                    narra a história da
                    Rússia no tempo das guerras napoleônicas. É um livro rico em detalhes e realismo. Livro que marcou a
                    literatura mundial!</p>
                <p className="text">Aproveite a promoção, ela é por tempo determinado: <span className="limit">{deadline}</span></p>
                <p className="price">POR APENAS: R$30.00</p>
                <div className="flex-countdown">
                    <div className="circle" >
                        <svg>
                            <circle cx="35" cy="35" r="35"></circle>
                            <circle cx="35" cy="35" r="35" style={{strokeDashoffset:circleDay}}></circle>
                        </svg>
                        <div><h3 className="day">{daysInterface}</h3><span>Dias</span></div>
                    </div>
                        <div className="circle">
                            <svg>
                                <circle cx="35" cy="35" r="35"></circle>
                                <circle cx="35" cy="35" r="35" style={{strokeDashoffset:circleHours}}></circle>
                            </svg>
                            <div> <h3 className="time">{hoursInterface}</h3><span>Horas</span></div>
                    </div>
                    <div className="circle" >
                        <svg>
                            <circle cx="35" cy="35" r="35"></circle>
                            <circle cx="35" cy="35" r="35" style={{strokeDashoffset:circleMinutes}}></circle>
                        </svg>
                        <div><h3 className="time">{minutesInterface}</h3><span>Minutos</span></div>
                    </div>
                    <div className="circle">
                        <svg>
                            <circle cx="35" cy="35" r="35"></circle>
                            <circle cx="35" cy="35" r="35" style={{strokeDashoffset:circleSeconds}}></circle>
                        </svg>
                        <div> <h3 className="time">{secondsInterface}</h3><span>Segundos</span></div>
                    </div>
                </div>
                
            </article>
        </section>
        }
        </>
        
    )
}