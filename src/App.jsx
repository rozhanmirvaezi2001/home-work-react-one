
import './App.css'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'


function App() {

  const books = [
    {
      id: 1,
      title: " سه شنبه گذشت",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330.png",
      discount: "%20",
      off:true,
      auther: {
        name: "نیکی فرنچ"
        , translator: "فرزام صالحی"
      },
      price: "230،000 تومان",
    },

    {
      id: 2,
      title: " دیزی دارکر",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330 (1).png",
      discount: "%0",
       off:false,
      auther: {
        name: "آلیس فینی"
        , translator: "سونیا سینگ"
      },
      price: "310،000 تومان",
    },

    {
      id: 3,
      title: " نجواگر",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330 (2).png",
      discount: "%20",
       off:true,
      auther: {
        name: "الکس نورث"
        , translator: "میلاد بابانژاد"
      },
      price: "990،000 تومان",
    },

    {
      id: 4,
      title: "لاشه لطیف ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330 (3).png",
      discount: "%0",
       off:false,
      auther: {
        name: "باستریکا"

        , translator: "سحر قدیمی"

      },
      price: "617،500 تومان",
    },

    {
      id: 5,
      title: " پرونده هری کبر",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330 (4).png",
      discount: "%20",
       off:true,
      auther: {
        name: "ژوئل دیکر"
        , translator: "آریا نوری"
      },
      price: "975،000 تومان",
    },

    {
      id: 6,
      title: "پرونده های راکد ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330 (5).png",
      discount: "%0",
       off:false,
      auther: {
        name: "سایمون جیمز"
        , translator: "یاسمن ثانوی"
      },
      price: "329،000 تومان",
    },

    {
      id: 7,
      title: "بنداعدامی‌ها ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/225x330 (7).png",
      discount: "%0",
       off:false,
      auther: {
        name: "فریدامک فادن"
        , translator: " رحمانی نژاد"

      },
      price: "390،000 تومان",
    },

    {
      id: 8,
      title: "هیچوقت دروغ نگو",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perferendis.",
      image: "public/image/8.png",
      discount: "%20",
       off:true,
      auther: {
        name: "فریدامک فادن"

        , translator: "صباایمانی "

      },
      price: "890،000 تومان",
    },

    {
      id: 9,
      title: "مزاحم نشوید ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ducimus.",
      image: "public/image/9.png",
      discount: "%0",
       off:false,
      auther: {
        name: "فریدامک فادن"

        , translator: " رحمانی نژاد"

      },
      price: "699،000 تومان",
    },

  
  ]

  return (
    <>
      <Header />
      <ProductCard books={books} />
      <Footer />
    </>
  )
}

export default App
