const ProductCard = ({ books }) => {
    return (

        <div className="flex items-center justify-between gap-8 flex-wrap m-10  ">
            {books.map((item) => {
                const { title, description, image, discount, auther, price } = item;
                const { name, translator } = auther;
                return (
                    <div className="w-100 h-62.5 bg-[#eafccae3] shadow-lg shadow-[#2b2b2b]  rounded-[20px] p-6 mb-8" >
                        <div className="w-full flex ">
                            <div className="w-40 flex flex-col gap-4 text-right font-[vazir]  ">
                                <div>
                                    <h2 className="text-[#283618]  pb-1 font-bold text-xl ">{title}</h2>
                                    <h3 className="text-[#dda15e] text-sm">نویسنده : {name}</h3>
                                    <h3 className="text-[#dda15e] text-sm">مترجم : {translator}</h3>
                                </div>
                                <div className="text-right leading-6 text-[#41521f]">
                                    <p>{description}</p>
                                </div>
                            </div>

                        </div>


                        <div className="relative" >
                            <img className="w-38 absolute left-51 -bottom-7 rounded-[10px]" src={image} />
                            <span className=" absolute left-80 bottom-42 rounded-[20px] z-50 font-[vazir] text-emerald-50 font-bold h-10 w-14 leading-5  p-3 bg-[#e96107]">{discount}</span>

                            <div className="w-42 h-11 absolute bg-[#41521f] top-5 left-2 p-3 flex text-[#f1b671] font-bold rounded-xl  hover:bg-[#e96107] ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f1b671" class="size-6" className="mr-2 pr-2 border-r border-r-[#f1b671]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <a>{price}</a>
                            </div>

                        </div>
                    </div>

                )
            })

            }
        </div >
    )
};

export default ProductCard;