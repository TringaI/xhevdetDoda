import React from 'react'
import style from '../../../styles/Footer/footer.module.scss'
function Index() {
  return (
    <footer className={`mt-20 pb-10 ${style.footer}`}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor : 'white'}} viewBox="0 0 1440 320"><path  fill="rgb(29, 29, 29)" fill-opacity="1" d="M0,256L34.3,240C68.6,224,137,192,206,192C274.3,192,343,224,411,234.7C480,245,549,235,617,202.7C685.7,171,754,117,823,128C891.4,139,960,213,1029,213.3C1097.1,213,1166,139,1234,128C1302.9,117,1371,171,1406,197.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        <div className="w-full grid grid-cols-12 pl-20 mt-20">
          <div className="col-span-12 md:col-span-6 flex flex-col">
            <p className="text-white">Lakrishte, Rruga Xhevdet Doda</p>
            <p className="text-white">xhevdetdoda@gmail.com</p>
            <p className="text-white">00339399</p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-end pr-20">
            <img src="/pictures/logoMain2.png" className='w-[120px]' alt="" />
          </div>
        </div>
    </footer>
  )
}

export default Index