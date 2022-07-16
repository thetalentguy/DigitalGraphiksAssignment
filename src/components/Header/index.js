import React, { useEffect, useState } from 'react'
import { AiFillCaretDown, AiOutlineMenu, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai"
import { IoHomeOutline } from "react-icons/io5"
const Header = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false)
    const openMenu = () => {

        setisMenuOpen(!isMenuOpen)
        console.log("fired")

    }
    const closeMenu = () => {

        setisMenuOpen(!isMenuOpen)
        console.log("fired")

    }

    const navItems = [
        { name: "Brands" },
        {
            name: "Fishing",
            category: [
                {
                    name: "King Fish Special",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Fishing Reels",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Fishing Rods",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Combos",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Fishing Lines",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Fishing Lure",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Terminal Tackle",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
                {
                    name: "Fishing Accessories",
                    category: [
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                        { name: "category name" },
                    ]
                },
            ]
        },
        { name: "Marine" },
        { name: "Fishing" },
        { name: "Diving & Spearfishing" },
        { name: "Apparel" },
        { name: "Water Sports" },
        { name: "Camping" }
    ]

    const [isShowingLang, setisShowingLang] = useState(false)
    const showLang = () => {

        setisShowingLang(true)

    }


    const hideLang = () => {
        setisShowingLang(false)
    }


    const languages = ["English", "Spanish"]
    const [isSubListOpened, setisSubListOpened] = useState(false)

    const toggleSubList = () => {
        setisSubListOpened(!isSubListOpened)
    }

    const [clickedItemValue, setclickedItemValue] = useState(0)
    const [subItemClicked, setsubItemClicked] = useState(false)
    const toggleInnerSubList = (event) => {
        console.log(event.target.value)
        setclickedItemValue(parseInt(event.target.value))
        setsubItemClicked(!subItemClicked)
    }

    const [windowSize, setwindowSize] = useState(0)
    useEffect(() => {
        setwindowSize(window.innerWidth)
        console.log(windowSize)
    }, [windowSize])

    const [isDesktopSubNavShowing, setisDesktopSubNavShowing] = useState(false)
    const displaySubNavDesktop = () => {
        setisDesktopSubNavShowing(true)
    }
    const hideSubNavDesktop = () => {
        setisDesktopSubNavShowing(false)
    }

    return (
        <>
            <header>
                <div className="topPanel p-2 sm:flex sm:items-center sm: justify-start sm:pl-16 sm:border-b md:justify-between md:border-b lg:justify-end">
                    <div className="centerText w-full text-center text-xs font-bold sm:w-auto md:pl-5 lg:w-1/2">*FREE Economy Shipping</div>

                    <div className="settings p-3 flex justify-center items-center  border-b sm:border-none md:mr-14">
                        <div className="flex w-56 items-center justify-center">
                            <div className="user w-35 h-8 flex align-middle items-center">
                                <img className='h-6 rounded-[2rem] object-contain' src="/assets/user.jpg" alt="user" />
                                <div className='username ml-2 text-xs font-bold text-gray-500'>willam smith</div>
                            </div>
                            <div className="m-2 text-xs text-gray-500"> | </div>
                            <div onMouseOver={showLang} onMouseLeave={hideLang} className=" relative lang w-15 flex">
                                <div className='text-xs font-bold text-gray-500'>English</div><div className='mt-1 text-xs text-gray-500'><AiFillCaretDown /></div>

                                {
                                    isShowingLang &&
                                    <div>
                                        <ul onMouseOver={showLang} onMouseLeave={hideLang} className=' absolute bg-white rounded shadow-sm border w-40 h-40 top-5 right-[-4rem]'>
                                            {
                                                languages.map(lang =>
                                                    <li className='border-b p-2 text-xs font-regular hover:font-bold'>{lang}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                }


                            </div>
                        </div>

                    </div>
                </div>
                
                <div className="brandPanel flex justify-between items-center p-3 border-b lg:p-1">
                    <div className="leftCol  ml-14">
                        <div className="logo ">
                            <img className='h-9 object-contain ' src="/assets/brand.svg" alt="" />
                        </div>

                    </div>
                    <div className="rightCol flex mr-[1rem] justify-end w-[19rem] sm:justify-end lg:mr-[5rem] lg:p-5">
                        <div className="searchBtn cursor-pointer ml-2 bg-[#f1f1f2] text-xl  text-[#22a7f1] w-[3rem] h-[3rem] rounded flex justify-center items-center">
                            {
                                windowSize >= 1024 ?
                                    <div className='lg:flex relative '>
                                        <input className='lg:h-[3rem] lg:mr-[17rem] lg:bg-[#f1f1f2] lg:border-none lg:rounded' type="text" name="" id="" />
                                        <AiOutlineSearch className='lg:absolute lg:top-[0.9rem] lg:left-[16rem]' />

                                    </div>
                                    : null
                            }
                            <AiOutlineSearch />

                        </div>
                        <div className="cartBtn relative cursor-pointer ml-2 bg-[#22a7f1] text-xl  text-white w-[3rem] h-[3rem] rounded flex justify-center items-center lg:w-[10rem] lg:mr-[-4rem]">
                            <div className="notification absolute top-2 right-1 w-3 h-3 bg-red-600 color white rounded-[2rem] text-[7px] font-bold flex justify-center align-middle items-center lg:right-16">1</div>
                            <AiOutlineShopping />
                        </div>
                        <div onClick={openMenu} className="menuBtn cursor-pointer ml-2 text-[1.5rem]  w-[3rem] h-[3rem] flex justify-center items-center lg:invisible">
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>

                {
                    windowSize >= 1024 ?

                        <div className="navPanel">
                            <nav>
                                <ul className='flex p-1 border-b  justify-evenly'>
                                    <div className='text-gray-400 font-extralight text-[2rem] '>|</div>
                                    <li className=' rounded h-10  mt-1 w-20 flex  items-center pl-8 pr-9 pt-[0.3rem] pb-[0.3rem] mt-2 hover:bg-[#22a7f1] hover:text-white rounded '>
                                        <div className=' text-lg font-bold w-15 bg-white text-black hover:text-white hover:bg-[#22a7f1]'>< IoHomeOutline className='' /> </div>
                                    </li>
                                    <div className='text-gray-400 text-[2rem] font-extralight'>|</div>

                                    {
                                        navItems.map((item, index) =>
                                            <>

                                                <li onMouseOver={item.category && displaySubNavDesktop} onMouseLeave={item.category && hideSubNavDesktop} className='cursor-pointer h-10  mt-1 flex items-center pl-5 pr-5 pt-[0.3rem] pb-[0.3rem] mt-2 hover:bg-sky-600 hover:text-white rounded'><div className='cursor:pointer  text-sm font-bold'>{item.name}</div>

                                                    {
                                                        item.category && <div className='ml-10 cursor-pointer'><AiFillCaretDown /></div>


                                                    }


                                                </li>
                                                <div className='text-gray-400 text-[2rem] font-extralight'>|</div>
                                            </>

                                        )
                                    }






                                </ul>
                                {
                                    isDesktopSubNavShowing &&
                                    <div onMouseOver={displaySubNavDesktop} onMouseLeave={hideSubNavDesktop} className="subDesktopNav border rounded bg-white w-[80%] h-full mr-[10%] ml-[10%] shadow-sm mt-[-0.5rem]">
                                        <div className="categories p-10">

                                            <ul className='flex justify-start flex-wrap'>
                                                {
                                                    navItems[1].category.map((item, index) =>
                                                        <div className="m-8">

                                                            <li className='font-bold'>{item.name}</li>

                                                            {
                                                                item.category &&
                                                                <ul>
                                                                    {
                                                                        item.category.map((subitem,index)=>
                                                                        <li>{subitem.name}</li>
                                                                        )
                                                                    }

                                                                </ul>
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                }
                            </nav>
                        </div> : null
                }

                {/* dunamic content */}


            </header>

            <div id="mySidepanel" className={`sidepanel w-[100%] ${isMenuOpen == false ? 'invisible ' : ' h-screen visible'} fixed z-1 h-[260px] top-0 left-[-10] bg-white overflow-x-hidden transition-[0.5s] `}>
                <div className="flex justify-between items-center mt-[0] border-b p-2">
                    <div className='font-bold text-xl'>
                        Category
                    </div>
                    <div className="closeBtn">
                        <a href="javascript:void(0)" className="closebtn text-[36px] font-thin" onClick={closeMenu}>×</a>
                        {/* <a href="javascript:void(0)" className="closebtn absolute top-0 right-[25px] text-[36px]" onClick={closeMenu}>×</a>
                    </div> */}

                    </div>


                </div>
                <div className="nav mt-10">
                    <ul className='list-none'>
                    <li className=' hover:bg-sky-400 hover:text-white pl-10 pt-1 pb-1 font-bold'>
                        <IoHomeOutline onClick={closeMenu} className={"cursor-pointer"} />
                    </li>
                        {
                            navItems.map((item, index) =>
                                <>
                                    <li onClick={toggleSubList} key={index + item} className='hover:bg-sky-400 hover:text-white pl-10 pr-10 pt-1 pb-1 font-bold cursor-pointer flex items-center rounded'>
                                        <div>{item.name}</div>
                                        {item.category && <div className='ml-2'><AiFillCaretDown /></div>}
                                    </li>
                                    {isSubListOpened && item.category &&
                                        <ul>

                                            {item.category.map((subItem, index) =>
                                                <>
                                                    <li value={index} onClick={toggleInnerSubList} className='text-sm  pl-14 pt-1 pb-1 font-semibold cursor-pointer flex items-center justify-between mr-12'> <div>{subItem.name}</div>
                                                        {
                                                            subItem.category && <div><AiFillCaretDown /></div>


                                                        }





                                                    </li>
                                                    {
                                                        subItemClicked && subItem.category && index == clickedItemValue &&
                                                        <ul>
                                                            {
                                                                subItem.category.map((innerSubItem, index) =>
                                                                    <li className='text-sm  pl-20 pt-1 pb-1 font-semibold cursor-pointer flex items-center justify-between mr-12'> <div>{innerSubItem.name}</div>
                                                                        {
                                                                            innerSubItem.category && <div><AiFillCaretDown /></div>


                                                                        }
                                                                    </li>
                                                                )

                                                            }

                                                        </ul>
                                                    }

                                                </>
                                            )}

                                        </ul>
                                    }
                                </>


                            )
                        }


                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header