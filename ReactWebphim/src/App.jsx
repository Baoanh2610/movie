import { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './routes/Menu';
import './App.css'


function App() {
  return (
    <>
      <div className='bg-gray-500 min-h-screen w-full flex-center'>
        <div className="content ">
          {/* <div id="menu" className="bg-gray-800 pb-2 pt-2 sticky top-0 z-50">
            <nav className="flex justify-between text-white mt-5 main-nav">
              <Link to="/" className="ml-7"><img src="../image/Black Grey Minimalist Modern Cinema Logo.png" alt="" className="h-10 w-10 rounded-full mb-4" /></Link>
              <div className="relative group">
                <a className="hover:text-red-600" href="">THỂ LOẠI</a>
                <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64 ">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <li><Link to="/theloai/hanhdong" className='block px-4 py-2 hover:bg-gray-600 hover:text-red-600'>Hành Động</Link></li>
                    <li><Link to="/theloai/haihuoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hài Hước</Link></li>
                    <li><Link to="/theloai/kinhdi" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Kinh Dị</Link></li>
                    <li><Link to="/theloai/tinhcam" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Tình Cảm</Link></li>
                    <li><Link to="/theloai/phieuluu" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Phiêu Lưu</Link></li>
                    <li><Link to="/theloai/hoathinh" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hoạt Hình</Link></li>
                    <li><Link to="/theloai/khoahoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Khoa Học</Link></li>
                    <li><Link to="/theloai/lichsu" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Lịch Sử</Link></li>
                    <li><Link to="/theloai/kiemhiep" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Kiếm Hiệp</Link></li>
                    <li><Link to="/theloai/giadinh" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Gia Đình</Link></li>
                    <li><Link to="/theloai/thethao" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Thể Thao</Link></li>
                    <li><Link to="/theloai/vientuong" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Viễn Tưởng</Link></li>

                  </div>
                </ul>
              </div>
              <div className="relative group">
                <a className="hover:text-red-600" href="">QUỐC GIA</a>
                <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <li><Link to="/quocgia/my" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Mỹ</Link></li>
                    <li><Link to="/quocgia/vietnam" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Việt Nam</Link></li>
                    <li><Link to="/quocgia/trungquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Trung Quốc</Link></li>
                    <li><Link to="/quocgia/hanquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hàn Quốc</Link></li>
                  </div>
                </ul>
              </div>
              <div className="relative group">
                <a className="hover:text-red-600" href="">PHIM LẺ</a>
                <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <li><Link to="/phimle/moinhat" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Mới Nhất</Link></li>
                    <li><Link to="/phimle/2023" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2023</Link></li>
                    <li><Link to="/phimle/2022" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2022</Link></li>
                    <li><Link to="/phimle/2021" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2021</Link></li>
                    <li><Link to="/phimle/2020" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2020</Link></li>
                    <li><Link to="/phimle/2019" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2019</Link></li>
                    <li><Link to="/phimle/2018" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2018</Link></li>
                    <li><Link to="/phimle/2017" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2017</Link></li>


                  </div>
                </ul>
              </div>
              <div className="relative group">
                <a className="hover:text-red-600" href="">PHIM BỘ</a>
                <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <li><Link to="/phimbo/my" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Mỹ</Link></li>
                    <li><Link to="/phimbo/vietnam" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Việt Nam</Link></li>
                    <li><Link to="/phimbo/trungquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Trung Quốc</Link></li>
                    <li><Link to="/phimbo/hanquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hàn Quốc</Link></li>
                  </div>
                </ul>
              </div>
              <a className="hover:text-red-600" href="">CHIẾU RẠP</a>
              <a className="hover:text-red-600" href="">SẮP CHIẾU</a>
              <div className="flex items-center border-gray-300 rounded-lg overflow-hidden mb-6">
                <input type="text" className="px-4 w-max text-black focus:outline-none caret-black rounded-full" placeholder="Tìm kiếm..." />
                <button className="flex items-center justify-center px-4 text-white focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.242 4.243a1 1 0 01-1.414 1.414l-4.242-4.243zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

            </nav>
          </div> */}
          <Menu />
          <div id="phimdecu" className="mt-10 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM ĐỀ CỬ</a>
              <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-gray-300 border-spacing-2 mt-5">
              <thead>
                <tr>
                  <td className=" px-0 py-0" rowSpan="2" colSpan="2">
                    <div className="overflow-hidden h-full">
                      <a href="watch.html"><img src="../image/phimdc_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" /></a>
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_8.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimdc_9.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="phimmoicapnhat" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM MỚI CẬP NHẬT</a>
              <a className="hover:text-red-600 font-bold ml-24" href="" >Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-gray-300 border-spacing-2">
              <thead>
                <tr>
                  <td className=" px-0 py-0" rowSpan="2" colSpan="2">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_8.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_9.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_10.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_11.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className=" px-0 py-0">
                    <div className="overflow-hidden h-full">
                      <img src="../image/phimcn_12.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="phimhoathinh" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM HOẠT HÌNH</a>
              <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-gray-300 border-spacing-2">
              <thead>
                <tr>
                  <td rowSpan="2" colSpan="2" className="align-top">
                    <div className="overflow-hidden h-[16.5rem]">
                      <img src="../image/phimhh_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/phimhh_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/phimhh_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/phimhh_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/phimhh_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/phimhh_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/phimhh_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          <div id="phimchieurapbanner" className="mt-5 mx-auto w-3/4 py-0 px-2 ">
            <div className="py-4  bg-gradient-to-r from-black to-red-400 mt-10">
              <a className="justify-center flex cursor-pointer hover:text-red-500 font-bold text-white text-lg">PHIM CHIẾU RẠP</a>
            </div>
          </div>
          <div id="phimchieurap" className="mt-5 mx-auto w-3/4">
            <table className="table-auto w-full h-full border-separate border-spacing-x-2 border-spacing-y-4 ">
              <tr>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
              </tr>

              <tr>
                <td className=" h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_6.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_7.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_8.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_9.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimcr_10.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div id="phimbomoi" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM BỘ MỚI</a>
              <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
            </div>
          </div>
          <div id="phimbo" className="mt-5 mx-auto w-3/4">
            <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
              <tr>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimbo_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimbo_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimbo_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimbo_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimbo_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div id="phimlemoi" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM LẺ MỚI</a>
              <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
              <tr>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimle_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimle_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimle_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimle_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/phimle_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div id="bangxephang" className="mt-5 mx-auto w-3/4">
            <div className="justify-center flex">
              <a className="text-center text-xl font-bold mb-4 hover:text-red-600 cursor-pointer ">Bảng Xếp Hạng</a>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex items-center  p-4">
                <a href="#" className="flex items-center w-full">
                  <span className="text-9xl font-bold text-gray-800 ">1</span>
                  <img src="../image/top1.jpg" alt="Hình ảnh 1" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                </a>
              </div>
              <div className="flex items-center  p-4">
                <a href="#" className="flex items-center w-full">
                  <span className="text-9xl font-bold text-gray-800 ">2</span>
                  <img src="../image/top2.jpg" alt="Hình ảnh 2" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                </a>
              </div>
              <div className="flex items-center  p-4">
                <a href="#" className="flex items-center w-full">
                  <span className="text-9xl font-bold text-gray-800 ">3</span>
                  <img src="../image/top3.jpg" alt="Hình ảnh 3" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                </a>
              </div>
              <div className="flex items-center  p-4">
                <a href="#" className="flex items-center w-full">
                  <span className="text-9xl font-bold text-gray-800 ">4</span>
                  <img src="../image/top4.jpg" alt="Hình ảnh 4" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                </a>
              </div>
              <div className="flex items-center  p-4">
                <a href="#" className="flex items-center w-full">
                  <span className="text-9xl font-bold text-gray-800 ">5</span>
                  <img src="../image/top5.jpg" alt="Hình ảnh 5" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div id="trailer" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="">TRAILER</a>
              <a className="hover:text-red-600 font-bold mr-24" href="">Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-gray-300 border-spacing-2">
              <thead>
                <tr>
                  <td rowSpan="2" colSpan="2" className="align-top">
                    <div className="overflow-hidden h-[16.5rem]">
                      <img src="../image/trailer_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/trailer_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/trailer_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/trailer_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/trailer_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/trailer_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                  <td className="align-top">
                    <div className="overflow-hidden h-32">
                      <img src="../image/trailer_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div id="phimsapchieu" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM SẮP CHIẾU</a>
              <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
              <tr>
                <td className=" h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/sapchieu_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/sapchieu_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/sapchieu_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/sapchieu_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className="  h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/sapchieu_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div id="homnayxemgi" className="mt-5 mx-auto w-3/4">
            <div className="flex justify-between items-center">
              <a className="hover:text-red-600 font-bold ml-24" href="" >HÔM NAY XEM GÌ</a>
              <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
            </div>
            <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
              <tr>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/xemgi_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/xemgi_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/xemgi_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/xemgi_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
                <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                  <div className="w-full h-full">
                    <img src="../image/xemgi_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                  </div>
                </td>
              </tr>
            </table>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
